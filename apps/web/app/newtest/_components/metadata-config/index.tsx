import { Control, FieldValues } from "react-hook-form";
import { FieldGenerator } from "@/components/form/field-generator";
import { Card } from "@/components/ui/card";
import { METADATA_CONFIG } from "../../_constants";

export const Metadata = <T extends FieldValues>({ control }: { control: Control<T> }) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between gap-3 md:gap-6">
      {METADATA_CONFIG.map(config => (
        <Card key={config.name} className="w-full">
          <FieldGenerator
            control={control}
            config={config}
            labelClassName="font-semibold text-muted-foreground uppercase max-md:text-xs"
          />
        </Card>
      ))}
    </div>
  );
};
