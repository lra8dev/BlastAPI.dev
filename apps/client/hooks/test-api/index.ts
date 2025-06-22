"use client";

import { JobPayload } from "@api-overload/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { onCreateTest } from "@/utils/testApi";

export const useCreateTest = () => {
  const router = useRouter();

  // WIP: This is a temporary solution to handle the test creation
  const { mutate, isPending, data } = useMutation({
    mutationFn: (payload: JobPayload) => onCreateTest(payload),
    onSuccess: jobId => {
      console.log(`✅ Test started: ${jobId}`);

      if (jobId) {
        // WIP: Redirect to result page
        router.push(`/test-completion?jobId=${jobId as string}`);
      }
    },
    onError: error => {
      toast.error(error.message || "Something went wrong");
      console.error(JSON.stringify(error, null, 2));
    },
  });

  return { mutate, data, isPending };
};
