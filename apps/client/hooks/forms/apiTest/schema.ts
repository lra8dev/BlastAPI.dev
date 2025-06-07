import { z } from "zod";

const testFormSchema = z.object({
  testRunId: z.string().uuid("Invalid Test Run ID"),
  url: z.string().url("Invalid URL"),
  method: z.enum(["GET", "POST", "PUT", "DELETE"]),
  totalRequests: z.coerce.number().min(1).max(1000),
  concurrency: z.coerce.number().min(1).max(1000),
  duration: z.coerce.number().min(1).max(3600),
  requestRate: z.coerce.number().min(1).max(1000),
  headers: z.record(z.string(), z.string()).optional(),
  body: z.any().optional(),
});

export const useTestFormSchema = () => testFormSchema;

export type TestFormValues = z.infer<typeof testFormSchema>;
