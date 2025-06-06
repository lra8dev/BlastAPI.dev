import http from "http";
import dotenv from "dotenv";
import { initSocket } from "./lib/socket";
import app from "./app";

dotenv.config();
const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 5000;

// Initialize Socket.IO
initSocket(server);

server.listen(PORT, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
