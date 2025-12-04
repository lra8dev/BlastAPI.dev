import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LayoutProps } from "@/types";

const AuthLayout = async ({ children }: LayoutProps) => {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="size-full font-inter bg-white dark:bg-dark py-4 lg:py-0">{children}</main>
  );
};

export default AuthLayout;
