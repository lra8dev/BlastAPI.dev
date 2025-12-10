import { Check, ChevronsUpDown } from "lucide-react";
import { UserOrgProps } from "@/types";
import { Badge } from "../badge";
import { CustPopover } from "../popover";
import { Button } from "../ui/button";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

export const UserOrg = ({ name, email }: UserOrgProps) => {
  return (
    <CustPopover
      trigger={
        <Button
          size="sm"
          variant="primary"
          role="combobox"
          className="w-fit gap-2 bg-transparent text-neutral-600 hover:bg-neutral-100 hover:border-neutral-200 dark:hover:bg-neutral-200/6 dark:hover:border-neutral-700/30"
        >
          {name}&apos;s Org
          <Badge className="text-[0.6875rem]">Developer</Badge>
          <ChevronsUpDown className="size-3 opacity-50" aria-hidden />
        </Button>
      }
    >
      <CardHeader className="px-2.5 justify-start">
        <CardTitle className="text-muted-foreground font-medium">Organizations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 p-0">
        <span className="flex items-center gap-3 justify-between h-auto px-2 py-1 rounded bg-neutral-200/80 hover:bg-neutral-200/60 dark:bg-neutral-200/9 dark:hover:bg-neutral-200/7 text-neutral-600 dark:text-neutral-300/70 cursor-pointer">
          {name ?? email}&apos;s Org <Check className="size-3" />
        </span>
      </CardContent>
    </CustPopover>
  );
};
