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
        message: "Invalid test configuration",
        details: parsed.error.message,
      });
    }

    const { id } = parsed.data;

    if (!id) {
      return res.status(400).json({ message: "Missing test ID in configuration" });
    }

    const testRun = await prisma.testRun.create({
      data: {
        id,
        userId: id,
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

      return res.status(500).json({ message: "Failed to enqueue test job" });
    }

    return res.status(201).json({
      success: true,
      jobId,
      testRun,
      message: "Test successfully queued for execution",
      estimatedStartTime: "Within 30 seconds", // TODO: Adjust based on queue processing speed
    });
  } catch (error: any) {
    console.error("❌ Error creating test run:", error);

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
      message: errorMessage(error),
      timestamp: new Date().toISOString(),
    });
  }
};
