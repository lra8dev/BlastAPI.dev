export type JsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonValue }
  | JsonValue[]
  | object;

/**
 * Safely parse a JsonValue into a specific type.
 * @param data The JsonValue from Prisma or elsewhere.
 * @param fallback The default value to return if parsing fails.
 */
export const parseJson = <T>(data: JsonValue, fallback: T): T => {
  if (data !== null && typeof data === "object" && !Array.isArray(data)) {
    return data as T;
  }

  return fallback;
};
