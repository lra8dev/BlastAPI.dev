import { CustTooltip } from "@/components/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResultMetadataProps } from "../../_types";
import { getMetadataItems } from "../../_utils/metadata-items";

export const ResultMetadata = ({ ...data }: ResultMetadataProps) => {
  const metadataItems = getMetadataItems(data);

  return (
    <Card className="w-full gap-0 p-0 md:w-80">
      <CardHeader className="px-5 py-3.5 border-b dark:border-neutral-700/30 gap-0">
        <CardTitle className="font-medium text-[0.8125rem] text-neutral-600 dark:text-gray-300/75">
          Metadata
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap md:flex-nowrap md:flex-col gap-2 px-5 py-4 font-medium text-neutral-500 dark:text-neutral-300/70 overflow-hidden">
        {metadataItems.map(item => (
          <CustTooltip
            content={item.desc === "Started at" ? item.value : item.desc}
            key={item.label}
            label={item.desc === "Started at" ? item.desc : undefined}
            side="left"
          >
            <div
              aria-label={item.label}
              className="flex items-center gap-2 text-[0.8125rem] min-w-0"
            >
              <item.icon size={16} aria-hidden />
              <h3 className="truncate">{item.value}</h3>
            </div>
          </CustTooltip>
        ))}
      </CardContent>
    </Card>
  );
};
