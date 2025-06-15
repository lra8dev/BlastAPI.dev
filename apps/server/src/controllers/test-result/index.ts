import { Request, Response } from "express";

import prisma from "@/config/db";
import { getCachedTestResult } from "@/lib/cache.redis";

export const getTestResult = async (req: Request, res: Response) => {
  try {
    const { testRunId } = req.params;
    const cached = await getCachedTestResult(testRunId); // FIXME: testRunId is string | undefined
    if (cached) {
      res.status(200).json(cached);
      return;
    }

    const result = await prisma.testResult.findUnique({
      where: { testRunId },
    });

    if (!result) {
      res.status(404).json({ error: "Test result not found." });
      return;
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
