import { TestStatus } from "@blastapi/db/types";
import { z } from "zod";

export const paginationSchema = z.object({
  page: z.string().transform(Number).pipe(z.number().min(1)).default(1),
  limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default(20),
  status: z.enum(TestStatus).optional(),
  sortBy: z.enum(["createdAt", "startedAt", "endedAt", "status"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type PaginationSchema = z.infer<typeof paginationSchema>;
