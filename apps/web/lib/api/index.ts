"use server";

const BASE_URL = process.env.API_BASE_URL;

export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T | Error> => {
  if (!BASE_URL) {
    console.warn("Server API is not loaded from environment variables");
    return Error("Server API is not loaded from environment variables");
  }

  const fullUrl = `${BASE_URL}${url}`;

  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers,
    });

    if (response.status === 204) {
      return Error("No content");
    }

    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let responseBody: any;
    try {
      responseBody = isJson ? await response.json() : await response.text();
    } catch (error) {
      console.error(`Error parsing response body for ${fullUrl}:`, error);
      return Error("Failed to parse response body");
    }

    if (!response.ok) {
      const errorDetails =
        typeof responseBody === "object" ? JSON.stringify(responseBody) : String(responseBody);

      const errorMessage = `${response.status} ${response.statusText || "Unknown Error"}${
        responseBody ? ` - ${errorDetails}` : ""
      }`;

      console.error(`API Error for ${fullUrl}:`, errorMessage);
      return Error(response.statusText || "Unknown Error");
    }

    return responseBody as T;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown network error";
    console.error(`Network error for ${fullUrl}:`, error);
    return Error(errorMessage);
  }
};
