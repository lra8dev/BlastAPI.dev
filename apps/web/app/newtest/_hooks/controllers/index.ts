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
      return fetchApi<NewTestResponse>({
        url: "/api/test/newtest",
        options: {
          method: "POST",
          body: JSON.stringify(payload),
        },
      });
    },
    onSuccess: response => {
      if (response.error) {
        toast.error(response.error.message);
        return router.push("/dashboard");
      }

      toast.success(response.message);
      return router.push(`/test/run/${response.data.testRun.id}`);
    },
    onError: error => {
      toast.error(error.message);
      router.push("/dashboard");
    },
  });

  return { createTest, isPending };
};
