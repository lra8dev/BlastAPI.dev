import { JobPayload } from "@api-overload/types";

export const onCreateTest = async (payload: JobPayload) => {
  const response = await fetch("/api/create-test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};
