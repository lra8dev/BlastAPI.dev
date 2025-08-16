import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const getTestHistory = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId || typeof userId !== "string" || userId.trim() === "") {
      return res.status(400).json({ success: false, message: "Invalid user id" });
    }

    const testHistories = await prisma.$transaction(async tx => {
      return await tx.testRun.findMany({
        where: { userId: userId.trim() },
        select: {
          id: true,
          status: true,
          createdAt: true,
          user: {
            select: {
              name: true,
              email: true,
              image: true,
              role: true,
            },
          },
          testConfig: {
            select: {
              name: true,
              region: true,
            },
          },
          testResult: {
            select: {
              duration: true,
            },
          },
          healthCheckSummary: {
            select: {
              passedChecks: true,
              failedChecks: true,
              totalChecks: true,
              overallStatus: true,
            },
          },
        },
        take: 10,
      });
    });

    if (!testHistories || testHistories.length === 0) {
      return res.status(404).json({ success: false, message: "No tests found" });
    }

    const serializedData = JSON.parse(JSON.stringify(testHistories)) as typeof testHistories;

    return res.status(200).json({
      success: true,
      message: "Test history fetched successfully",
      data: serializedData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: errorMessage(error) || "Failed to fetch test history",
    });
  }
};
