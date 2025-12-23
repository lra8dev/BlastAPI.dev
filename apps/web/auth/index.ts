import NextAuth from "next-auth";
import { authConfig } from "./config";

const nextAuthResult = NextAuth(authConfig);

export const { handlers } = nextAuthResult;
export const auth: typeof nextAuthResult.auth = nextAuthResult.auth;
export const signIn: typeof nextAuthResult.signIn = nextAuthResult.signIn;
export const signOut: typeof nextAuthResult.signOut = nextAuthResult.signOut;
