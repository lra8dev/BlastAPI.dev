import { Router } from "express";
import { userSignup } from "@/auth";
import { createNewTest } from "@/controllers/create-new-test";

const router = Router();

router.post("/auth/signup", userSignup);

router.post("/newtest", createNewTest);

export default router;
