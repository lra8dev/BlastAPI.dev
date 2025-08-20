import { FieldValues, Path } from "react-hook-form";
import { HTTP_METHODS, REQUEST_CONFIG_ITEMS, REQUEST_CONFIG_TABS } from "@/app/newtest/_constants";
import { FieldGenerator } from "@/components/form/field-generator";
import { CustSelect } from "@/components/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { RequestConfigProps } from "../../_types";

export const RequestConfig = <T extends FieldValues>({
  control,
  setValue,
}: RequestConfigProps<T>) => {
  return (
    <Card className="w-full gap-4">
      <CardHeader className="justify-start px-0">
        <CardTitle className="text-xs text-muted-foreground uppercase md:text-sm">
          Request Configuration
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 font-medium px-2">
        <div className="w-full flex items-center">
          <FormField
            name={"method" as Path<T>}
            control={control}
            render={({ field }) => (
              <FormItem>
                <CustSelect
                  options={HTTP_METHODS}
                  value={field.value}
                  onChange={field.onChange}
                  triggerClassName="md:min-w-28 border-r-0 rounded-r-none shadow-none py-5 border-neutral-300 dark:border-neutral-700"
                />
              </FormItem>
            )}
          />

          <div className="h-6.5">
            <Separator orientation="vertical" className="opacity-50 dark:bg-gray-300/20" />
          </div>

          {REQUEST_CONFIG_ITEMS.map(item => (
            <FieldGenerator
              key={item.name}
              control={control}
              config={item}
              className="border-l-0 rounded-l-none shadow-none py-5 border-neutral-300 dark:border-neutral-700"
              formItemClassName="w-full h-auto -ml-[2.6px]"
            />
          ))}
        </div>

        <Tabs defaultValue={REQUEST_CONFIG_TABS[0].name ?? ""}>
          <TabsList>
            {REQUEST_CONFIG_TABS.map(tab => (
              <TabsTrigger
                key={tab.name}
                value={tab.name}
                className={cn(
                  "hover:text-neutral-600 dark:hover:text-gray-300/80",
                  "data-[state=active]:text-neutral-700 dark:data-[state=active]:text-gray-300 data-[state=active]:border-b-fiery-orange",
                )}
                aria-label={`Tab: ${tab.name}`}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {REQUEST_CONFIG_TABS.map(tab => (
            <TabsContent key={tab.name} value={tab.name}>
              <tab.children setValue={setValue} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
