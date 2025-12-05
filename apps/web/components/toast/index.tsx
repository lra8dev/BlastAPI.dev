"use client";

import { toast } from "sonner";

interface ToastProps {
  title: string;
  message?: string;
}

export const SuccessToast = ({ title, message }: ToastProps) => {
  return toast.success(title, {
    description: message,
  });
};

export const ErrorToast = ({ title, message }: ToastProps) => {
  return toast.error(title, {
    description: message,
  });
};
