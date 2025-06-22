import { z } from "zod";
import { httpMethods } from "@/constants";

const testFormSchema = z.object({
  testRunId: z.string().uuid("Invalid Test Run ID"),
  name: z.string().min(3, "Name is required").max(100, "Name is too long"),
  url: z.string().url("Enter valid URL"),
  method: z.enum(httpMethods as [string, ...string[]]),
  totalRequests: z.coerce.number().min(1, "Enter atleast 1").max(100), // WIP: Increase requests to 1k
  concurrency: z.coerce.number().min(1, "Enter atleast 1").max(100),
  duration: z.coerce.number().min(1, "Enter atleast 1").max(100),
  requestRate: z.coerce.number().min(1, "Enter atleast 1").max(100),
  headers: z.string().optional(),
  body: z.string().optional(),
});

export { testFormSchema };

export type TestFormValues = z.infer<typeof testFormSchema>;
