import { Router } from "express";
import { userSignup } from "@/auth";
import { createNewTest } from "@/controllers/create-new-test";
import { deleteTest } from "@/controllers/delete-test";
import { getTestHistory } from "@/controllers/history";
import { getTestResult, getTestResultSummary } from "@/controllers/test-result";
import { debugQueueStatus } from "@/debug/queue-status";

const router = Router();

router.post("/auth/signup", userSignup);

router.post("/newtest", createNewTest);
router.get("/test-history/:userId", getTestHistory);
router.delete("/delete-test/:testRunId", deleteTest);

router.get("/test-result/:testRunId", getTestResult);
router.get("/test-result/:testRunId/summary", getTestResultSummary);

router.get("/debug/queue", async (req, res) => {
  await debugQueueStatus();
  return res.json({ message: "Check console for debug info" });
});

export default router;
