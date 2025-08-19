"use client";

import { HelpCircle, icons, LucideIcon } from "lucide-react";
import { useMemo } from "react";

export interface DynamicIconProps extends Omit<React.ComponentProps<LucideIcon>, "ref"> {
  name: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const IconComponent = useMemo(() => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || HelpCircle;
  }, [name]);

  return <IconComponent {...props} />;
};
