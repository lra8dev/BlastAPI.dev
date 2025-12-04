import { prisma } from "@blastapi/db";
import { hashPassword } from "@blastapi/utils";
import { signUpSchema } from "@blastapi/validators";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "@/lib/logger";
import { ApiError } from "@/middleware";

export class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    const { email, password, ...rest } = signUpSchema.parse(req.body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      throw new ApiError("User already exists with this email", StatusCodes.CONFLICT);
    }

    const hashedPassword = await hashPassword(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        ...rest,
      },
      omit: { password: true },
    });

    if (!user) {
      logger.error(`User registration failed for: ${email}`);
      throw new ApiError("User registration failed", StatusCodes.INTERNAL_SERVER_ERROR);
    }

    logger.info(`New user registered: ${user.email}`);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  }
}
