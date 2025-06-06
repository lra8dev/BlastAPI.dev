import { Request, Response } from "express";
import prisma from "../config/db";

export const getTestHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.params.usersid;
  const { page = 1, limit = 10 } = req.query;

  if (!userId) {
    res.status(400).json({ error: "User ID is required" });
    return;
  }

  try {
    const histories = await prisma.testHistory.findMany({
      where: {
        testRun: { userId },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    });

    const totalCount = await prisma.testHistory.count({
      where: { testRun: { userId } },
    });

    if (histories.length === 0 || totalCount === 0) {
      console.warn(`⚠️ No test history found for user ID: ${userId}`);
      res.status(404).json({ message: "No test history found for this user." });
      return;
    }

    res.status(200).json({
      data: histories,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalCount / Number(limit)),
      },
    });
    return;
  } catch (error: any) {
    console.error("❌ Failed to fetch test history:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
