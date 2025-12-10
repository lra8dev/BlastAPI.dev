import { FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { FieldGeneratorProps } from "@/types";
import { CustInput } from "../input";

export const FieldGenerator = <T extends FieldValues>({
  control,
  config,
  className,
  labelClassName,
  formItemClassName,
}: FieldGeneratorProps<T>) => {
  const { name, label, type, ...rest } = config;

  return (
    <FormField
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem className={cn("gap-y-1.5", formItemClassName)}>
          {label && (
            <FormLabel
              htmlFor={name}
              className={cn("text-sm dark:text-neutral-300/70 text-neutral-700", labelClassName)}
            >
              {label}
            </FormLabel>
          )}
          <FormControl>
            <CustInput
              {...field}
              {...rest}
              type={type}
              className={className as string}
              value={field.value ?? ""}
              onChange={e => {
                const value = e.target.value;
                if (type === "number") {
                  field.onChange(Number(value));
                } else {
                  field.onChange(value);
                }
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
