import { loadTestQueue } from "@/config/bullmq";
import { EnqueueTestJobInput } from "@/types";

export const enqueueTestJob = async (input: EnqueueTestJobInput) => {
  // TODO: job name is different here, should be consistent

  const job = await loadTestQueue.add("run-api-test", input, {
    attempts: 3,
    removeOnComplete: true,
    removeOnFail: false,
  });

  return job?.id || null;
};
