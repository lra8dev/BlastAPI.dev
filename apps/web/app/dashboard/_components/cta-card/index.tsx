import { CornerDownRight } from "lucide-react";
import { dashboardCardContents } from "@/app/dashboard/_components/card-contents";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CTACardProps = { isHistoryCount?: boolean };

export const CTACard = ({ isHistoryCount }: CTACardProps) => {
  return (
    <Card
      className={cn(
        "font-medium relative mx-auto my-2 flex w-11/12 max-w-3xl flex-col gap-3 rounded-md",
        "p-8 min-[42rem]:p-12 md:p-20",
        "min-h-[280px] overflow-hidden shadow-none",
        isHistoryCount && "mt-26",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7be_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7be_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626bd_1px,transparent_1px),linear-gradient(to_bottom,#262626bd_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-dark-2 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <CardHeader className="z-40 w-full gap-4 p-0">
        <CardTitle className="font-semibold text-xl sm:text-2xl dark:text-gray-200 text-neutral-700">
          Welcome to BlastAPI Cloud
        </CardTitle>
        <CardDescription className="dark:text-gray-300/70 text-[0.8125rem] text-muted-foreground">
          This is your new workspace. Here are some things you can do next:
        </CardDescription>
      </CardHeader>

      <CardContent className="z-40 flex w-full flex-col gap-2 dark:text-gray-300/70 text-[0.8125rem] text-neutral-500 p-0">
        {dashboardCardContents.map(({ text }, idx) => (
          <div key={idx} className="flex items-start gap-2 pl-3">
            <CornerDownRight className="size-4 text-teal-600" />
            <p>{text}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
