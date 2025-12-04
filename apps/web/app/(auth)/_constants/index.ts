import { GitHubIcon } from "@/icons/github";
import { GoogleIcon } from "@/icons/google";
import { FieldConfig } from "@/types";

export const SIGNIN_ITEMS: FieldConfig[] = [
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    placeholder: "example@domain.com",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    placeholder: "Enter your password",
  },
];

export const SIGNUP_ITEMS: FieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
  },
  ...SIGNIN_ITEMS,
];

export const OAUTH_PROVIDERS = [
  {
    name: "google" as const,
    label: "Continue with Google",
    icon: GoogleIcon,
  },
  {
    name: "github" as const,
    label: "Continue with GitHub",
    icon: GitHubIcon,
  },
];
