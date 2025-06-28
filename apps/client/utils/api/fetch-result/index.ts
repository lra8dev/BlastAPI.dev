export const onGetTestResult = async (testRunId: string) => {
  const result = await fetch(`/test-result/${testRunId}`);

  if (!result.ok) {
    throw new Error(`Error: ${result.statusText}`);
  }
  const data = await result.json();
  return data;
};
