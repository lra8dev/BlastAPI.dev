import { prisma } from "@blastapi/db";
import { newTestSchema } from "@blastapi/validators";
import { Request, Response } from "express";
import { enqueueTestJob } from "@/jobs/produce-test-job";
import { errorMessage } from "@/utils/error-message";

export const createNewTest = async (req: Request, res: Response) => {
  try {
    const parsed = newTestSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid test configuration",
        details: parsed.error.message,
      });
    }

    const { id, userId } = parsed.data;

    if (!id || !userId) {
      return res.status(400).json({ success: false, message: "Missing test ID or user ID" });
    }

    const testRun = await prisma.testRun.create({
      data: {
        id,
        userId,
        status: "Queued",
        createdAt: new Date(),
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
      },
    });

    const jobId = await enqueueTestJob(parsed.data);

    if (!jobId) {
      await prisma.testRun.update({
        where: { id },
        data: { status: "Failed" },
      });

      return res.status(500).json({ success: false, message: "Failed to enqueue test job" });
    }

    return res.status(201).json({
      success: true,
      message: "Test successfully queued for execution",
      data: {
        jobId,
        testRunId: testRun.id,
        status: testRun.status,
        createdAt: testRun.createdAt,
      },
    });
  } catch (error) {
    // Attempt cleanup if test was partially created
    if (req.body?.id) {
      try {
        await prisma.testRun.updateMany({
          where: { id: req.body.id, status: "Queued" },
          data: { status: "Failed" },
        });
      } catch (cleanupError) {
        console.error("❌ Failed to cleanup failed test run:", cleanupError);
      }
    }

    return res.status(500).json({
      success: false,
      message: errorMessage(error) || "Failed to create test run",
      timestamp: new Date().toISOString(),
    });
  }
};
