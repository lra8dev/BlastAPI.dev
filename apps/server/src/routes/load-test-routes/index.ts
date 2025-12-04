import { Router } from "express";
import { TestController } from "@/controllers";
import { asyncHandler, requireAdmin } from "@/middleware";

const testController = new TestController();

export const testsRouter = Router();

// POST /api/test/newtest - Create and start a new load test
testsRouter.post("/newtest", asyncHandler(testController.createTest));

// GET /api/test/history - Get user's test runs
testsRouter.get("/history", asyncHandler(testController.getUserTestRuns));

// GET /api/test/:id - Get specific test run by ID
testsRouter.get("/:id", asyncHandler(testController.getTestRun));

// POST /api/test/:id/cancel - Cancel a running test
// testsRouter.post("/:id/cancel", safeAsyncHandler(testController.cancelTest));

// DELETE /api/test/:id - Delete a test run
// testsRouter.delete("/:id", asyncHandler(testController.deleteTest));

// GET /api/test/:id/metrics - Get test metrics (time series data)
testsRouter.get("/:id/metrics", asyncHandler(testController.getTestMetrics));

// GET /api/test/:id/errors - Get error information
testsRouter.get("/:id/errors", asyncHandler(testController.getTestErrors));

// Admin routes
testsRouter.get("/admin/all-tests", requireAdmin, asyncHandler(testController.getAllTestRuns));
testsRouter.get("/admin/stats", requireAdmin, asyncHandler(testController.getSystemStats));
