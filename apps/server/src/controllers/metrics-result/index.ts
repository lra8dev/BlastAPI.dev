import { Request, Response } from "express";

import prisma from "@/config/db";

export const getMetricsResult = async (req: Request, res: Response) => {
  try {
    const { testRunId } = req.params;
    const metrics = await prisma.metric.findMany({
      where: { testRunId },
      orderBy: { timestamp: "asc" },
    });

    if (!metrics || metrics.length === 0) {
      res.status(404).json({ error: "No metrics found for this test run" });
      return;
    }
    res.status(200).json(metrics);
  } catch (error) {
    console.error("Error fetching metrics:", error);
    res.status(500).json({ error: "Failed to fetch metrics" });
  }
};
