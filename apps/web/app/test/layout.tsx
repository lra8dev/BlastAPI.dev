import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { LayoutProps } from "@/types";
import { TestHeader } from "./result/[id]/_components/test-header";

const TestLayout = async ({ children }: LayoutProps) => {
  const session = await auth();
  const h = await headers();

  if (!session?.user) {
    const url = `${h.get("x-forwarded-proto") || "http"}://${h.get("host")}${h.get("referer") || "/dashboard"}`;
    redirect(`/signin?callbackUrl=${encodeURIComponent(url)}`);
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
      <TestHeader testRunId={h.get("referer")?.split("/").pop() ?? ""} />
      {children}
    </main>
  );
};

export default TestLayout;
