import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import { GitHubIcon } from "@/icons/github";
import { cn } from "@/lib/utils";

export const Header = () => {
  const renderNavItems = (isMobile = false) =>
    NAV_ITEMS.map(({ title, href }) => {
      const baseClass =
        "box-hover rounded font-light font-mono text-xs text-gray-300 transition-colors uppercase tracking-wider";
      const activeClass = isMobile
        ? "bg-dark-3/40 backdrop-blur-lg opacity-80 text-gray-200 border border-neutral-700/20"
        : "bg-dark-3/40 backdrop-blur-lg opacity-80 text-gray-200 border border-gray-700/20";
      const sharedClass = isMobile ? "flex-grow py-2 text-center md:px-3 md:py-2" : "px-3 py-2";

      return (
        <Link
          key={title}
          href={href}
          className={cn(baseClass, sharedClass, href === "/" && activeClass)}
        >
          {title}
        </Link>
      );
    });

  return (
    <>
      <header className="hidden md:flex md:fixed top-0 z-40 w-full items-center justify-between backdrop-blur-sm px-4 md:px-5 lg:px-32 pt-5">
        <Link href="/">
          <Image
            src="/assets/BlastAPI_logo.svg"
            alt="BlastAPI Logo"
            width={105}
            height={105}
            priority
          />
        </Link>

        <nav className="flex items-center gap-6">{renderNavItems()}</nav>

        <div className="flex items-center gap-3 tracking-wider font-jetbrains">
          <Link href="https://github.com/lra8dev/BlastAPI.dev">
            <Button
              size="xs"
              variant="primary"
              className="font-light text-xs px-3 py-2 bg-dark-3/50 dark:border-neutral-700/20 hover:brightness-110 backdrop-blur-lg brightness-90 opacity-80"
            >
              <GitHubIcon className="size-3.5" />
              GitHub
            </Button>
          </Link>
          <Link href="/signin">
            <Button
              size="xs"
              variant="primary"
              className="text-xs font-light bg-electric-blue/35 px-3 py-2 text-[#73a5d8] border-electric-blue/20 hover:brightness-110 uppercase backdrop-blur-lg opacity-80"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      <header className="md:hidden fixed top-0 z-40 w-full flex flex-col backdrop-blur-sm">
        <div className="flex items-center flex-wrap overflow-hidden justify-between px-4 py-3 md:px-6">
          <Link href="/">
            <Image
              src="/assets/BlastAPI_logo.svg"
              alt="BlastAPI Logo"
              width={105}
              height={105}
              className="max-[320px]:hidden"
              priority
            />
            <Image
              src="/assets/BlastAPI_logo_single.svg"
              alt="BlastAPI Logo"
              width={19}
              height={19}
              className="min-[320px]:hidden"
              priority
            />
          </Link>

          <div className="flex items-center gap-2 tracking-wider font-jetbrains">
            <Link href="https://github.com/lra8dev/BlastAPI.dev">
              <Button
                size="xs"
                variant="primary"
                title="GitHub"
                className="font-light text-xs bg-dark-3 px-3 py-2 gap-1 border-neutral-700/20 brightness-90 hover:brightness-110"
              >
                <GitHubIcon />
                GitHub
              </Button>
            </Link>
            <Link href="/signin">
              <Button
                size="xs"
                variant="primary"
                className="text-xs font-light bg-electric-blue/35 px-3 py-2 text-[#73a5d8] border-electric-blue/20 brightness-90 hover:brightness-110 uppercase"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <nav className="flex w-full flex-wrap overflow-hidden gap-2 px-4 pb-3 md:px-6">
          {renderNavItems(true)}
        </nav>
      </header>
    </>
  );
};
