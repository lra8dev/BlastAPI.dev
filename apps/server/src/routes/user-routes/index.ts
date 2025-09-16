import { Router } from "express";
import { UserController } from "@/controllers";
import { asyncHandler, requireAdmin, safeAsyncHandler } from "@/middleware";

const userController = new UserController();

export const userRouter = Router();

// PUT /api/user/profile - Update current user profile
userRouter.put("/profile", asyncHandler(userController.updateProfile));

// PUT /api/user/password - Change password
userRouter.put("/password", asyncHandler(userController.changePassword));

// DELETE /api/user/account - Delete account
userRouter.delete("/account", safeAsyncHandler(userController.deleteAccount));

// GET /api/user/stats - Get user's test statistics
userRouter.get("/stats", asyncHandler(userController.getUserStats));

// Admin routes
userRouter.get("/admin/all-users", requireAdmin, asyncHandler(userController.getAllUsers));
userRouter.get("/admin/:userId", requireAdmin, asyncHandler(userController.getUserById));
userRouter.delete("/admin/:userId", requireAdmin, safeAsyncHandler(userController.deleteUser));
