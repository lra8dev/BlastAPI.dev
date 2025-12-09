"use server";

import { auth } from "@/auth";
import { ApiReturn, FetchApi } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL!;

export const fetchApi = async <T>({
  url,
  isAuth = true,
  options,
  attempt = 0,
  retry = 2,
}: FetchApi): ApiReturn<T> => {
  const session = isAuth ? await auth() : null;

  if (isAuth && !session?.user) {
    return {
      data: null,
      error: Error("User is not authenticated"),
    };
  }

  if (!BASE_URL) {
    return {
      data: null,
      error: Error("Server API is not loaded from environment variables"),
    };
  }

  const fullUrl = `${BASE_URL}${url}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user.id || ""}`,
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
      };
    }

    if (!response.ok) {
      if (response.status >= 500 && attempt < retry) {
        const delay = 500 * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));

        return fetchApi<T>({
          url,
          isAuth,
          options,
          attempt: attempt++,
          retry,
        });
      }

      return {
        data: null,
        error: Error(response.statusText || "Internal Server Error"),
      };
    }

    return {
      data: (responseBody?.data || responseBody) as T,
      error: null,
      message: responseBody?.message || "Request successful",
    };
  } catch (networkError) {
    if (attempt < retry) {
      const delay = 500 * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));

      return fetchApi<T>({
        url,
        isAuth,
        options,
        attempt: attempt++,
        retry,
      });
    }

    const errorMessage =
      networkError instanceof Error
        ? networkError.message
        : "Network Error. Can't reach to Server.";

    return {
      data: null,
      error: Error(errorMessage),
    };
  }
};
