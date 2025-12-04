import { compare, hash } from "bcryptjs";

export const hashPassword = (password: string, salt: number) => hash(password, salt);
export const validatePassword = (plain: string, hashed: string) => compare(plain, hashed);
