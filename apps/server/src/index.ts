import dotenv from "dotenv";
import http from "http";
import app from "./app";
import { initSocket } from "./lib/socket";

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 6000;

// Initialize Socket.IO
initSocket(server);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
