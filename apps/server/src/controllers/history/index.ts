import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const getTestHistory = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const testHistories = await prisma.testRun.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
            role: true,
          },
        },
        testConfig: true,
        testMetrics: true,
        testResult: true,
      },
    });

    if (!testHistories.length) {
      return res.status(404).json({ message: "No tests found" });
    }

    return res.status(200).json({ data: testHistories });
  } catch (error) {
    return res.status(500).json({ message: errorMessage(error) });
  }
};
