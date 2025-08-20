import pino from "pino";

const isDevelopment = process.env.NODE_ENV === "development";

export const logger = pino({
  level: process.env.LOG_LEVEL || (isDevelopment ? "debug" : "info"),
  transport: isDevelopment
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
        },
      }
    : undefined,
  formatters: {
    level: (label: string) => {
      return { level: label.toUpperCase() };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export const redisLogger = logger.child({ component: "redis" });
export const queueLogger = logger.child({ component: "queue" });
export const workerLogger = logger.child({ component: "worker" });
export const jobLogger = logger.child({ component: "job" });
export const healthCheckLogger = logger.child({ component: "health-check" });
export const appLogger = logger.child({ component: "app" });
