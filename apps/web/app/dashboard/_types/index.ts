import { TestStatus } from "@blastapi/db";
import { TestRegions } from "@blastapi/validators";
import { LucideIcon } from "lucide-react";

export interface TestHistories {
  data: {
    id: string;
    status: TestStatus;
    createdAt: Date;
    notes?: string[];

    testConfig: {
      name: string;
      region: TestRegions;
      duration: number;
    };

    user: {
      id: string;
      name: string | null;
      email: string;
      image: string | null;
    };
  }[];
}

interface FilterOption {
  id?: string;
  name: string;
  icon?: LucideIcon;
  iconCN?: string;
  children?: React.ReactNode;
}

export interface FilterActionsConfig {
  key: string;
  label: string;
  icon: LucideIcon;
  isCommandPallet?: boolean;
  options?: FilterOption[];
}

export interface FilterActions {
  tests: { name: string }[];
  users: { name: string; children: React.ReactNode }[];
}

export interface TestBadge {
  notes?: string[];
  shared?: boolean;
}
