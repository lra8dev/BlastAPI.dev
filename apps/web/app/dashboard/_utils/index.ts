import { FilteringData, PrimaryFilterConfig } from "../_types";

const STATUS_OPTIONS = [
  { icon: "CheckCircle2", name: "Succeeded", iconCN: "text-teal-500" },
  { icon: "CircleX", name: "Failed", iconCN: "text-red-500" },
  { icon: "Ban", name: "Canceled", iconCN: "text-yellow-500" },
  { icon: "Loader", name: "Running", iconCN: "text-purple-500" },
];

export const primaryFilterConfig = (tests: FilteringData[]): PrimaryFilterConfig[] => {
  const testOptions = Array.from(new Set(tests.map(data => data.test.name))).map(name => ({
    name,
  }));

  const uniqueUsers = new Map();
  tests.forEach(data => {
    const userKey = `${data.user.email}`;
    if (!uniqueUsers.has(userKey)) {
      uniqueUsers.set(userKey, {
        name: data.user.name ?? data.user.email,
        user: {
          url: data.user.image ?? undefined,
          email: data.user.email,
        },
      });
    }
  });

  const userOptions = Array.from(uniqueUsers.values());

  return [
    {
      key: "tags",
      label: "Name",
      icon: "Plus",
      options: testOptions,
      isCommandPallet: true,
    },
    {
      key: "status",
      label: "Status",
      icon: "Circle",
      options: STATUS_OPTIONS,
    },
    {
      key: "userid",
      label: "User",
      icon: "User",
      options: userOptions,
    },
  ];
};
