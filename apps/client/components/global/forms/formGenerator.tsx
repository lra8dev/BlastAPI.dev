"use client";

import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMemo } from "react";

const renderField = (items: FieldItems, register: RegisterFn) => {
  const { id, name, type, placeholder } = items;

  switch (type) {
    case "textarea":
      return (
        <Textarea
          id={id}
          placeholder={placeholder}
          rows={4}
          className="rounded-md border-neutral-700 bg-neutral-800 p-2 text-gray-200 hover:brightness-125 focus:outline-none focus-visible:ring-0"
          {...register(name)}
        />
      );
    case "select":
      return (
        <Select onValueChange={(value) => register(name).onChange({ target: { name, value } })}>
          <SelectTrigger className="border-neutral-700 bg-neutral-800 text-gray-200 hover:brightness-125 focus:outline-none focus-visible:ring-0">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="border-neutral-700 bg-neutral-800 text-gray-200 hover:brightness-125 focus:outline-none focus-visible:ring-0">
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="DELETE">DELETE</SelectItem>
          </SelectContent>
        </Select>
      );
    default:
      return (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="border-neutral-700 bg-neutral-800 text-gray-200 hover:brightness-125 focus:outline-none focus-visible:ring-0"
          {...register(name)}
        />
      );
  }
};

export const GenerateForm = ({ items, form }: GenerateFormProps) => {
  const { label, name } = items;
  const { register, errors } = form;

  const renderedField = useMemo(() => renderField(items, register), [items, register]);

  return (
    <Label
      className="flex flex-col gap-2 text-sm font-medium text-white"
      htmlFor={`input-${label}`}
    >
      {label && label}
      {renderedField}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="relative left-1 text-[.65rem] text-red-400">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </Label>
  );
};
