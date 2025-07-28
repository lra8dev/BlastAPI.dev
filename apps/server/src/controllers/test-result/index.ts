import { prisma } from "@blastapi/db";
import { Request, Response } from "express";
import { errorMessage } from "@/utils/error-message";

export const getTestResult = async (req: Request, res: Response) => {
  try {
    const { testRunId } = req.params;

    if (!testRunId) {
      return res.status(400).json({ message: "Invalid test id" });
    }

    const result = await prisma.testResult.findUnique({
      where: { testRunId },
    });

    if (!result) {
      return res.status(404).json({ error: "Test result not found." });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: errorMessage(err) });
  }
};
