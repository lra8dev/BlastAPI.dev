import { LayoutProps, TestRunIdParams } from "@/types";
import { TestHeader } from "./_components/test-header";

interface TestResultLayoutProps extends LayoutProps, TestRunIdParams {}

const TestResultLayout = async ({ children, params }: TestResultLayoutProps) => {
  const { id } = await params;

  return (
    <>
      <TestHeader testRunId={id} />
      {children}
    </>
  );
};

export default TestResultLayout;
