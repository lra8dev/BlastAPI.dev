import { Calendar1, Clock4, Cpu, Globe, IdCard, LucideIcon, User } from "lucide-react";
import { formatDuration } from "@/utils/format-duration";
import { formatDateTime } from "@/utils/time/format-datetime";
import { ResultMetadataProps } from "../../_types";

interface MetadataItems {
  icon: LucideIcon;
  label: string;
  value: string;
  desc: string;
}

export const getMetadataItems = (result: ResultMetadataProps): MetadataItems[] => [
  {
    icon: IdCard,
    label: "Test ID",
    value: result.id || "N/A",
    desc: "Copy Test ID",
  },
  {
    icon: Calendar1,
    label: `Started At ${result.startedAt}`,
    value: formatDateTime(result.startedAt ?? 0) || "N/A",
    desc: "Started at",
  },
  {
    icon: Clock4,
    label: "Duration",
    value: formatDuration(result.duration) || "N/A",
    desc: "Duration",
  },
  {
    icon: Globe,
    label: "Region",
    value: result.region || "N/A",
    desc: "Region",
  },
  {
    icon: Cpu,
    label: "Resources",
    value: result.resources || "N/A",
    desc: "Platform configuration",
  },
  {
    // WIP: Add user avatar
    icon: User,
    label: "Started By",
    value: result.user?.name || result.user.email || "N/A",
    desc: "Started by",
  },
];
