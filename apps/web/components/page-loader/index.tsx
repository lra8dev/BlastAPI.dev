import { Loader2 } from "lucide-react";
import Image from "next/image";

export const PageLoader = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center font-inter font-medium bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900/40 dark:via-slate-900/50 dark:to-slate-900">
      <Image
        src="/assets/BlastAPI_logo.svg"
        alt="BlastAPI Logo"
        width={120}
        height={120}
        priority
      />
      <div className="absolute z-40 bottom-12 left-12 flex items-center gap-2 text-sm text-indigo-400 dark:text-indigo-300 shadow-xs">
        <Loader2 className="text-indigo-500 animate-spin" />
        Loading blastapi.dev
      </div>
    </section>
  );
};
