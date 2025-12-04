import { Prisma } from "@blastapi/db";
import { ZodError } from "@blastapi/validators";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "@/lib/logger";

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class ApiError extends Error implements AppError {
  public statusCode: number;
  public isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR,
    isOperational: boolean = true,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // Prevent duplicate responses
  if (res.headersSent) {
    return next(error);
  }

  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Internal server error";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let details: any = undefined;

  // Log the error with context
  logger.error(
    {
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
        ...(error instanceof ApiError && {
          statusCode: error.statusCode,
          isOperational: error.isOperational,
        }),
      },
      request: {
        method: req.method,
        url: req.url,
        userAgent: req.get("User-Agent"),
        ip: req.ip || req.socket.remoteAddress,
        // Only log headers in development (avoid sensitive data)
        ...(process.env.NODE_ENV === "development" && {
          headers: req.headers,
          body: req.body,
        }),
      },
    },
    "Request error",
  );

  // Handle different error types
  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error instanceof ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation error";
    details = error.issues.map(err => ({
      field: err.path.join("."),
      message: err.message,
      code: err.code,
    }));
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        statusCode = StatusCodes.CONFLICT;
        message = "A record with this data already exists";
        details = { duplicateField: error.meta?.target };
        break;
      case "P2025":
        statusCode = StatusCodes.NOT_FOUND;
        message = "Record not found";
        break;
      case "P2003":
        statusCode = StatusCodes.BAD_REQUEST;
        message = "Foreign key constraint failed";
        details = { constraintField: error.meta?.field_name };
        break;
      case "P2014":
        statusCode = StatusCodes.BAD_REQUEST;
        message = "Invalid ID provided";
        break;
      case "P2021":
        statusCode = StatusCodes.NOT_FOUND;
        message = "Table does not exist";
        break;
      case "P2022":
        statusCode = StatusCodes.NOT_FOUND;
        message = "Column does not exist";
        break;
      default:
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        message = "Database error occurred";
        details = { code: error.code };
    }
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Invalid data provided to database";
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    statusCode = StatusCodes.SERVICE_UNAVAILABLE;
    message = "Database connection failed";
  } else if (error.name === "SyntaxError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Invalid JSON format";
  } else if (error.name === "JsonWebTokenError") {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = "Invalid authentication token";
  } else if (error.name === "TokenExpiredError") {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = "Authentication token has expired";
  } else if (error.name === "MulterError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "File upload error";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const multerError = error as any;
    if (multerError.code === "LIMIT_FILE_SIZE") {
      message = "File size too large";
    } else if (multerError.code === "LIMIT_FILE_COUNT") {
      message = "Too many files uploaded";
    }
  } else if (error.name === "ValidationError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation failed";
  } else if (error.name === "CastError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Invalid data format";
  } else if (error.name === "TimeoutError") {
    statusCode = StatusCodes.REQUEST_TIMEOUT;
    message = "Request timeout";
  } else if (error.name === "PayloadTooLargeError") {
    statusCode = StatusCodes.REQUEST_TOO_LONG;
    message = "Request payload too large";
  }
  // TODO: Handle NextAuth errors.
  else if (error instanceof Error) {
    // Only expose the message in development to avoid leaking sensitive info
    message = process.env.NODE_ENV === "development" ? error.message : "An error occurred";
  }
  // Send error response
  const errorResponse = {
    success: false,
    error: message,
    timestamp: new Date().toISOString(),
    requestId: req.headers["x-request-id"] || "unknown",
    ...(details && { details }),
    // Include stack trace only in development and for operational errors
    ...(process.env.NODE_ENV === "development" &&
      error instanceof ApiError &&
      error.isOperational && {
        stack: error.stack,
      }),
  };

  // Additional logging for non-operational errors
  if (error instanceof ApiError && !error.isOperational) {
    logger.error(
      {
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
          statusCode: error.statusCode,
        },
        context: "Non-operational error occurred",
      },
      "System error - requires investigation",
    );
  }

  res.status(statusCode).json(errorResponse);
};

// Advanced error monitoring
export const monitorError = (error: Error, context?: string): void => {
  const isOperational = error instanceof ApiError ? error.isOperational : false;

  logger.error(
    {
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
        isOperational,
        timestamp: new Date().toISOString(),
      },
      context: context || "Unknown context",
    },
    "Error monitoring",
  );
};
