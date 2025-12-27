import { UserRole } from "@blastapi/db/types";
import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(6, "Enter at least 6 characters").max(20, "Too long password"),
});

export const signUpSchema = signInSchema.extend({
  role: z.enum(UserRole),
  name: z.string().min(2).max(50, "Name must be at most 50 characters").nullable(),
  image: z.url().nullable(),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2).max(50, "Name must be at most 50 characters").nullable(),
  email: z.email("Enter valid email address").nullable(),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(6, "Enter valid password").max(20, "Too long password"),
  newPassword: z.string().min(6, "Enter at least 6 characters").max(20, "Too long password"),
});

export const deleteAccountSchema = z.object({
  password: z.string().min(6, "Enter valid password").max(20, "Too long password"),
});

export type SignUp = z.infer<typeof signUpSchema>;
export type SignIn = z.infer<typeof signInSchema>;
export type UpdateProfile = z.infer<typeof updateProfileSchema>;
export type ChangePassword = z.infer<typeof changePasswordSchema>;
export type DeleteAccount = z.infer<typeof deleteAccountSchema>;
