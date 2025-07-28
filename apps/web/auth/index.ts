import NextAuth from "next-auth";
import { authConfig } from "./config";

// FIXME: next-auth type errors
export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
