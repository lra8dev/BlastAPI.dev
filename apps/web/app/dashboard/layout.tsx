import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { LayoutProps } from "@/types";

const DashboardLayout = async ({ children }: LayoutProps) => {
  const session = await auth();

  if (!session?.user?.id) {
    return redirect(`/signin?callbackUrl=${encodeURIComponent("/dashboard")}`);
  }

  return (
    <main className="size-full font-inter bg-white dark:bg-dark">
      <Header user={session.user} className="border-none" />
      {children}
    </main>
  );
};

export default DashboardLayout;
