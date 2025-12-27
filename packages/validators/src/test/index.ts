import { HttpMethod } from "@blastapi/db/types";
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
  name: z.string().min(1, "Name is required").max(255, "Name is too long!"),
  url: z.url("Enter a valid url!"),
  method: z.enum(HttpMethod),
  region: z.enum(TestRegions),
  duration: z
    .number()
    .min(1, "Duration must be greater than 0!")
    .max(480, "No more that 480 seconds"),
  rampUp: z.number().min(1, "Ramp up must be greater than 0!").max(300, "No more that 300 seconds"),
  rampUpSteps: z
    .number()
    .min(1, "Ramp up steps must be greater than 0!")
    .max(50, "No more that 50"),
  vusers: z.number().min(1, "Virtual users must be greater than 0!").max(1000, "No more that 1000"),
  headers: z.record(z.string(), z.string()).optional(),
  body: z.record(z.string(), z.string()).optional(),
});

export type NewTestConfig = z.infer<typeof newTestSchema>;
