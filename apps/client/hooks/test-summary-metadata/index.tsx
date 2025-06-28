import { Calendar1, Clock4, Cpu, Globe, IdCard, User } from "lucide-react";
import { Card } from "@/components/global/card";

// TODO: import TestResult type from types package
export const TestSummaryMetadata = () => {
  return (
    <Card className="w-full gap-0 p-0">
      <div className="px-5 py-3.5 border-b border-neutral-700/30">
        <h3 className="font-medium text-xs text-gray-300/75 md:text-sm">Metadata</h3>
      </div>
      <div className="w-80 flex flex-col gap-3 px-5 py-4 font-medium tracking-wide text-zinc-300/78">
        <div className="flex items-center gap-2 text-xs cursor-pointer">
          <IdCard size={17} />
          <p className="truncate">tp74c_jmq3rj7b95h7mnyp6m6jyztdpzbg4_e3x9</p>
        </div>
        <div className="flex items-center gap-2 text-[0.8125rem]">
          <Calendar1 size={17} />
          <p className="truncate">Jun 21, 2025, 2:08:44 PM</p>
        </div>
        <div className="flex items-center gap-2 text-[0.8125rem]">
          <Clock4 size={17} />
          <p>6m 27s</p>
        </div>
        <div className="flex items-center gap-2 text-[0.8125rem]">
          <Globe size={17} />
          <p>us-east-1</p>
        </div>
        <div className="flex items-center gap-2 text-[0.8125rem]">
          <Cpu size={17} />
          <p>4096 vCPU/8192 MiB</p>
        </div>
        <div className="flex items-center gap-2 text-[0.8125rem]">
          <User size={17} />
          <p>lucky.sd02@gmail.com</p>
        </div>
      </div>
    </Card>
  );
};
