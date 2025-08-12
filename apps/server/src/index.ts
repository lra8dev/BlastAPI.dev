import http from "http";
import app from "./app";
import { initSocket } from "./lib/socket";

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 6000;

initSocket(server);

// WIP: Handle errors, graceful shutdown and restart. Also listen on custom domain
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
