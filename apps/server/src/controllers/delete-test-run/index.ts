import { Request, Response } from "express";

import { deleteTest } from "@/services/delete-test";

export const deleteTestRun = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "Test ID is required" });
    return;
  }

  try {
    const result = await deleteTest(id);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ message: "Deletion failed", error: err.message });
  }
};
