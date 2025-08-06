"use client";

import { NewTestConfig } from "@blastapi/validators";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fetchApi } from "@/lib/api";

export const useCreateTest = () => {
  const router = useRouter();

  const { mutate: createTest, isPending } = useMutation({
    mutationKey: ["createTest"],
    mutationFn: async (payload: NewTestConfig) => {
      const response = await fetchApi<NewTestConfig>("/api/newtest", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return response;
    },
    onSuccess: data => {
      if (data?.id) {
        toast.success("Test started for execution");
        router.push(`/test/run/${data.id}`);
      }
    },
    onError: error => {
      toast.error(error.message || "Something went wrong");
      console.error(JSON.stringify(error, null, 2));
    },
  });

  return { createTest, isPending };
};
