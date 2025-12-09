import { Circle } from "lucide-react";
import { HttpCodesProps } from "../../_types";

export const HttpCodes = ({ totalRequests, totalResponses, statusCodes }: HttpCodesProps) => {
  return (
    <div className="w-full flex flex-col items-center max-md:border-b md:border-l dark:border-neutral-700/30 md:w-md">
      <div className="w-full flex justify-between gap-8 font-jetbrains font-light text-xs p-4 border-b dark:border-neutral-700/30">
        <div className="mx-auto text-orange-500">
          <p>{totalRequests.toLocaleString()}</p>
          <p className="font-medium">Total requests</p>
        </div>
        <div className="mx-auto text-pink-500">
          <p>{totalResponses.toLocaleString()}</p>
          <p className="font-medium">Total responses</p>
        </div>
      </div>

      <div className="w-fit mx-auto my-auto p-4 text-center">
        <div className="relative size-34 mx-auto">
          <Circle className="size-full text-teal-500" aria-hidden />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs font-inter font-medium text-gray-500/90">HTTP codes</span>
          </div>

          <div className="absolute bottom-0 right-0 translate-x-2/3 translate-y-1/15 flex gap-1">
            <span className="-rotate-42 font-extralight text-[8px] text-teal-500">|</span>
            <div className="flex items-center font-jetbrains font-light border border-teal-500/40 rounded text-[11px] text-teal-500 overflow-hidden backdrop-blur-md">
              <span className="bg-teal-500/15 px-1 py-0.5 border-r border-teal-500/20">200</span>
              <span className="px-1 py-0.5">{statusCodes["200"]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
