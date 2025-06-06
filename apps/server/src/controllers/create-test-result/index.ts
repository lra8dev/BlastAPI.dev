import { saveTestResult } from "@/services/save-test-result";
import { Request, Response } from "express";

export const createTestResult = async (req: Request, res: Response) => {
  try {
    const {
      testRunId,
      avgLatency,
      avgThroughput,
      totalRequests,
      successRate,
      errorRate,
    } = req.body;

    if (!testRunId || !totalRequests) {
      res.status(400).json({ error: "Missing required fields." });
      return;
    }

    const result = await saveTestResult({
      testRunId,
      avgLatency,
      avgThroughput,
      totalRequests,
      successRate,
      errorRate,
    });

    if (!result) {
      res.status(400).json({ error: "Failed to create test result." });
      return;
    }
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
