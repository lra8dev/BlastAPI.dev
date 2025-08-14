import { HttpMethod } from "@blastapi/db";
import { z } from "zod";

export enum TestRegions {
  UsEast1 = "us-east-1",
  UsWest2 = "us-west-2",
  EuWest1 = "eu-west-1",
  ApSouth1 = "ap-south-1",
  ApSoutheast1 = "ap-southeast-1",
  ApNortheast1 = "ap-northeast-1",
  ApNortheast3 = "ap-northeast-3",
  CaCentral1 = "ca-central-1",
  EuSouth1 = "eu-south-1",
  EuWest2 = "eu-west-2",
  SaEast1 = "sa-east-1",
  UsGovEast1 = "us-gov-east-1",
}

export const newTestSchema = z.object({
  id: z.uuid(),
  userId: z.uuid(),
  name: z.string().min(1, "Name is required").max(100, "Name is too long!"),
  url: z.url("Enter a valid url!"),
  method: z.enum(HttpMethod),
  region: z.enum(TestRegions),
  totalRequests: z
    .number()
    .min(1, "Total requests must be greater than 0!")
    .max(100, "No more that 100"),
  concurrency: z
    .number()
    .min(1, "Concurrency must be greater than 0!")
    .max(100, "No more that 100"),
  duration: z.number().min(1, "Duration must be greater than 0!").max(100, "No more that 100"),
  requestRate: z
    .number()
    .min(1, "Request rate must be greater than 0!")
    .max(100, "No more that 100"),
  headers: z.string().nullable(),
  body: z.string().nullable(),
});

export type NewTestConfig = z.infer<typeof newTestSchema>;
