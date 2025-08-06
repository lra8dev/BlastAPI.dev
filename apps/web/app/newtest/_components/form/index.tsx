"use client";

import { CircleChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useNewTestForm } from "../../_hooks/validators";
import { LoadConfig } from "../load-config";
import { Metadata } from "../metadata-config";
import { RequestConfig } from "../request-config";

export const NewTestConfig = () => {
  const { newTestForm, control, handleSubmit, onSubmit, getValues, setValue, isPending } =
    useNewTestForm();

  return (
    <Form {...newTestForm}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-3 md:gap-6 pb-16 px-3 sm:px-4 md:px-8"
      >
        <Metadata control={control} />
        <LoadConfig control={control} setValue={setValue} getValues={getValues} />
        <RequestConfig control={control} setValue={setValue} />
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <Button
            size="xs"
            type="submit"
            variant="primary"
            disabled={isPending}
            className="group font-semibold text-neutral-200 md:text-base px-6 py-2 lg:text-lg bg-electric-blue/90 backdrop-blur-sm shadow-md shadow-electric-blue hover:shadow-none"
          >
            Execute Test
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <CircleChevronRight
                className="transition-transform group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            )}
          </Button>

          <span className="font-medium text-neutral-500 dark:text-neutral-300/70 text-sm md:text-base">
            Or
          </span>
          <Button
            size="lg"
            variant="primary"
            className="font-normal text-xs md:text-sm text-neutral-700 dark:text-gray-200/85 bg-muted border-neutral-200 dark:border-neutral-700/30 hover:bg-gray-200 dark:hover:bg-neutral-800/60 transition-colors shadow-xs backdrop-blur-sm"
          >
            Save Draft
          </Button>
        </div>
      </form>
    </Form>
  );
};
