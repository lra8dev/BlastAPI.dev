import { TestCreationData } from "@/types";

export interface CountdownProps {
  totalDuration: number;
  isRunning?: boolean;
}

export interface ControlAcks {
  action: string;
  message: string;
  timestamp: string;
}

export interface DebugInfoProps {
  testRun: TestCreationData["testRun"];
  isConnected: boolean;
}
