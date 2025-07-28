import { UserRole } from "@blastapi/db";
import { z, ZodError } from "zod";

export const signInSchema = z.object({
  email: z.email("Enter a valid email address!"),
  password: z.string().min(6, "Enter at least 6 characters").max(20, "Too long password!"),
});

export const signUpSchema = signInSchema.extend({
  role: z.enum(UserRole),
  name: z.string().nullable(),
  image: z.url().nullable(),
});

export type SignUp = z.infer<typeof signUpSchema>;
export type SignIn = z.infer<typeof signInSchema>;
export { ZodError };
