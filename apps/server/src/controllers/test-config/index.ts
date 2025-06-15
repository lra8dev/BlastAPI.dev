import { Request, Response } from "express";

import prisma from "@/config/db";

export const getTestConfig = async (req: Request, res: Response) => {
  try {
    const { testRunId } = req.params;
    const config = await prisma.testConfig.findUnique({
      where: { testRunId },
    });

    if (!config) {
      res.status(404).json({ error: "Test configuration not found." });
      return;
    }

    res.status(200).json(config);
  } catch (error) {
    console.error("Error fetching test configuration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
