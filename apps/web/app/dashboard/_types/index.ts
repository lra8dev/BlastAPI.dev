import { HealthCheckStatus, TestStatus, UserRole } from "@blastapi/db";
import { TestRegions } from "@blastapi/validators";

interface User {
  name: string | null;
  email: string;
  image: string | null;
  role: UserRole;
}

export interface TestHistory {
  id: string;
  status: TestStatus;
  createdAt: Date;
  user: User;
  testConfig: {
    name: string;
    region: TestRegions; // WIP: test region in DB should be enum (currently string)
  } | null;
  testResult: {
    duration: number;
    notes?: string[]; // WIP: Add notes
  } | null;
  healthCheckSummary: {
    totalChecks: number;
    passedChecks: number;
    failedChecks: number;
    overallStatus: HealthCheckStatus;
  } | null;
}

export interface FilteringData {
  test: { name?: string };
  user: User;
}

interface FilterOption {
  id?: string;
  name?: string;
  icon?: string;
  iconCN?: string;
  children?: React.ReactNode;
  user?: {
    url?: string;
    email: string;
  };
}

export interface PrimaryFilterConfig {
  key: string;
  label: string;
  icon: string;
  isCommandPallet?: boolean;
  options?: FilterOption[];
}

export interface NavigationHandlers {
  hasSearchParam: (name: string, value?: string) => boolean;
  updateSearchParam: (name: string, value?: string | boolean) => void;
  getSearchParam?: (name: string) => string | null;
}

export interface TestBadge {
  notesLength?: number;
  shared?: boolean;
}
