import Link from "next/link";

export const dashboardCardContents = [
  {
    text: (
      <>
        <span className="font-semibold text-neutral-600 dark:text-gray-200">
          Explore the test history{" "}
        </span>
        <span>above</span>
      </>
    ),
  },
  {
    text: (
      <>
        <Link
          href="/dashboard/settings/team-members"
          className="underline underline-offset-2 font-semibold text-neutral-600 dark:text-gray-200"
        >
          Invite team members
        </Link>{" "}
        <span>to collaborate with</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-semibold text-neutral-600 dark:text-gray-200">Run your first </span>
        <Link
          href="/newtest"
          className="underline underline-offset-2 hover:brightness-110 text-neutral-600 dark:text-gray-200 font-semibold"
        >
          test
        </Link>
      </>
    ),
  },
];
