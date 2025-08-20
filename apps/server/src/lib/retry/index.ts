import { logger } from "@/lib/logger";
import { errorMessage } from "../../utils/error-message";

export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 500,
  backoffMultiplier: number = 2,
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      lastError = error;

      if (attempt === retries) {
        logger.error({ err: errorMessage(error) }, "Final retry attempt failed");
        throw error;
      }

      const waitTime = delay * Math.pow(backoffMultiplier, attempt);
      logger.warn(
        {
          attempt: attempt + 1,
          totalAttempts: retries + 1,
          waitTime,
          error: errorMessage(error),
        },
        "Retry attempt failed, waiting",
      );

      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError;
}
