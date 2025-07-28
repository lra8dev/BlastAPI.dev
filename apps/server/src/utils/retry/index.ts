async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 500,
  backoffMultiplier = 2,
): Promise<T> {
  let lastError: any;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;

      if (attempt === retries) {
        console.error(`❌ Final retry attempt failed:`, error.message);
        throw error;
      }

      const waitTime = delay * Math.pow(backoffMultiplier, attempt);
      console.warn(
        `⚠️ Retry attempt ${attempt + 1}/${retries + 1} failed, waiting ${waitTime}ms:`,
        error.message,
      );

      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError;
}

export { retry };
