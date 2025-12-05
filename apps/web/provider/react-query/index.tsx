"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { LayoutProps } from "@/types";

export const QueryProvider = ({ children }: LayoutProps) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 10 * 60 * 1000, // 10 minutes
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: (failureCount, error) => {
              if (error?.message?.includes("NEXT_REDIRECT")) return false;
              if (failureCount < 3) return true;
              return false;
            },
            retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
          },
          mutations: {
            retry: 1,
            onError: err => {
              if (err.message === "NEXT_REDIRECT") return;
              toast.error(err.message || "An error occurred");
            },
            networkMode: "offlineFirst",
          },
        },
      }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
