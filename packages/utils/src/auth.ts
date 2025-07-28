import { User } from "@blastapi/db";
import { compare, hash } from "bcryptjs";

export const hashPassword = (password: string, salt: number) => hash(password, salt);
export const validatePassword = (plain: string, hashed: string) => compare(plain, hashed);
export const safeUser = (user: User): User => {
  const safeUserData = { ...user };
  safeUserData.password = null;
  return safeUserData;
};
