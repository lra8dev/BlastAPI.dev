"use client";

import { Fragment } from "react";
import { Toaster } from "sonner";
import { LayoutProps } from "@/types";

export const SonnerProvider = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      {children}
      <Toaster position="bottom-center" richColors />
    </Fragment>
  );
};
