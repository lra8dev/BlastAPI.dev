"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ErrorContent = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return <div>Authentication Error: {error}</div>;
};

const AuthError = () => {
  return (
    <Suspense>
      <ErrorContent />
    </Suspense>
  );
};

export default AuthError;
