import { Router } from "express";
import { getTestHistory } from "../controllers/testHistory";
import { createTestRun } from "../controllers/createTestRun";

const router = Router();

router.post("/create", createTestRun);
router.get("/history/:usersid", getTestHistory);

// WIP: create more API routes.

export default router;
