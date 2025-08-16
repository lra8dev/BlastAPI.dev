import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const deleteTest = async (req: Request, res: Response) => {
  try {
    const { testRunId: id } = req.params;

    if (!id || typeof id !== "string" || id.trim() === "") {
      return res.status(400).json({ success: false, message: "Invalid test ID" });
    }

    const testRunId = id.trim();

    const testRun = await prisma.testRun.findUnique({
      where: { id: testRunId },
      select: {
        id: true,
        status: true,
        testConfig: { select: { id: true } },
        testResult: { select: { id: true } },
        healthCheckSummary: { select: { id: true } },
      },
    });

    if (!testRun) {
      return res.status(404).json({ success: false, message: "Test not found" });
    }

    if (testRun.status === "Running") {
      return res.status(400).json({
        success: false,
        message: "Cannot delete a test that is currently running",
      });
    }

    await prisma.$transaction(async tx => {
      if (tx.healthCheckSummary) {
        await tx.healthCheckSummary.delete({ where: { testRunId } });
      }

      await tx.testMetric.deleteMany({ where: { testRunId } });

      if (tx.testResult) {
        await tx.testResult.delete({ where: { testRunId } });
      }

      if (tx.testConfig) {
        await tx.testConfig.delete({ where: { testRunId } });
      }

      await tx.testRun.delete({ where: { id: testRunId } });
    });

    return res.status(200).json({ success: true, message: "Test deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: errorMessage(error) || "Failed to delete test",
    });
  }
};
