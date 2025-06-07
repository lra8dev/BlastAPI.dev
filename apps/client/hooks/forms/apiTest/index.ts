"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTest } from "@/hooks/test-api";
import { TestFormValues, useTestFormSchema } from "./schema";

export const useTestForm = () => {
  const form = useForm<TestFormValues>({
    resolver: zodResolver(useTestFormSchema()),
    defaultValues: {
      testRunId: "",
      url: "",
      method: "GET",
      totalRequests: 5,
      concurrency: 1,
      duration: 1,
      requestRate: 1,
      headers: {},
      body: null,
    },
  });

  const { mutate, isPending } = useCreateTest();

  // TODO: Check it later
  const onSubmit = async (payload: TestFormValues) => {
    if (!isPending) {
      mutate({
        testRunId: payload.url,
        testConfig: {
          url: payload.url,
          method: payload.method,
          totalRequests: payload.totalRequests,
          concurrency: payload.concurrency,
          duration: payload.duration,
          requestRate: payload.requestRate,
          headers: payload?.headers,
          body: payload?.body,
        },
      });
    }
  };

  const { handleSubmit } = form;

  return {
    form,
    handleSubmit,
    onSubmit,
  };
};
