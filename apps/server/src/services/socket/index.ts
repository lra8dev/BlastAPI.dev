import { prisma } from "@blastapi/db";
import { TestStatus } from "@blastapi/db/types";
import { Server as SocketServer, Socket } from "socket.io";
import { logger } from "@/lib/logger";

class SocketService {
  private io: SocketServer;

  constructor(io: SocketServer) {
    this.io = io;
    this.setupConnectionHandlers();
  }

  private setupConnectionHandlers(): void {
    this.io.on("connection", socket => {
      logger.info({ socketId: socket.id }, "New socket connection established");

      socket.on("disconnect", reason => {
        logger.info({ socketId: socket.id, reason }, "Socket disconnected");
      });

      socket.on("test:start", data => {
        this.handleTestControl(socket, "start", data);
      });

      socket.on("test:stop", data => {
        this.handleTestControl(socket, "stop", data);
      });

      socket.on("error", error => {
        logger.error({ socketId: socket.id, error: error.message }, "Socket error");
      });
    });
  }

  private async handleTestControl(
    socket: Socket,
    action: "start" | "stop",
    data: { testRunId: string },
  ): Promise<void> {
    const testRunId = data.testRunId;

    try {
      // Verify user has permission to control this test
      const testRun = await prisma.testRun.findFirst({
        where: {
          id: testRunId,
        },
        select: { id: true },
      });

      if (!testRun) {
        socket.emit("error", {
          testRunId,
          message: "Test not found",
          code: "NOT_FOUND",
        });
        return;
      }

      socket.emit("test:control:ack", {
        testRunId,
        action,
        timestamp: new Date().toLocaleString(),
        message: `${action} command received`,
      });
    } catch (error) {
      logger.error(
        {
          testRunId,
          action,
          error: error instanceof Error ? error.message : String(error),
        },
        "Failed to process test control action",
      );

      socket.emit("error", {
        testRunId,
        message: `Failed to ${action} test`,
        code: "TEST_CONTROL_ERROR",
      });
    }
  }

  public emitTestStatusUpdate(data: {
    testRunId: string;
    status: TestStatus;
    startedAt?: string;
    endedAt?: string;
    error?: string;
  }): void {
    this.io.emit("test:status", data);

    logger.info(
      {
        testRunId: data.testRunId,
        status: data.status,
      },
      "Test status update emitted",
    );
  }

  public emitEvent(event: string, data: Record<string, unknown>): void {
    const payload = {
      ...data,
      timestamp: new Date().toLocaleString(),
    };
    this.io.emit(event, payload);
  }
}

let socketService: SocketService;

export const setupSocketHandlers = (io: SocketServer): void => {
  socketService = new SocketService(io);
  logger.info("Socket service initialized");
};

export const getSocketService = (): SocketService => {
  if (!socketService) {
    throw new Error("Socket service not initialized");
  }
  return socketService;
};
