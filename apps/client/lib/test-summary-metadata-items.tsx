import { Calendar1, Clock4, Cpu, Globe, IdCard, User } from "lucide-react";
// TODO: import TestResult type from types package
type TestResult = {
  id: string;
  createdAt: string;
  duration: string;
  region: string;
  resources: string;
  userEmail: string;
};

export const getMetadataItems = (testResult: TestResult) => [
  {
    icon: IdCard,
    label: "Test ID",
    value: testResult.id || "N/A",
  },
  {
    icon: Calendar1,
    label: "Created At",
    value: testResult.createdAt || "N/A",
  },
  {
    icon: Clock4,
    label: "Duration",
    value: testResult.duration || "N/A",
  },
  {
    icon: Globe,
    label: "Region",
    value: testResult.region || "N/A",
  },
  {
    icon: Cpu,
    label: "Resources",
    value: testResult.resources || "N/A",
  },
  {
    icon: User,
    label: "User Email",
    value: testResult.userEmail || "N/A",
  },
];
