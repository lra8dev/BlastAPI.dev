"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { validate as isValidId } from "uuid";
import { NotFound } from "@/components/not-found";
import { ConnectionStatus } from "./_components/connection-status";
import { Countdown } from "./_components/countdown";
import { DebugInfo } from "./_components/debug-info";
import { TestDetails } from "./_components/test-details";
import { useSocketConnection, useTestOperations } from "./_hooks";

const TestRunPage = () => {
  const [isValidTest, setIsValidTest] = useState<boolean | null>(null);
  const [currentRemainingTime, setCurrentRemainingTime] = useState(0);
  const { id: testRunId } = useParams<{ id: string }>();
  const router = useRouter();
  const hasRedirectedRef = useRef(false);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const { isConnected, connectionState } = useSocketConnection();
  const { payload, testStatus, error, isLoading } = useTestOperations(testRunId);

  const testDuration = payload?.duration || 0;
  const testStartTime = payload?.startedAt?.getTime() ?? 0;

  // Real-time countdown update effect
  useEffect(() => {
    // Clear any existing interval
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }

    if (!testStartTime || testDuration === 0 || testStatus !== "Running") {
      // For queued tests, show full duration
      if (testStatus === "Queued") {
        setCurrentRemainingTime(testDuration);
      }
      return;
    }

    const updateRemainingTime = () => {
      const now = Date.now();
      const elapsed = Math.floor((now - testStartTime) / 1000);
      const remaining = Math.max(0, testDuration - elapsed);
      setCurrentRemainingTime(remaining);
    };

    // Update immediately
    updateRemainingTime();

    countdownIntervalRef.current = setInterval(updateRemainingTime, 1000);

    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
    };
  }, [testStartTime, testDuration, testStatus]);

  // Redirect to results page when test is completed
  useEffect(() => {
    const isCompleted =
      testStatus === "Succeeded" ||
      testStatus === "Failed" ||
      testStatus === "Canceled" ||
      testStatus === "Timeout";

    if (isCompleted && testRunId && !hasRedirectedRef.current) {
      hasRedirectedRef.current = true;
      router.push(`/test/result/${testRunId}`);
    }
  }, [testStatus, testRunId, router]);

  // Reset redirect flag when testRunId changes
  useEffect(() => {
    hasRedirectedRef.current = false;
  }, [testRunId]);

  useEffect(() => {
    if (isValidId(testRunId.trim())) {
      setIsValidTest(true);
    } else {
      setIsValidTest(false);
    }
  }, [testRunId]);

  // Show loading while checking validity
  if (isValidTest === null || isLoading) {
    return (
      <section className="flex flex-col w-full h-full items-center justify-center gap-8 p-4 md:pt-8">
        <div className="animate-pulse text-xl font-bold text-blue-500">Loading test...</div>
      </section>
    );
  }

  if (!isValidTest) {
    return (
      <NotFound
        title="Test Not Found"
        description="The test you are looking for does not exist. Please check the URL, or head"
      />
    );
  }

  if (!payload) {
    return (
      <NotFound
        title="Something went wrong"
        statusCode={500}
        description="We couldn't load the test details. Please make sure test configurations are correct and try refreshing the page. Or head"
      />
    );
  }

  // Use calculated remaining time if test is running, otherwise show full duration
  const countdownDuration =
    (testStatus === "Running" || testStatus === "Queued") && testDuration > 0
      ? currentRemainingTime
      : testDuration;

  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-8 p-4 md:pt-8">
      <ConnectionStatus isConnected={isConnected} connectionState={connectionState} />

      {error && (
        <div className="w-full max-w-2xl p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="text-red-800 dark:text-red-200 text-sm">
            <strong>Test Error:</strong> {error}
          </div>
        </div>
      )}

      {testStatus && (
        <div className="w-full max-w-2xl p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="text-blue-800 dark:text-blue-200 text-sm text-center">
            <strong>Status:</strong> {testStatus}
            {testStatus === "Succeeded" && " - Redirecting to results..."}
            {(testStatus === "Failed" || testStatus === "Canceled" || testStatus === "Timeout") &&
              " - Check error details above"}
          </div>
        </div>
      )}

      <Countdown totalDuration={countdownDuration} isRunning={testStatus === "Running"} />

      <TestDetails
        name={payload?.name}
        duration={testDuration}
        vusers={payload?.vusers}
        rampUp={payload?.rampUp}
        rampUpSteps={payload?.rampUpSteps}
        region={payload?.region}
      />

      <DebugInfo testRun={payload} isConnected={isConnected} />
    </section>
  );
};

export default TestRunPage;
