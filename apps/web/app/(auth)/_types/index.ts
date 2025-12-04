import { SignIn } from "@blastapi/validators";
import { ClassValue } from "clsx";

export type OAuthProvider = "github" | "google" | "credentials" | "email";

export interface OnSignInParams {
  provider: OAuthProvider;
  data?: SignIn;
  callbackUrl?: string;
}

export interface OAuthSignInProprs {
  className?: ClassValue;
  callbackUrl?: string;
  isLoading?: boolean;
}
