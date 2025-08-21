"use server";

import { ApiReturn } from "@/types";

const BASE_URL = process.env.API_BASE_URL;

export const fetchApi = async <T>(url: string, options?: RequestInit): ApiReturn<T> => {
  if (!BASE_URL) {
    return {
      data: null,
      error: Error("Server API is not loaded from environment variables"),
      message: "Server API not loaded",
    };
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
      return {
        data: null as T,
        error: null,
        message: "No content to return",
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let responseBody: any;
    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    try {
      responseBody = isJson ? await response.json() : await response.text();
    } catch (parseError) {
      const errorMessage =
        parseError instanceof Error ? parseError.message : "Failed to parse response body";
      return {
        data: null,
        error: Error(errorMessage),
        message: "Response body parse error",
      };
    }

    if (!response.ok) {
      return {
        data: null,
        error: Error(response.statusText || "Internal Server Error"),
        message: responseBody.message as string,
      };
    }

    return {
      data: (responseBody?.data ?? responseBody) as T,
      error: null,
      message: responseBody.message,
    };
  } catch (networkError) {
    const errorMessage =
      networkError instanceof Error ? networkError.message : "Unknown network error";

    return {
      data: null,
      error: Error(errorMessage),
      message: "Network Error. Can't reach to Server.",
    };
  }
};
