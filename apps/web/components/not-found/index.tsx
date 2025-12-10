import Link from "next/link";
import { Badge } from "../badge";

interface NotFoundProps {
  title: string;
  statusCode?: number;
  description?: string;
}

export const NotFound = ({ title, statusCode, description }: NotFoundProps) => {
  return (
    <section className="flex w-full min-h-screen flex-col gap-2 items-center justify-center p-5 text-center text-balance font-inter">
      <Badge className="font-jetbrains font-normal text-[0.5625rem] text-red-400 dark:text-red-300/90 bg-red-500/25 dark:bg-red-500/25 border-red-500/25 dark:border-red-500/25 rounded-full px-1.5 py-[0.4rem]">
        {statusCode || 404}
      </Badge>
      <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">{title}</h3>
      <p className="font-medium text-[0.8125rem] text-neutral-500 dark:text-neutral-400 max-w-lg">
        {description}{" "}
        <Link
          href="/dashboard"
          className="underline underline-offset-2 hover:text-neutral-700 dark:hover:text-neutral-200/85 transition-all duration-100 ease-in-out delay-75"
        >
          back home.
        </Link>
      </p>
    </section>
  );
};
