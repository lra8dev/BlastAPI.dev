import { CircleAlert, CircleCheck, CircleX } from "lucide-react";
import { MenuItem, NavTabProps } from "@/types";

export const NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Start Test", href: "/newtest" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];

export const LAYOUT_HEADER_TABS: NavTabProps["tabItems"] = [
  { name: "Load Tests", route: "/dashboard", icon: "Activity" },
  { name: "Page Speed Test", route: "/dashboard/speedtests", icon: "TrendingUp" },
  { name: "Settings", route: "/dashboard/settings/org", icon: "Settings" },
];

export const USER_DROPDOWN_ITEMS: MenuItem[] = [
  {
    id: "edit-profile-menu-item",
    icon: "Settings",
    label: "Edit profile",
  },
  {
    id: "time-zone-menu-item",
    icon: "Globe",
    label: "Time zone",
    submenu: [
      { id: "local-time-zone-menu-item", label: "Local time" },
      { id: "utc-time-zone-menu-item", label: "UTC" },
    ],
  },
  {
    id: "theme-menu-item",
    icon: "Monitor",
    label: "Theme",
    submenu: [
      { id: "system-theme-menu-item", icon: "Monitor", label: "System" },
      { id: "light-theme-menu-item", icon: "SunMedium", label: "Light" },
      { id: "dark-theme-menu-item", icon: "Moon", label: "Dark" },
    ],
  },
  {
    id: "sign-out-menu-item",
    icon: "LogOut",
    label: "Sign out",
    isSeparator: true,
  },
];

export const ACCORDION = [
  {
    id: "question-1",
    question: "Does BlastAPI Cloud execute our tests?",
    ans: `All of your team's tests run in your own AWS or Azure account, with all of the cost, security, and governance benefits that brings.

BlastAPI takes care of creating and managing all the necessary cloud infrastructure to execute your tests. The setup is quick, and you only pay for what you use. There is no long-running infrastructure to manage.

Hosted load runners are on our roadmap. If you'd like early access, please get in touch on sales@blastapi.dev`,
  },
  {
    id: "question-2",
    question: "What's the pricing model?",
    ans: `BlastAPI Cloud offers a free plan for teams just starting with load testing, or teams working on an internal proof-of-concept project.

For teams running continuous load tests on production apps, prices start at $499/month.

We support a variety of payment methods (card, invoice, ACH) and are launching an AWS Marketplace offering soon.

Please get in touch on sales@blastapi.dev if you have any questions.`,
  },
  {
    id: "question-3",
    question: "Can we run BlastAPI Cloud in our VPC?",
    ans: `Yes, we offer an Enterprise subscription plan with the ability to run BlastAPI Cloud in your own VPC. Please book a discovery call to discuss requirements and request a pricing quote.`,
  },
];

export const TEST_STATUS_MAP = {
  FAIL: {
    icon: CircleX,
    label: "Failed",
    className: "danger-color",
  },
  PARTIAL: {
    icon: CircleAlert,
    label: "Partial Success",
    className: "warning-color",
  },
  PASS: {
    icon: CircleCheck,
    label: "Succeeded",
    className: "success-color",
  },
};
