import { Prisma, prisma } from "@blastapi/db";
import { UserRole } from "@blastapi/db/types";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "@/lib/logger";
import { ApiError } from "../error-handler";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: UserRole;
  };
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const userId = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!userId) {
      throw new ApiError("No session token found", StatusCodes.UNAUTHORIZED);
    }

    const session = await prisma.session.findFirst({
      where: {
        userId,
      },
      select: {
        sessionToken: true,
        expires: true,
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!session) {
      throw new ApiError("Invalid or expired session", StatusCodes.UNAUTHORIZED);
    }

    if (session.expires < new Date()) {
      await prisma.session.delete({
        where: { sessionToken: session.sessionToken },
      });
      throw new ApiError("Session expired", StatusCodes.UNAUTHORIZED);
    }

    req.user = {
      id: session.user.id,
      email: session.user.email,
      role: session.user.role,
    };

    logger.debug({ userId: session.user.id }, "User authenticated successfully");

    next();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      logger.error(
        {
          error: error.message,
          code: error.code,
        },
        "Database error during authentication",
      );
      return next(new ApiError("Authentication database error", StatusCodes.INTERNAL_SERVER_ERROR));
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      logger.error({ error: error.message }, "Database validation error during authentication");
      return next(
        new ApiError("Authentication validation error", StatusCodes.INTERNAL_SERVER_ERROR),
      );
    }

    if (error instanceof ApiError) {
      return next(error);
    }

    logger.error(
      { error: error instanceof Error ? error.message : "Unknown error occurred" },
      "Unexpected authentication error",
    );
    next(new ApiError("Authentication failed", StatusCodes.INTERNAL_SERVER_ERROR));
  }
};

// Middleware to require admin role
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user) {
    throw new ApiError("Authentication required", StatusCodes.UNAUTHORIZED);
  }

  if (req.user.role !== "admin") {
    throw new ApiError("Admin access required", StatusCodes.FORBIDDEN);
  }

  next();
};
