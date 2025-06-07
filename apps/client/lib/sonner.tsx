"use client";

import { Toaster } from "sonner";
import { ReactNode } from "react";

export const SonnerProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Toaster position="top-center" richColors closeButton />
    </>
  );
};
