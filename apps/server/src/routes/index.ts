import { Router } from "express";
import { userSignup } from "@/auth";
import { createNewTest } from "@/controllers/create-new-test";
import { deleteTest } from "@/controllers/delete-test";
import { getTestHistory } from "@/controllers/history";
import { getTestResult } from "@/controllers/test-result";

const router = Router();

router.post("/auth/signup", userSignup);

router.post("/newtest", createNewTest);
router.get("/test/:testRunId", getTestResult);
router.get("/history/:userId", getTestHistory);
router.delete("/delete-test/:testRunId", deleteTest);

export default router;
