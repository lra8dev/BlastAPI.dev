import { NewTestConfig } from "@blastapi/validators";
import { testQueue } from "@/config/bullmq";

export const enqueueTestJob = async (input: NewTestConfig) => {
  const JOB_NAME = input.name || input.id;

  try {
    const job = await testQueue.add(JOB_NAME, input, {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 2000,
      },
      removeOnComplete: 5,
      removeOnFail: 10,
      delay: 0,
      // WIP: Allow priority-based job processing
    });

    return job?.id || null;
  } catch (error) {
    console.error("❌ Failed to enqueue test job:", error);
    throw new Error(`Failed to enqueue job: ${error}`);
  }
};
