import { JobPayload } from "@api-overload/types";

import { loadTestQueue } from "@/config/bullmq";

export const enqueueTestJob = async (input: JobPayload) => {
  // TODO: job name is different here, should be consistent

  const job = await loadTestQueue.add("run-api-test", input, {
    attempts: 3,
    removeOnComplete: true,
    removeOnFail: false,
  });

  return job?.id || null;
};
