import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const getTestResult = async (req: Request, res: Response) => {
  try {
    const { testRunId } = req.params;

    if (!testRunId || typeof testRunId !== "string" || testRunId.trim() === "") {
      return res.status(400).json({ success: false, message: "Invalid test run ID" });
    }

    const result = await prisma.testRun.findUnique({
      where: { id: testRunId.trim() },
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
            url: true,
            method: true,
            region: true,
            duration: true,
            requestCount: true,
            concurrencyLevel: true,
          },
        },
        testMetrics: {
          select: {
            timestamp: true,
            latency: true,
            throughput: true,
            statusCode: true,
            usersCreated: true,
            p95: true,
            p99: true,
            avgRequest: true,
            maxRequest: true,
          },
          orderBy: { timestamp: "asc" },
        },
        testResult: true,
        healthCheckSummary: {
          select: {
            totalChecks: true,
            passedChecks: true,
            failedChecks: true,
            overallStatus: true,
            passPercentage: true,
            healthCheckResults: {
              select: {
                checkName: true,
                threshold: true,
                actualValue: true,
                operator: true,
                unit: true,
                passed: true,
                failureDetails: true,
              },
              orderBy: { createdAt: "asc" },
            },
          },
        },
      },
    });

    if (!result) {
      return res.status(404).json({ success: false, message: "Test result not found" });
    }

    const serializedData = JSON.parse(JSON.stringify(result)) as typeof result;

    return res.status(200).json({
      success: true,
      message: "Test result retrieved successfully",
      data: serializedData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: errorMessage(err) || "Failed to fetch test result",
    });
  }
};
