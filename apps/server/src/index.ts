import { prisma } from "@blastapi/db";
import { validateEnv } from "@blastapi/validators";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { createServer } from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { logger } from "@/lib/logger";
import { authMiddleware, errorHandler } from "@/middleware";
import { authRouter, testsRouter, userRouter } from "@/routes";
import { initializeQueues } from "@/services/queue";
import { setupSocketHandlers } from "@/services/socket";

class BlastAPIServer {
  private app: express.Application;
  private httpServer: ReturnType<typeof createServer>;
  private io: SocketServer;
  private port: number;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.io = new SocketServer(this.httpServer, {
      cors: {
        origin: process.env.CLIENT_URL!,
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
    this.port = parseInt(process.env.PORT || "5000");

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
    this.initializeSocket();
  }

  // Security middleware
  private initializeMiddleware(): void {
    this.app.use(
      helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
      }),
    );

    this.app.use(
      cors({
        origin: process.env.CLIENT_URL!,
        credentials: true,
      }),
    );

    // Response compression
    this.app.use(compression());

    // Request parsing
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "10mb" }));

    // HTTP request logging
    this.app.use(
      morgan("combined", {
        stream: { write: message => logger.info(message.trim()) },
      }),
    );

    // Rate limiting
    const limiter = rateLimit({
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000"),
      limit: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"),
      message: {
        error: "Too many requests from this IP, please try again later.",
      },
      standardHeaders: true,
      legacyHeaders: false,
    });
    this.app.use("/api", limiter);
  }

  private initializeRoutes(): void {
    this.app.get("/", (req, res) => {
      res.status(200).json({ message: "Welcome to BlastAPI Server" });
    });

    this.app.get("/health", (req, res) => {
      res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      });
    });

    this.app.use("/api/auth", authRouter);
    this.app.use("/api/user", authMiddleware, userRouter);
    this.app.use("/api/test", authMiddleware, testsRouter);

    // 404 handler
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Route not found",
        path: req.originalUrl,
      });
    });
  }

  private initializeErrorHandling(): void {
    this.app.use(errorHandler);
  }

  private initializeSocket(): void {
    setupSocketHandlers(this.io);
  }

  public async start(): Promise<void> {
    try {
      validateEnv();

      await prisma.$connect();
      logger.info("Database connected successfully");

      await initializeQueues();
      logger.info("Queues initialized successfully");

      this.httpServer.listen(this.port, () => {
        logger.info(`BlastAPI Server is running on port ${this.port}`);
        logger.info(`Environment: ${process.env.NODE_ENV}`);
        logger.info(`Health check: http://localhost:${this.port}/health`);
      });
    } catch (error) {
      logger.error(`Failed to start server: ${error}`);
      process.exit(1);
    }
  }

  public async shutdown(): Promise<void> {
    logger.info("Shutting down BlastAPI Server...");

    try {
      await prisma.$disconnect();
      this.httpServer.close(() => {
        logger.info("Server closed");
        process.exit(0);
      });
    } catch (error) {
      logger.error(`Error during shutdown: ${error}`);
      process.exit(1);
    }
  }
}

const server = new BlastAPIServer();

// Graceful shutdown
process.on("SIGTERM", () => server.shutdown());
process.on("SIGINT", () => server.shutdown());

// Start server
server.start().catch(error => {
  logger.error("Server startup failed:", error);
  process.exit(1);
});

export { BlastAPIServer };
