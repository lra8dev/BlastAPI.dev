import { User as DatabaseUser } from "@blastapi/db/types";
import { Session as DefaultSession } from "next-auth";

declare module "next-auth" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends Omit<DatabaseUser, "password"> {}

  interface Session extends DefaultSession {
    user: User;
  }
}
