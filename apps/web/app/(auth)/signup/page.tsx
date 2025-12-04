"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BottomGradient } from "@/components/bottom-gradient";
import { FieldGenerator } from "@/components/form/field-generator";
import { Separator } from "@/components/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { OAuthSignin } from "../_components/oauth-signin";
import { SIGNUP_ITEMS } from "../_constants";
import { useSignUpForm } from "../_hooks/handlers";

const SignupPage = () => {
  const { signUpForm, handleSubmit, onSubmit, control, isPending } = useSignUpForm();

  return (
    <Form {...signUpForm}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full min-h-screen flex flex-col gap-2.5 items-center justify-center"
      >
        <Card className="w-full max-w-md p-5 gap-5.5">
          <CardHeader className="p-0">
            <CardTitle className="flex flex-col items-center gap-2">
              <Image
                src="/assets/BlastAPI_logo_single.svg"
                alt="BlastAPI Logo"
                width={30}
                height={30}
              />
              <h1 className="text-2xl font-bold dark:text-neutral-100 text-neutral-900">
                Create your account
              </h1>
            </CardTitle>
            <CardDescription className="text-center text-sm">
              Start testing today with a free account.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 p-0">
            <div className="space-y-4">
              {SIGNUP_ITEMS.map(item => (
                <FieldGenerator key={item.name} control={control} config={item} />
              ))}
            </div>
            <Button
              size="xs"
              type="submit"
              variant="primary"
              title="Click to Sign Up"
              disabled={isPending}
              className="w-full relative group/gradient-btn group/arrow dark:border-neutral-700/45 bg-gradient-to-br from-dark-2 py-2 to-electric-blue shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            >
              {isPending && <Loader2 className="animate-spin" />} Sign Up
              <ArrowRight className="group-hover/arrow:translate-x-1 transition-transform" />
              <BottomGradient />
            </Button>

            <Separator />
            <OAuthSignin isLoading={isPending} />
          </CardContent>
        </Card>
        <footer className="text-sm text-muted-foreground max-sm:text-center">
          Already have an account?{" "}
          <Link href="/signin" className="opacity-75 underline text-blue-500 hover:opacity-100">
            Sign in
          </Link>
        </footer>
      </form>
    </Form>
  );
};

export default SignupPage;
