import { Prisma } from "@blastapi/db";
import { ZodError } from "@blastapi/validators";

export const errorMessage = (err: unknown): string | undefined => {
  if (err instanceof Prisma.PrismaClientValidationError) {
    return err.message;
  }

  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return err.message;
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return err.message;
  }

  if (err instanceof ZodError) {
    return err.message;
  }

  if (err instanceof Error) {
    return err.message;
  }

  return undefined;
};
