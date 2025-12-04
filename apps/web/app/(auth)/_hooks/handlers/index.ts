"use client";

import { UserRole } from "@blastapi/db";
import { SignIn, signInSchema, SignUp, signUpSchema } from "@blastapi/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { onSignIn } from "../../_actions";
import { useSignUp } from "../controllers";

export const useSignUpForm = () => {
  const defaultValues = useMemo(
    (): SignUp => ({ email: "", password: "", role: UserRole.user, name: null, image: null }),
    [],
  );

  const signUpForm = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: "onChange",
  });

  const { signUp, isPending } = useSignUp();
  const { handleSubmit, control, reset } = signUpForm;

  const onSubmit = (payload: SignUp) => {
    if (!isPending) {
      signUp(payload);
    }
    setTimeout(() => reset(), 500);
  };

  return {
    signUpForm,
    control,
    onSubmit,
    handleSubmit,
    isPending,
  };
};

export const useSignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = useMemo((): SignIn => ({ email: "", password: "" }), []);

  const signInForm = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues,
    mode: "onChange",
  });

  const { handleSubmit, control, reset } = signInForm;

  const onSubmit = async (payload: SignIn, callbackUrl?: string) => {
    setIsLoading(true);
    await onSignIn({ provider: "credentials", data: payload, callbackUrl });
    setIsLoading(false);
    setTimeout(() => reset(), 500);
  };

  return {
    signInForm,
    control,
    onSubmit,
    handleSubmit,
    isLoading,
  };
};
