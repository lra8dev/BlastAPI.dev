// "use client";

// import { useMemo } from "react";
// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { REQUEST_METHODS } from "@/constants";
// import { cn } from "@/lib/utils";

// const renderField = ({ items, control, className }: RenderFieldProps) => {
//   const { type, name, placeholder, label } = items;

//   switch (type) {
//     case "textarea":
//       return (
//         <FormField
//           name={name}
//           control={control}
//           render={({ field }) => (
//             <FormItem>
//               {label && <FormLabel htmlFor={`input-${name}`}>{label}</FormLabel>}
//               <FormControl>
//                 <Textarea
//                   rows={4}
//                   placeholder={placeholder}
//                   className={cn(
//                     "rounded-md border-neutral-700 bg-neutral-800 p-2 text-gray-200 hover:brightness-125 focus:outline-none focus-visible:ring-0",
//                     { className },
//                   )}
//                   {...field}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//       );
//     case "select":
//       return (
//         <FormField
//           name={name}
//           control={control}
//           render={({ field }) => (
//             <FormItem>
//               {label && <FormLabel htmlFor={`input-${name}`}>{label}</FormLabel>}
//               <FormControl>
//                 <Select onValueChange={value => field.onChange(value)}>
//                   <SelectTrigger
//                     className={cn(
//                       "border-neutral-700 bg-neutral-800 text-gray-200 hover:brightness-115 appearance-none focus:outline-none focus-visible:ring-0",
//                       { className },
//                     )}
//                   >
//                     <SelectValue placeholder={placeholder} />
//                   </SelectTrigger>
//                   <SelectContent className="border-neutral-700/45 bg-neutral-800 text-gray-200 focus:outline-none focus-visible:ring-0">
//                     {REQUEST_METHODS.map(item => (
//                       <SelectItem key={item.id} value={item.method}>
//                         {item.method}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </FormControl>
//             </FormItem>
//           )}
//         />
//       );
//     default:
//       return (
//         <FormField
//           name={name}
//           control={control}
//           render={({ field }) => (
//             <FormItem className="flex flex-col gap-4 relative">
//               {label && <FormLabel htmlFor={`input-${name}`}>{label}</FormLabel>}
//               <FormControl>
//                 <Input
//                   type={type}
//                   placeholder={placeholder}
//                   className={cn(
//                     "text-sm placeholder:text-sm border-neutral-700 rounded-md bg-neutral-800 text-gray-300 hover:brightness-125 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-none focus:outline-none focus-visible:ring-1 focus-visible:ring-electric-blue",
//                     { className },
//                   )}
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage className="absolute z-30 -bottom-5 text-red-600 text-xs font-medium" />
//             </FormItem>
//           )}
//         />
//       );
//   }
// };

// export const GenerateForm = ({ items, formProps, className }: GenerateFormProps) => {
//   return useMemo(
//     () => renderField({ items, control: formProps.control, className }),
//     [items, formProps.control, className],
//   );
// };
"use client";

import { useMemo } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const RenderField = ({ items, control, className }: RenderFieldProps) => {
  const { name, label, placeholder, type, options } = items;

  switch (type) {
    case "textarea":
      return (
        <FormField
          name={name}
          control={control}
          render={({ field }) => (
            <FormItem>
              {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder={placeholder}
                  className={cn(
                    "rounded-md border-neutral-700 bg-neutral-800 p-2 text-gray-200 hover:brightness-125 focus:outline-none focus-visible:ring-0",
                    className,
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "select":
      return (
        <FormField
          name={name}
          control={control}
          render={({ field }) => (
            <FormItem>
              {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger
                    className={cn(
                      "border-neutral-700 bg-neutral-800 text-gray-200 hover:brightness-115 appearance-none focus:outline-none focus-visible:ring-0",
                      className,
                    )}
                  >
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent className="border-neutral-700/45 bg-neutral-800 text-gray-200 focus:outline-none focus-visible:ring-0">
                    {options?.map(opt => (
                      <SelectItem key={opt.method} value={opt.method}>
                        {opt.method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    default:
      return (
        <FormField
          name={name}
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 w-full relative">
              {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
              <FormControl>
                <Input
                  type={type}
                  placeholder={placeholder}
                  className={cn(
                    "text-sm placeholder:text-sm border-neutral-700 rounded-md bg-neutral-800 text-gray-300 hover:brightness-125 outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-none focus:outline-none focus-visible:ring-1 focus-visible:ring-electric-blue",
                    className,
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute z-30 -bottom-5 text-red-600 text-xs font-medium" />
            </FormItem>
          )}
        />
      );
  }
};

export const GenerateForm = ({ items, formProps, className }: GenerateFormProps) => {
  return useMemo(
    () => <RenderField items={items} control={formProps.control} className={className} />,
    [items, formProps.control, className],
  );
};
