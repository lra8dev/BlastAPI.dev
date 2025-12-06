import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { LayoutProps } from "@/types";

const TestLayout = async ({ children }: LayoutProps) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <main className="flex flex-col font-inter w-full bg-white dark:bg-dark">
      <Header
        user={{
          ...session.user,
          id: session.user.id ?? "",
          email: session.user.email ?? "",
          name: session.user.name ?? null,
          image: session.user.image ?? null,
        }}
        className="border-none"
      />
      {children}
    </main>
  );
};

export default TestLayout;
