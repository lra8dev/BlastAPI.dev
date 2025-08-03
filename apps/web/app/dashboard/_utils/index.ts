import { Ban, CheckCircle2, Circle, CircleX, Loader, Plus, User } from "lucide-react";
import { FilterOptions, PrimaryFilterConfig } from "../_types";

export const primaryFilterConfig = ({
  testsOptions,
  usersOptions,
}: FilterOptions): PrimaryFilterConfig[] => [
  {
    key: "tags",
    label: "Name",
    icon: Plus,
    options: testsOptions,
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
    options: usersOptions,
  },
];
