import { TestStatus } from "@blastapi/db";
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";

export interface RequestConfigProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>;
  control: Control<T>;
}

export interface LoadConfigProps<T extends FieldValues> extends RequestConfigProps<T> {
  getValues: UseFormGetValues<T>;
}

export interface SetFormValueProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>;
}

export interface NewTestResponse {
  testRun: {
    id: string;
    status: TestStatus;
    createdAt: Date;
  };
  jobId: string;
  estimatedStartTime: number;
}

export interface LoadTestConfig {
  vusers: number;
  duration: number;
  rampUpTime: number;
  rampUpSteps: number;
}

export interface SetFormValueParams<T extends FieldValues> extends SetFormValueProps<T> {
  fieldName: Path<T>;
  value: PathValue<T, Path<T>>;
}

export interface ChartDataPoint {
  vusers: number;
  duration: string;
}
