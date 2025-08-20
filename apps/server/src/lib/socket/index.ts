import http from "http";
import { Server } from "socket.io";
import { appLogger } from "../logger";

let io: Server;

export const initSocket = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_BASE_URL!,
    },
  });

  io.on("connection", socket => {
    appLogger.info({ socketId: socket.id }, "Client connected");

    socket.on("disconnect", () => {
      appLogger.info({ socketId: socket.id }, "Client disconnected");
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};
