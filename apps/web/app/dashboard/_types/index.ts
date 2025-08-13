import { HealthCheckStatus, TestStatus, UserRole } from "@blastapi/db";
import { TestRegions } from "@blastapi/validators";
import { LucideIcon } from "lucide-react";

export interface TestHistories {
  data?: {
    id: string;
    status: TestStatus;
    createdAt: Date;
    user: {
      name?: string;
      email: string;
      image?: string;
      role: UserRole;
    };
    healthCheckSummary: {
      passedChecks: number;
      totalChecks: number;
      overallStatus: HealthCheckStatus;
    };
    testConfig: { name: string; region: TestRegions; duration: number };
    notes?: string[];
  }[];
}

export interface FilterBarProps {
  data?: {
    testConfig: { name: string };
    user: { name?: string; email: string; image?: string; role: UserRole };
  }[];
}

interface FilterOption {
  id?: string;
  name?: string;
  icon?: LucideIcon;
  iconCN?: string;
  children?: React.ReactNode;
}

export interface PrimaryFilterConfig {
  key: string;
  label: string;
  icon: LucideIcon;
  isCommandPallet?: boolean;
  options?: FilterOption[];
}

export type FilterProps =
  | Record<
      string,
      {
        testConfig: { name: string };
        user: { name?: string; email: string; image?: string };
      }
    >
  | undefined;

export interface NavigationHandlers {
  hasSearchParam: (name: string, value?: string) => boolean;
  updateSearchParam: (name: string, value?: string | boolean) => void;
  getSearchParam?: (name: string) => string | null;
}

export interface PrimaryFiltersProps extends NavigationHandlers {
  options: PrimaryFilterConfig[];
}

export interface ClearFilterProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface TestBadge {
  notesLength?: number;
  shared?: boolean;
}
