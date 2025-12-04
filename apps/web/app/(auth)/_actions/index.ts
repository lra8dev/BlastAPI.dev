"use server";

import { signIn, signOut } from "@/auth";
import { OnSignInParams } from "../_types";

export const onSignIn = async ({ provider, data, callbackUrl = "/dashboard" }: OnSignInParams) => {
  await signIn(provider, { ...data, redirectTo: callbackUrl });
};

export const onSignOut = async () => {
  await signOut({ redirectTo: "/signin" });
};
