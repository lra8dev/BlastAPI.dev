import { prisma } from "@blastapi/db";
import { hashPassword } from "@blastapi/utils";
import { signUpSchema } from "@blastapi/validators";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const userSignup = async (req: Request, res: Response): Promise<Response> => {
  try {
    const parsed = signUpSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.message });
    }

    const { email, password, ...rest } = parsed.data;
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        ...rest,
      },
      omit: { password: true },
    });

    if (!user) {
      return res.status(500).json({ message: "Failed to create user" });
    }

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: errorMessage(error) });
  }
};
