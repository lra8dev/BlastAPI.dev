"use client";

import { HttpMethod } from "@blastapi/db";
import { NewTestConfig, newTestSchema, TestRegions } from "@blastapi/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { Control, FieldValues, Path, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useCreateTest } from "@/app/newtest/_hooks/controllers";
import { formatDateTime } from "@/utils/format-datetime";

export const useNewTestForm = () => {
  const { createTest, isPending } = useCreateTest();

  const defaultValues = useMemo(
    () => ({
      id: uuid(),
      userId: "",
      name: formatDateTime(Date.now()).replace(/[, ]/g, "_").replace("__", "_"),
      url: "",
      method: HttpMethod.GET,
      region: TestRegions.SaEast1,
      totalRequests: 25,
      concurrency: 10,
      duration: 16,
      requestRate: 6,
      headers: "",
      body: "",
    }),
    [],
  );

  const newTestForm = useForm<NewTestConfig>({
    resolver: zodResolver(newTestSchema),
    defaultValues,
    mode: "onChange",
    shouldFocusError: true,
    shouldUseNativeValidation: false,
  });

  const { handleSubmit, control, getValues, setValue, reset } = newTestForm;

  const onSubmit = (payload: NewTestConfig) => {
    if (!isPending) {
      createTest(payload);
      reset();
    }
  };

  return {
    newTestForm,
    control,
    getValues,
    setValue,
    onSubmit,
    handleSubmit,
    isPending,
  };
};

export const useNumericWatch = <T extends FieldValues>(control: Control<T>, names: Path<T>[]) => {
  const values = useWatch({ control, name: names });
  return values.map(val => (typeof val === "number" ? val : val ? Number(val) : 0));
};
