import { v4 } from "uuid";

export const NAV_ITEMS = [
  { id: v4(), title: "Home", href: "/" },
  { id: v4(), title: "Start Test", href: "/create-test" },
  { id: v4(), title: "About", href: "/about" },
  { id: v4(), title: "Contact", href: "/contact" },
];

export const API_FORM_ITEMS = [
  {
    id: v4(),
    label: "API URL",
    name: "apiUrl",
    type: "text",
    placeholder: "https://api.example.com",
  },
  {
    id: v4(),
    name: "methods",
    label: "HTTP Method",
    type: "select",
    placeholder: "GET",
  },

  {
    id: v4(),
    label: "Headers",
    name: "headers",
    type: "textarea",
    placeholder: `{
  "Content-Type": "application/json"
}`,
  },
  {
    id: v4(),
    name: "concurrency",
    label: "Concurrency",
    type: "text",
    placeholder: "10",
  },
];

export const FOOTER_ITEMS = [
  { id: v4(), title: "Product", href: "/product" },
  { id: v4(), title: "Documentation", href: "/documentation" },
  { id: v4(), title: "Integrations", href: "/integrations" },
  { id: v4(), title: "Changelog", href: "/changelog" },
  { id: v4(), title: "Status ↗", href: "/status" },
  { id: v4(), title: "Playground ↗", href: "/playground" },
  { id: v4(), title: "Company", href: "/company" },
  { id: v4(), title: "Blog", href: "/blog" },
  { id: v4(), title: "Careers", href: "/careers" },
  { id: v4(), title: "Contact us", href: "/contact" },
  { id: v4(), title: "Legal & Compliance", href: "/legal" },
  { id: v4(), title: "Cookie Policy", href: "/cookie" },
  { id: v4(), title: "Privacy Policy", href: "/privacy" },
  { id: v4(), title: "Security Policy", href: "/security" },
  { id: v4(), title: "SOC 2 Type I ↗", href: "/soc" },
  { id: v4(), title: "Community", href: "/community" },
  { id: v4(), title: "GitHub ↗", href: "https://github.com/laxmanrathod69" },
  { id: v4(), title: "GitHub Discussions ↗", href: "/github-discussions" },
  { id: v4(), title: "Twitter ↗", href: "https://x.com/luckyrathod__" },
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
