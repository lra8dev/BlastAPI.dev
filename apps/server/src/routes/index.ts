import { Router } from "express";

import { deleteTestRun } from "@/controllers/delete-test-run";
import { getMetricsResult } from "@/controllers/metrics-result";
import { getTestConfig } from "@/controllers/test-config";
import { getTestResult } from "@/controllers/test-result";

import { createTestResult } from "../controllers/create-test-result";
import { getTestHistory } from "../controllers/test-history";
import { createTestRun } from "../controllers/test-run";

const router = Router();

router.post("/create-test", createTestRun);
router.delete("/test/:id", deleteTestRun);
router.get("/history/:usersid", getTestHistory);

router.get("/test-result/:testRunId", getTestResult);
router.post("/test-result/", createTestResult);
router.get("/test-result/:testRunId/metrics", getMetricsResult);
router.get("/test-result/:testRunId/config", getTestConfig);

export default router;
