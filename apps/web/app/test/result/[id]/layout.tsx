import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { LayoutProps, TestRunIdParams } from "@/types";
import { TestResultHeader } from "./_components/result-header";

const TestResultLayout = async ({ children, params }: LayoutProps & TestRunIdParams) => {
  const { id } = await params;
  const session = await auth();

  if (!session?.user) {
    return redirect(`/signin?callbackUrl=${encodeURIComponent(`/test/result/${id}`)}`);
  }

  return (
    <main className="flex flex-col font-inter w-full bg-white dark:bg-dark">
      <Header user={session.user} className="border-none" />
      <TestResultHeader testRunId={id} />
      {children}
    </main>
  );
};

export default TestResultLayout;
