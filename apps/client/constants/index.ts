import { v4 } from "uuid";

import { loadConfigProps } from "@/utils/load-config-props";

export const NAV_ITEMS = [
  { id: v4(), title: "Home", href: "/" },
  { id: v4(), title: "Start Test", href: "/create-test" },
  { id: v4(), title: "About", href: "#" },
  { id: v4(), title: "Contact", href: "#" },
];

export const LOAD_CONFIG = ["totalRequests", "duration", "concurrency", "requestRate"].map(name =>
  loadConfigProps(name),
);

export const REQUEST_METHODS = [
  {
    id: v4(),
    method: "GET",
  },
  {
    id: v4(),
    method: "POST",
  },
  {
    id: v4(),
    method: "DELETE",
  },
  {
    id: v4(),
    method: "PUT",
  },
];

export const REQ_CONFIG_TABS = [
  {
    id: v4(),
    name: "Headers",
  },
  {
    id: v4(),
    name: "Body",
  },
];

export const FOOTER_ITEMS = [
  { id: v4(), title: "Product", href: "#" },
  { id: v4(), title: "Documentation", href: "#" },
  { id: v4(), title: "Integrations", href: "#" },
  { id: v4(), title: "Changelog", href: "#" },
  { id: v4(), title: "Status ↗", href: "#" },
  { id: v4(), title: "Playground ↗", href: "#" },
  { id: v4(), title: "Company", href: "#" },
  { id: v4(), title: "Blog", href: "#" },
  { id: v4(), title: "Careers", href: "#" },
  { id: v4(), title: "Contact us", href: "#" },
  { id: v4(), title: "Legal & Compliance", href: "#" },
  { id: v4(), title: "Cookie Policy", href: "#" },
  { id: v4(), title: "Privacy Policy", href: "#" },
  { id: v4(), title: "Security Policy", href: "#" },
  { id: v4(), title: "SOC 2 Type I ↗", href: "#" },
  { id: v4(), title: "Community", href: "#" },
  { id: v4(), title: "GitHub ↗", href: "https://github.com/laxmanrathod69" },
  { id: v4(), title: "GitHub Discussions ↗", href: "#" },
  { id: v4(), title: "Twitter ↗", href: "#" },
];

export const ACCORDION = [
  {
    id: v4(),
    question: "Does API Overload Cloud execute our tests?",
    ans: `All of your team's tests run in your own AWS or Azure account, with all of the cost, security, and governance benefits that brings.

API Overload takes care of creating and managing all the necessary cloud infrastructure to execute your tests. The setup is quick, and you only pay for what you use. There is no long-running infrastructure to manage.

Hosted load runners are on our roadmap. If you'd like early access, please get in touch on sales@apioverload.io`,
  },
  {
    id: v4(),
    question: "What's the pricing model?",
    ans: `API Overload Cloud offers a free plan for teams just starting with load testing, or teams working on an internal proof-of-concept project.

For teams running continuous load tests on production apps, prices start at $499/month.

We support a variety of payment methods (card, invoice, ACH) and are launching an AWS Marketplace offering soon.

Please get in touch on sales@apioverload.io if you have any questions.`,
  },
  {
    id: v4(),
    question: "Can we run API Overload Cloud in our VPC?",
    ans: `Yes, we offer an Enterprise subscription plan with the ability to run API Overload Cloud in your own VPC. Please book a discovery call to discuss requirements and request a pricing quote.`,
  },
];
