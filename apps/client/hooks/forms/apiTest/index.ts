"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { getFormattedDateTime } from "@/utils/formatted-date-time";
import { testFormSchema, TestFormValues } from "./schema";

export const useTestForm = () => {
  const form = useForm<TestFormValues>({
    resolver: zodResolver(testFormSchema),
    defaultValues: {
      testRunId: v4(), // WIP: Get user-id as test-run-id
      name: getFormattedDateTime(),
      url: "",
      method: "GET",
      totalRequests: 25,
      concurrency: 10,
      duration: 16,
      requestRate: 6,
      headers: "",
      body: "",
    },
  });

  // const { mutate, isPending } = useCreateTest();

  const onSubmit = async (payload: TestFormValues) => {
    console.log("✅ Submitting payload:", payload);
    // WIP: mutate the funciton
    // if (!isPending) {
    //   mutate({
    //     testRunId: payload.url,
    //     testConfig: {
    //        name: payload.name,
    //       url: payload.url,
    //       method: payload.method,
    //       totalRequests: payload.totalRequests,
    //       concurrency: payload.concurrency,
    //       duration: payload.duration,
    //       requestRate: payload.requestRate,
    //       headers: payload?.headers,
    //       body: payload?.body,
    //     },
    //   });
    // }
  };

  const { handleSubmit, control, getValues, setValue } = form;

  return {
    form,
    getValues,
    setValue,
    control,
    // WIP: pass isPending,
    handleSubmit,
    onSubmit,
    errors: form.formState.errors,
  };
};
