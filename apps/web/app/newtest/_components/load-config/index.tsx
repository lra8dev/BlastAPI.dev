import { FieldValues, Path, PathValue } from "react-hook-form";
import { LoadDataConfigChart } from "@/components/charts/load-data-config";
import { FieldGenerator } from "@/components/form/field-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { LOAD_CONFIG } from "../../_constants";
import { useNumericWatch } from "../../_hooks/validators";
import { LoadConfigProps } from "../../_types";
import { setFormValue } from "../../_utils";

export const LoadConfig = <T extends FieldValues>({
  control,
  getValues,
  setValue,
}: LoadConfigProps<T>) => {
  const getNumericValue = (fieldName: string): number => {
    const value = getValues(fieldName as Path<T>);
    return typeof value === "number" ? value : value ? Number(value) : 0;
  };

  const [totalRequests, duration, concurrency, requestRate] = useNumericWatch(control, [
    "totalRequests" as Path<T>,
    "duration" as Path<T>,
    "concurrency" as Path<T>,
    "requestRate" as Path<T>,
  ]);

  return (
    <Card className="w-full gap-4">
      <CardHeader className="justify-start px-0">
        <CardTitle className="text-xs text-muted-foreground uppercase md:text-sm">
          Load Configuration
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-10 font-medium md:flex-row px-2">
        <section className="flex flex-col gap-y-4 w-full md:w-2xl">
          {LOAD_CONFIG.map(item => (
            <div key={item.name} className="flex flex-col gap-y-2">
              <h3 className="text-neutral-500 dark:text-gray-300/75 text-xs md:text-sm">
                {item.label}
              </h3>
              <div className="w-full flex items-center justify-between gap-4">
                <Slider
                  min={1}
                  max={100}
                  step={1}
                  value={[getNumericValue(item.name)]}
                  onValueChange={value =>
                    setFormValue({
                      fieldName: item.name as Path<T>,
                      value: value[0] as PathValue<T, Path<T>>,
                      setValue,
                    })
                  }
                  className="cursor-pointer"
                />
                <FieldGenerator
                  control={control}
                  config={{ ...item, label: "" }}
                  className="max-w-28 max-md:text-xs"
                />
              </div>
            </div>
          ))}
        </section>

        {/* FIXME: Chart getting a constant size in every device */}
        <section className="w-full">
          <LoadDataConfigChart
            totalRequests={totalRequests}
            duration={duration}
            concurrency={concurrency}
            requestRate={requestRate}
          />
        </section>
      </CardContent>
    </Card>
  );
};
