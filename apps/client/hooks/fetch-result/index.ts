"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { toast } from "sonner";
import { onGetTestResult } from "@/utils/api/fetch-result";

export const useTestResult = (testRunId: string) => {
  const queryKey = useMemo(() => ["fetch-test-result", testRunId], [testRunId]);
  const queryFn = useCallback(() => onGetTestResult(testRunId), [testRunId]);

  const { error } = useQuery({
    queryKey,
    queryFn,
    enabled: !!testRunId,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
  });

  if (error) {
    toast.error(error.message);
  }

  // if(data.)
};
