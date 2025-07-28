import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@blastapi/db";
import { safeUser, validatePassword } from "@blastapi/utils";
import { signInSchema } from "@blastapi/validators";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, ...message);
    },
  },
  session: {
    strategy: "database",
  },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      id: "credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials"); // TODO: what response return to the the user?
        }

        try {
          const parsed = signInSchema.parse(credentials);

          const user = await prisma.user.findUnique({
            where: { email: parsed.email },
          });

          if (!user || !user.password) {
            throw new Error("User not found"); // TODO: what response return to the the user?
          }

          const isPasswordValid = await validatePassword(parsed.password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid password"); // TODO: what response return to the the user?
          }

          return safeUser(user);
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authorization error");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (["google", "github", "credentials"].includes(account?.provider ?? "")) {
        return !!user;
      }

      return false;
    },

    async session({ session, user }) {
      if (session.user && user) {
        session.user = {
          ...user,
          name: user.name ?? null,
          image: user.image ?? null,
        };
      }
      return session;
    },
  },

  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
};
