import { Router } from "express";
import { userSignup } from "@/auth";
import { createNewTest } from "@/controllers/create-new-test";
import { getTestHistory } from "@/controllers/history";
import { getTestResult } from "@/controllers/test-result";

const router = Router();

router.post("/auth/signup", userSignup);

router.post("/newtest", createNewTest);
router.get("/test/:testRunId", getTestResult);
router.get("/history/:userId", getTestHistory);

export default router;
