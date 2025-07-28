import { Prisma } from "@blastapi/db";
import { ZodError } from "@blastapi/validators";

export const errorMessage = (err: unknown): string => {
  if (err instanceof Prisma.PrismaClientValidationError) {
    return err.message;
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return err.message;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return err.message;
  } else if (err instanceof ZodError) {
    return err.message;
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return "Something went wrong";
  }
};
