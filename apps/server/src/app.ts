import cors from "cors";
import express from "express";
import router from "./routes";

const app = express();

// Express middlewares
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL! || "http://localhost:3001",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-API-Key"],
  }),
);

// API Routes
app.use("/api", router);

export default app;
