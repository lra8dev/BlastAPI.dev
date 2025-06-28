import { ThumbsUp } from "lucide-react";
import { Card } from "@/components/global/card";

export const SummaryTopCards = () => {
  return (
    <Card className="w-fit flex flex-col gap-0 p-0">
      <div className="px-5 py-3.5  border-b border-neutral-700/30">
        <h3 className="font-medium text-xs text-gray-300/75 md:text-sm">Errors</h3>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 place-items-center border border-b-0 border-gray-300/45 rounded-2xl py-8 font-medium text-gray-300/50 text-[0.8125rem]">
          <ThumbsUp size={15} />
          <p>No errors encountered</p>
          <p>during this test run.</p>
        </div>
      </div>
    </Card>
  );
};
