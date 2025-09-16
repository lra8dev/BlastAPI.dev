import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApiError, monitorError } from "@/middleware";

export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

// Graceful error wrapper for controller methods
export const safeAsyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // Log the error with context
      monitorError(
        error instanceof Error ? error : new Error(String(error)),
        `${req.method} ${req.originalUrl}`,
      );

      // If response hasn't been sent, send an error response
      if (!res.headersSent) {
        if (error instanceof ApiError) {
          return res.status(error.statusCode).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString(),
          });
        }

        // For unexpected errors, don't expose details in production
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          error:
            process.env.NODE_ENV === "development"
              ? error instanceof Error
                ? error.message
                : "An error occurred"
              : "Internal server error",
          timestamp: new Date().toISOString(),
        });
      }

      next(error);
    }
  };
