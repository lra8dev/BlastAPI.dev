import { TestStatus } from "@blastapi/db";
import { Control, FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";

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
  jobId: string;
  testRunId: string;
  status: TestStatus;
  createdAt: Date;
}
