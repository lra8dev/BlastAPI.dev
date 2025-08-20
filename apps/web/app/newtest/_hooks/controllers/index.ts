"use client";

import { NewTestConfig } from "@blastapi/validators";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fetchApi } from "@/lib/api";
import { NewTestResponse } from "../../_types";

export const useCreateTest = () => {
  const router = useRouter();

  const { mutate: createTest, isPending } = useMutation({
    mutationKey: ["createTest"],

    mutationFn: async (payload: NewTestConfig) => {
      return fetchApi<NewTestResponse>("/api/newtest", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: ({ data, error, message }) => {
      if (error) {
        toast.error(message);
        return router.push("/dashboard");
      }

      toast.success(message);
      return router.push(`/test/result/${data.testRunId}`);
    },
    onError: error => {
      toast.error(error.message);
      router.push("/dashboard");
    },
  });

  return { createTest, isPending };
};
