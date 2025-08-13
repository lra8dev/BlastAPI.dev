import { Ban, CheckCircle2, Circle, CircleX, Loader, Plus, User } from "lucide-react";
import { UserAvatar } from "@/components/avatar";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { FilterProps, PrimaryFilterConfig } from "../_types";

export const primaryFilterConfig = ({ ...data }: FilterProps): PrimaryFilterConfig[] => {
  return [
    {
      key: "tags",
      label: "Name",
      icon: Plus,
      options: Object.keys(data || {}).map(name => ({ name })),
      isCommandPallet: true,
    },
    {
      key: "status",
      label: "Status",
      icon: Circle,
      options: [
        { icon: CheckCircle2, name: "Succeeded", iconCN: "text-teal-500" },
        { icon: CircleX, name: "Failed", iconCN: "text-red-500" },
        { icon: Ban, name: "Canceled", iconCN: "text-yellow-500" },
        { icon: Loader, name: "Running", iconCN: "text-purple-500" },
      ],
    },
    {
      key: "userid",
      label: "User",
      icon: User,
      options: Object.values(data || {}).map(test => ({
        name: test.user.name,
        children: UserAvatar({
          url: test.user.image,
          className: "size-5.5",
          fallbackChar: generateFallbackChars(test.user.email),
        }),
      })),
    },
  ];
};
