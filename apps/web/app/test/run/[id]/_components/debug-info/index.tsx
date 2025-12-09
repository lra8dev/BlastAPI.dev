import { DebugInfoProps } from "../../_types";

export const DebugInfo = ({ testRun, isConnected }: DebugInfoProps) => {
  return (
    process.env.NODE_ENV === "development" && (
      <div className="w-full max-w-4xl p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs">
        <details>
          <summary className="cursor-pointer font-semibold">Debug Info</summary>
          <div className="mt-2 space-y-2">
            <div>
              <strong>Test ID:</strong> {testRun.id}
            </div>
            <div>
              <strong>Socket Connected:</strong> {isConnected ? "Yes" : "No"}
            </div>
            <div>
              <strong>Status:</strong> {testRun.status || "Unknown"}
            </div>
            {testRun && (
              <div>
                <strong>Test Data:</strong> <pre>{JSON.stringify(testRun, null, 2)}</pre>
              </div>
            )}
          </div>
        </details>
      </div>
    )
  );
};
