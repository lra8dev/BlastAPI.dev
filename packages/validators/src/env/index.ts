import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  SERVER_VERSION: z.string().default("1.0.0"),
  PORT: z.string().transform(Number).pipe(z.number().positive()),
  REDIS_HOST: z.string(),
  REDIS_PASSWORD: z.string(),
  REDIS_PORT: z.string().transform(Number).pipe(z.number().positive()),
  RATE_LIMIT_WINDOW_MS: z.string().transform(Number).default(60000),
  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).default(100),
  MAX_CONCURRENT_TESTS: z.string().transform(Number).default(5),
  MAX_VIRTUAL_USERS: z.string().transform(Number).default(1000),
  MAX_TEST_DURATION: z.string().transform(Number).default(480),
  CLIENT_URL: z.url("Must be a valid URL"),
});

export type EnvConfig = z.infer<typeof envSchema>;

export const validateEnv = (): EnvConfig => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(err => err.path.join(".")).join(", ");
      throw new Error(`Missing or invalid environment variables: ${missingVars}`);
    }
    throw error;
  }
};
