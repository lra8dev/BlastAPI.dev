import "@/jobs/job-queue"; // WIP: Run Worker as Separate Process
import http from "http";
import app from "./app";
import { appLogger } from "./lib/logger";
import { initSocket } from "./lib/socket";

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 6000;

initSocket(server);

// WIP: Handle errors, graceful shutdown and restart. Also listen on custom domain
server.listen(PORT, () => {
  appLogger.info({ port: PORT }, "Server running");
});
