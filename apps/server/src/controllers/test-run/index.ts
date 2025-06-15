import { Request, Response } from "express";

import prisma from "@/config/db";
import { enqueueTestJob } from "@/jobs/produce-test-job";

export const createTestRun = async (req: Request, res: Response) => {
  const { testRunId, testConfig } = req.body;

  if (!testRunId) {
    res.status(400).json({ error: "Missing testRunId or testConfig" });
    return;
  }

  try {
    const testRun = await prisma.testRun.create({
      data: {
        userId: testRunId,
        testName: testConfig.testName,
        url: testConfig.url,
        method: testConfig.method,
        status: "queued",
        requestCount: testConfig.totalRequests,
        duration: 0,
        avgResponseTime: 0,
        maxResponseTime: 0,
        errorRate: 0,
      },
    });

    const jobId = await enqueueTestJob({ testRunId: testRun.id, testConfig });

    if (!jobId) {
      res.status(500).json({ error: "Failed to enqueue test job" });
      return;
    }

    res.status(200).json({ jobId, testRunId: testRun.id });
    return;
  } catch (error) {
    console.error("❌ Error creating test run:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
