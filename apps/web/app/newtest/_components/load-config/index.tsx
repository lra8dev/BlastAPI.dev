import { FieldValues, Path, PathValue } from "react-hook-form";
import { FieldGenerator } from "@/components/form/field-generator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { LOAD_CONFIG } from "../../_constants";
import { useNumericWatch } from "../../_hooks/validators";
import { LoadConfigProps } from "../../_types";
import { setFormValue } from "../../_utils";
import { LoadConfigAreaChart } from "../load-config-area-chart";

export const LoadConfig = <T extends FieldValues>({
  control,
  getValues,
  setValue,
}: LoadConfigProps<T>) => {
  const getNumericValue = (fieldName: string): number => {
    const value = getValues(fieldName as Path<T>);
    return typeof value === "number" ? value : value ? Number(value) : 0;
  };

  const [vusers, duration, rampUp, rampUpSteps] = useNumericWatch(control, [
    "vusers" as Path<T>,
    "duration" as Path<T>,
    "rampUp" as Path<T>,
    "rampUpSteps" as Path<T>,
  ]);

  return (
    <Card className="w-full gap-4">
      <CardHeader className="justify-start px-0">
        <CardTitle className="text-xs text-muted-foreground uppercase md:text-sm">
          Load Configuration
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-10 font-medium min-[55rem]:flex-row px-2">
        <section className="flex flex-col gap-y-4 w-full md:w-2xl">
          {LOAD_CONFIG.map(item => (
            <div key={item.name} className="flex flex-col gap-y-2">
              <h3 className="text-neutral-500 dark:text-gray-300/75 text-xs md:text-sm">
                {item.label}
              </h3>
              <div className="w-full flex items-center justify-between gap-4">
                <Slider
                  min={1}
                  max={item.max}
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
                  config={{
                    name: item.name,
                    type: item.type,
                    placeholder: item.placeholder,
                  }}
                  className="max-w-28 max-md:text-xs"
                />
              </div>
            </div>
          ))}
        </section>

        <section className="w-full">
          <LoadConfigAreaChart
            vusers={vusers}
            duration={duration}
            rampUpTime={rampUp}
            rampUpSteps={rampUpSteps}
          />
        </section>
      </CardContent>
    </Card>
  );
};
