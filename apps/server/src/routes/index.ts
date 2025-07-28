import { Router } from "express";
import { userSignup } from "@/auth";

const router = Router();

router.post("/auth/signup", userSignup);

export default router;
