"use client";

import { User } from "@blastapi/db";
import { SignUp } from "@blastapi/validators";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fetchApi } from "@/lib/api";
import { onSignIn } from "../../_actions";

export const useSignUp = () => {
  const router = useRouter();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: (payload: SignUp) => {
      return fetchApi<User>({
        url: "/api/auth/register",
        isAuth: false,
        options: {
          method: "POST",
          body: JSON.stringify(payload),
        },
      });
    },

    onSuccess: async ({ error }, variables) => {
      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Account created successfully!");

      try {
        await onSignIn({
          provider: "credentials",
          data: { email: variables.email, password: variables.password },
          callbackUrl: "/dashboard",
        });
      } catch {
        toast.info("Please sign in to continue.");
        router.push("/signin");
      }
    },
    onError: err => {
      toast.error(err.message);
      router.refresh();
    },
  });

  return {
    signUp,
    isPending,
  };
};
