import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PrimaryBtn } from "@/components/global/buttons/primary";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";

export const Header = () => {
  return (
    <>
      <header className="hidden lg:flex px-34 py-5 sticky top-0 right-0 left-0 z-50 w-full items-center justify-between backdrop-blur-xs drop-shadow-xs">
        <figure>
          <Link href="/" className="flex items-center">
            <Image src="/icons/API Overload Logo.svg" alt="logo" width={60} height={60} />
            <h1 className="font-bold font-orbitron text-white text-base">Overload</h1>
          </Link>
        </figure>
        <nav className="flex items-center md:gap-2 md:text-sm lg:gap-8 lg:text-base font-jetbrains">
          {NAV_ITEMS.map(({ id, title, href }) => (
            <Link
              key={id}
              href={href}
              className={`box-hover px-3 py-2 rounded text-sm font-light text-gray-300 ${
                href === "/" && "bg-dark-gray-2 text-gray-200 border border-gray-700/30"
              }`} // TODO: Fix this href condition
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="font-jetbrains flex items-center gap-3">
          <PrimaryBtn
            title="GitHub"
            className="font-light p-3 rounded text-sm bg-dark-gray-2 border border-neutral-800 brightness-85 hover:brightness-120 text-gray-300/95"
          >
            <Github />
          </PrimaryBtn>
          <Button
            variant="primary"
            className="text-sm font-light p-3 rounded bg-electric-blue/35 text-[#73a5d8] border border-electric-blue/20 brightness-85 hover:brightness-120"
          >
            Sign In
          </Button>
        </div>
      </header>

      <header className="lg:hidden fixed top-0 right-0 left-0 z-50 flex w-full flex-col backdrop-blur-xs drop-shadow-xs">
        <div className="flex w-full items-center justify-between px-4 py-2 md:h-20 md:px-16">
          <figure>
            <Link href="/">
              <Image src="/assets/brand-loogo.svg" alt="logo" width={150} height={150} />
            </Link>
          </figure>

          <div className="font-jetbrains flex items-center gap-3">
            <PrimaryBtn
              title="GitHub"
              className="p-2 font-extralight text-[0.80rem] gap-1 bg-dark-gray-2 border border-neutral-800 rounded brightness-85 hover:brightness-120 text-gray-300/95"
            >
              <Github />
            </PrimaryBtn>
            <Button
              variant="primary"
              className="p-2 font-extralight text-[0.80rem] bg-electric-blue/35 text-[#73a5d8] border border-electric-blue/20 brightness-85 hover:brightness-120 rounded"
            >
              Sign In
            </Button>
          </div>
        </div>
        <nav className="flex w-full gap-4 px-4 md:px-16">
          {NAV_ITEMS.map(({ id, title, href }) => (
            <Link
              key={id}
              href={href}
              className={`box-hover flex-grow cursor-pointer rounded border border-neutral-800/50 py-2 text-center text-xs font-normal text-gray-400 md:px-3 md:py-2 md:text-sm ${
                title === "Home" && "bg-dark-gray text-gray-300"
              }`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};
