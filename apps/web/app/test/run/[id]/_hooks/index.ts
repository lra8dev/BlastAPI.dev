"use client";

import { TestStatus } from "@blastapi/db/types";
import { useCallback, useEffect, useState } from "react";
import { fetchApi } from "@/lib/api";
import { getSocketClient } from "@/lib/socket/client";
import { ConnectionState, SocketEvents, TestCreationData } from "@/types";
import { ControlAcks } from "../_types";

const socket = getSocketClient();

export const useSocketConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionState, setConnectionState] = useState<ConnectionState>("disconnected");

  useEffect(() => {
    const connectSocket = async () => {
      if (!socket.isConnected) {
        setConnectionState("connecting");
        await socket.connect({
          autoConnect: true,
          reconnection: true,
          reconnectionDelay: 1000,
          timeout: 20000,
        });
      }
    };

    const handleConnect = () => {
      setIsConnected(true);
      setConnectionState("connected");
    };

    const handleDisconnect = () => {
      setIsConnected(false);
      setConnectionState("disconnected");
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    connectSocket();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
    };
  }, []);

  return {
    isConnected,
    connectionState,
  };
};

export const useTestOperations = (testRunId: string | null) => {
  const [payload, setPayload] = useState<TestCreationData["testRun"] | null>(null);
  const [testStatus, setTestStatus] = useState<TestStatus>("Queued");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // FIX: Fetch initial test data from API on mount
  useEffect(() => {
    if (!testRunId) return;

    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchApi<{
          id: string;
          status: TestStatus;
          startedAt: string | null;
          createdAt: string;
          testConfig: {
            name: string;
            region: string;
            duration: number;
            vusers?: number;
            rampUp?: number;
            rampUpSteps?: number;
          };
        }>({
          url: `/api/test/${testRunId}`,
        });

        // fetchApi already extracts .data, so response.data IS the test data
        if (response.data && !response.error) {
          const testData = response.data;

          setPayload({
            id: testData.id,
            name: testData.testConfig.name,
            status: testData.status,
            duration: testData.testConfig.duration,
            region: testData.testConfig.region as TestCreationData["testRun"]["region"],
            vusers: testData.testConfig.vusers ?? 0,
            rampUp: testData.testConfig.rampUp ?? 0,
            rampUpSteps: testData.testConfig.rampUpSteps ?? 0,
            createdAt: testData.createdAt ? new Date(testData.createdAt) : new Date(),
            startedAt: testData.startedAt ? new Date(testData.startedAt) : null,
          });
          setTestStatus(testData.status);
        } else if (response.error) {
          setError(response.error.message);
        } else {
          setError("No test data received");
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch initial test data:", err);
        setError("Failed to load test details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, [testRunId]);

  // Set up socket listeners
  useEffect(() => {
    if (!testRunId) return;

    const handleTestCreated = (data: TestCreationData) => {
      if (data.testRun.id === testRunId) {
        setPayload(data.testRun);
        setTestStatus(data.testRun.status);
        setError(null);
      }
    };

    const handleTestStatus = (data: Parameters<SocketEvents["test:status"]>[0]) => {
      if (data.testRunId === testRunId) {
        setTestStatus(data.status);

        if (data.error?.trim()) {
          setError(data.error);
        }

        // Update payload with new status and timestamps
        setPayload(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            status: data.status,
            startedAt: data.startedAt ? new Date(data.startedAt) : prev.startedAt,
          };
        });
      }
    };

    const handleError = (errorData: Parameters<SocketEvents["error"]>[0]) => {
      if (errorData.testRunId === testRunId) {
        setError(errorData.message);
      }
    };

    socket.on("test:created", handleTestCreated);
    socket.on("test:status", handleTestStatus);
    socket.on("error", handleError);

    return () => {
      socket.off("test:created", handleTestCreated);
      socket.off("test:status", handleTestStatus);
      socket.off("error", handleError);
    };
  }, [testRunId]);

  return { payload, testStatus, error, isLoading };
};

export const useTestControl = (testRunId: string | null) => {
  const [controlAcks, setControlAcks] = useState<ControlAcks[]>([]);

  useEffect(() => {
    if (!testRunId) return;

    const handleControlAck = (data: Parameters<SocketEvents["test:control:ack"]>[0]) => {
      if (data.testRunId === testRunId) {
        setControlAcks(prev => [
          ...prev,
          { action: data.action, message: data.message, timestamp: data.timestamp },
        ]);
      }
    };

    socket.on("test:control:ack", handleControlAck);

    return () => socket.off("test:control:ack", handleControlAck);
  }, [testRunId]);

  const start = useCallback(() => {
    if (testRunId && socket.isConnected) {
      socket.startTest(testRunId);
    }
  }, [testRunId]);

  const stop = useCallback(() => {
    if (testRunId && socket.isConnected) {
      socket.stopTest(testRunId);
    }
  }, [testRunId]);

  const clearAcks = useCallback(() => setControlAcks([]), []);

  return { start, stop, controlAcks, clearAcks };
};

// FIX: Backend API returns different data than socket event expects
// export const useFallbackPayload = (testRunId: string | null, shallFetch: boolean) => {
//   const [fallbackPayload, setFallbackPayload] = useState<TestCreationData["testRun"] | null>(null);

//   useEffect(() => {
//     if (!testRunId || !shallFetch) return;

//     const fetchTestData = async () => {
//       try {
//         const { data } = await fetchApi<TestCreationData>({
//           url: `/api/test/${testRunId}`,
//           isAuth: true,
//         });

//         if (data) {
//           setFallbackPayload(data.testRun);
//         }
//       } catch {
//         // Ignore errors
//       }
//     };
//     fetchTestData();
//   }, [testRunId, shallFetch]);

//   return { fallbackPayload };
// };
