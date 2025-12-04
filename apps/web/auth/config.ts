import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@blastapi/db";
import { validatePassword } from "@blastapi/utils";
import { signInSchema } from "@blastapi/validators";
import type { NextAuthConfig } from "next-auth";
import { decode, encode } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const adapter = PrismaAdapter(prisma);

export const authConfig: NextAuthConfig = {
  adapter,
  session: { strategy: "database" },
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
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { success, data } = signInSchema.safeParse(credentials);

        if (!success) return null;

        const { email, password } = data;

        try {
          const user = await prisma.user.findUnique({ where: { email } });

          if (!user || !user.password) return null;

          const isPasswordValid = await validatePassword(password, user.password);

          if (!isPasswordValid) return null;

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _, ...safeUser } = user;

          return safeUser;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      return ["google", "github", "credentials"].includes(account?.provider ?? "") && !!user;
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
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      if (new URL(url).origin === baseUrl) {
        return url;
      }

      return baseUrl;
    },
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.isCredentials = true;
      }

      if (user?.id) {
        token.sub = user.id;
      }

      return token;
    },
  },
  jwt: {
    encode: async ({ token, secret, maxAge, salt }) => {
      try {
        if (token?.sub && token?.isCredentials) {
          const sessionToken = crypto.randomUUID();
          const expires = new Date(Date.now() + (maxAge ?? 30 * 24 * 60 * 60) * 1000);

          await adapter?.createSession?.({
            sessionToken,
            userId: token.sub,
            expires,
          });

          return sessionToken;
        }

        return await encode({ token, secret, maxAge, salt });
      } catch (error) {
        throw error;
      }
    },
    decode: async ({ token, secret, salt }) => {
      try {
        if (
          token &&
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(token)
        ) {
          return null;
        }

        return await decode({ token, secret, salt });
      } catch (error) {
        throw error;
      }
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
};
