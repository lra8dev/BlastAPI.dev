"use client";

import { useMemo } from "react";
import { CreateTestForm } from "./createTest";
// WIP:  import { AuthForm } from "./auth-form";

export const FormContainer = ({ type, className }: FormProps) => {
  const formComponent = useMemo(() => {
    switch (type) {
      case "TEST_API":
        return <CreateTestForm />;
      // case "AUTH":
      //   return <AuthForm />;
      default:
        return null;
    }
  }, [type]);

  return <div className={className}>{formComponent}</div>;
};
