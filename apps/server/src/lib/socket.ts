import http from "http";
import { Server } from "socket.io";

let io: Server;

export const initSocket = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_BASE_URL!,
    },
  });

  io.on("connection", socket => {
    console.log(`🚀 Client connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
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
