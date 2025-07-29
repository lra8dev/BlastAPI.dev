import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const deleteTest = async (req: Request, res: Response) => {
  try {
    const { testRunId: id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid test id" });
    }

    const testRun = await prisma.testRun.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!testRun?.id) {
      return res.status(404).json({ message: "Test not found" });
    }

    await prisma.$transaction([
      prisma.testMetric.deleteMany({ where: { testRunId: testRun.id } }),
      prisma.testResult.delete({ where: { testRunId: testRun.id } }),
      prisma.testConfig.delete({ where: { testRunId: testRun.id } }),
      prisma.testRun.delete({ where: { id: testRun.id } }),
    ]);

    return res.status(200).json({ message: "Test deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: errorMessage(error) });
  }
};
