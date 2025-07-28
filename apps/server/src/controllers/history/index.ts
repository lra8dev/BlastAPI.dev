import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

// WIP: Improve it later
export const getTestHistory = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const testRunId = await prisma.testRun.findFirst({
      where: { userId },
      select: { id: true },
    });

    if (!testRunId?.id) {
      return res.status(404).json({ message: "User does not associated with any tests" });
    }

    const testHistories = await prisma.testRun.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        testConfig: {
          where: {
            testRunId: testRunId.id,
          },
        },
        testMetrics: {
          where: {
            testRunId: testRunId.id,
          },
        },
        testResult: {
          where: {
            testRunId: testRunId.id,
          },
        },
      },
    });

    if (testHistories.length === 0) {
      return res.status(404).json({ message: "Not tests found" });
    }

    return res.status(200).json({ data: testHistories });
  } catch (error) {
    return res.status(500).json({ message: errorMessage(error) });
  }
};
