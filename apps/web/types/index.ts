import { TestStatus, User } from "@blastapi/db/types";
import { TestRegions } from "@blastapi/validators";
import { ClassValue } from "clsx";
import { LucideIcon } from "lucide-react";
import { Control, FieldValues } from "react-hook-form";

export interface LayoutProps {
  children: Readonly<React.ReactNode>;
  className?: ClassValue;
}

export interface LayoutHeaderProps {
  user: Omit<User, "password">;
  className?: ClassValue;
}

export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "time"
  | "url"
  | "search";

export interface FieldConfig {
  name: string;
  type: InputType;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

export interface FieldGeneratorProps<T extends FieldValues> {
  control: Control<T>;
  config: FieldConfig;
  className?: ClassValue;
  labelClassName?: ClassValue;
  formItemClassName?: ClassValue;
}

export interface UserAvatarProps {
  url?: string;
  className?: ClassValue;
  fallbackChar: string;
}

export interface JsonRow {
  key: string;
  value: string;
  description?: string;
}

export interface NavTabProps {
  tabItems: { name: string; route: string; icon: string }[];
  className?: ClassValue;
}

export interface CustTooltipProps {
  className?: ClassValue;
  label?: string;
  content: string;
  children: React.ReactNode;
  align?: "center" | "start" | "end";
  side?: "left" | "top" | "right" | "bottom";
}

export interface MenuItem {
  id: string;
  icon?: string;
  label: string;
  submenu?: MenuItem[];
  isSeparator?: boolean;
}

export interface CustDropdownMenuProps {
  trigger: React.ReactNode;
  menuItems: MenuItem[];
}

export interface CustPopoverProps {
  align?: "center" | "end" | "start";
  trigger: React.ReactNode;
  children: React.ReactNode;
  cardClassName?: ClassValue;
  triggerClassName?: ClassValue;
  contentClassName?: ClassValue;
}

export interface CustSelectOption {
  isSeparator?: boolean;
  value: string;
  label: React.ReactNode;
}

export interface CustSelectProps {
  value?: string;
  options: CustSelectOption[];
  onChange?: (value: string) => void;
  triggerClassName?: ClassValue;
  contentClassName?: ClassValue;
  itemClassName?: ClassValue;
}

export interface TestStatusProps {
  passedChecks: number;
  failedChecks: number;
  totalChecks: number;
  icon: LucideIcon;
  className?: ClassValue;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BadgeProps extends LayoutProps {}

export interface UserOrgProps {
  name?: string;
  email?: string;
  userId: string;
}

export type TestRunIdParams = { params: Promise<{ id: string }> };

export interface FetchApi {
  url: string;
  isAuth?: boolean;
  attempt?: number;
  retry?: number;
  options?: RequestInit;
}

export interface ApiSucceeded<T> {
  data: T;
  error: null;
  message: string;
}

export interface ApiErrored {
  data: null;
  error: Error;
}

export type ApiReturn<T> = Promise<ApiSucceeded<T> | ApiErrored>;

export interface IconProps {
  size?: number | string;
  className?: ClassValue;
}

// Socket related types
export interface SocketClientOptions {
  autoConnect?: boolean;
  reconnection?: boolean;
  reconnectionDelay?: number;
  timeout?: number;
}

export type ConnectionState = "disconnected" | "connecting" | "connected";

export interface TestCreationData {
  testRun: {
    id: string;
    name: string;
    status: TestStatus;
    duration: number;
    region: TestRegions;
    vusers: number;
    rampUp: number;
    rampUpSteps: number;
    createdAt: Date;
    startedAt: Date | null;
  };
  jobId: string;
}

interface TestStatusEventPayload {
  testRunId: string;
  status: TestStatus;
  startedAt?: string;
  endedAt?: string;
  error?: string;
}

interface TestControlAckPayload {
  testRunId: string;
  action: string;
  timestamp: string;
  message: string;
}

export interface SocketEvents {
  connect: () => void;
  disconnect: (reason: string) => void;
  error: (error: { testRunId: string; message: string; code: string }) => void;

  "test:created": (data: TestCreationData) => void;
  "test:status": (data: TestStatusEventPayload) => void;
  "test:control:ack": (data: TestControlAckPayload) => void;
}
