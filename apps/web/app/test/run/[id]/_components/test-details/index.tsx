import { CirclePlay, CircleStop, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestDetailsProps } from "../../_types";

export const TestDetails = ({
  name,
  duration,
  vusers,
  rampUp,
  rampUpSteps,
  region,
}: TestDetailsProps) => {
  return (
    <div className="flex flex-col gap-8 py-4 border-t dark:border-gray-700">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="font-medium text-2xl tracking-wide">{name}</h1>
        <div className="flex items-center gap-4">
          <Button variant="danger" size="sm" disabled>
            <CircleStop className="size-3 md:size-[0.8125rem]" aria-hidden="true" />
            <CirclePlay className="size-3 md:size-[0.8125rem]" aria-hidden="true" />
            Stop
          </Button>
          <Button variant="outline" size="sm" disabled>
            <Pencil className="size-3 md:size-[0.8125rem]" aria-hidden="true" />
            Edit
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 text-lg font-light">
        <div className="flex flex-col gap-4 items-center">
          <h3>Virtual Users</h3>
          <p className="font-bold text-3xl tracking-wide">{vusers} VU</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3>Duration</h3>
          <p className="font-bold text-3xl tracking-wide">{duration} s</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3>Ramp Up (s)</h3>
          <p className="font-bold text-3xl tracking-wide">{rampUp} s</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3>Ramp Up Steps</h3>
          <p className="font-bold text-3xl tracking-wide">{rampUpSteps} steps</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3>Region</h3>
          <p className="font-semibold text-xl tracking-wide">{region}</p>
        </div>
      </div>
    </div>
  );
};
