"use client";

import { API_FORM_ITEMS } from "@/constants";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTestForm } from "@/hooks/forms/apiTest";
import { GenerateForm } from "./formGenerator";

export const CreateTestForm = () => {
  const { form, handleSubmit, onSubmit } = useTestForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        {API_FORM_ITEMS.map((item) => (
          <GenerateForm key={item.id} items={item} form={form} />
        ))}
        <Button type="submit" variant="secondary" className="font-medium">
          Start Load Test
        </Button>
      </form>
    </Form>
  );
};
