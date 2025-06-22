"use client";

import { useMemo } from "react";
import { CreateTestForm } from "./createTest";
// WIP:  import { AuthForm } from "./auth-form";

export const FormContainer = ({ type }: FormProps) => {
  const formComponent = useMemo(() => {
    switch (type) {
      case "TEST_CONFIG":
        return <CreateTestForm />;
      // case "AUTH_CONFIG":
      //   return <AuthForm />;
      default:
        return null;
    }
  }, [type]);

  return <div className="w-full font-inter">{formComponent}</div>;
};
