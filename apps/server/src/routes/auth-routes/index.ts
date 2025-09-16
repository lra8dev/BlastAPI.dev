import { Router } from "express";
import { AuthController } from "@/controllers";
import { asyncHandler } from "@/middleware";

const authController = new AuthController();
export const authRouter = Router();

// POST /api/auth/register - Register new user
authRouter.post("/register", asyncHandler(authController.register));
