import { FieldValues } from "react-hook-form";
import { ChartDataPoint, LoadTestConfig, SetFormValueParams } from "../_types";

export const setFormValue = <T extends FieldValues>({
  fieldName,
  value,
  setValue,
}: SetFormValueParams<T>) => {
  setValue(fieldName, value, {
    shouldValidate: true,
    shouldDirty: true,
  });
};

export const calculateChartData = ({
  vusers,
  duration,
  rampUpTime,
  rampUpSteps,
}: LoadTestConfig): ChartDataPoint[] => {
  if (!vusers || !duration || !rampUpTime || !rampUpSteps) {
    return [];
  }

  // Determine step size based on total duration for better chart readability
  const totalDuration = Math.max(duration, rampUpTime);
  const getStepSize = (totalDuration: number): number => {
    if (totalDuration <= 30) return 1;
    if (totalDuration <= 60) return 2;
    if (totalDuration <= 120) return 5;
    if (totalDuration <= 300) return 10;
    return 15;
  };

  const step = getStepSize(totalDuration);
  const dataPoints: ChartDataPoint[] = [];

  // Calculate ramp-up parameters
  const stepDuration = rampUpTime / rampUpSteps;
  const usersPerStep = vusers / rampUpSteps;

  for (let i = 0; i <= Math.ceil(totalDuration / step); i++) {
    const currentSecond = i * step;
    const actualSecond = Math.min(currentSecond, totalDuration);

    // Calculate current virtual users based on ramp-up
    let currentVUsers = 0;
    if (actualSecond <= rampUpTime) {
      // During ramp-up phase
      const currentStep = Math.floor(actualSecond / stepDuration);
      currentVUsers = Math.min(Math.ceil((currentStep + 1) * usersPerStep), vusers);
    } else {
      // After ramp-up, maintain full user count until test duration ends
      currentVUsers = actualSecond <= duration ? vusers : 0;
    }

    dataPoints.push({ duration: `${actualSecond}s`, vusers: currentVUsers });
  }

  return dataPoints;
};
