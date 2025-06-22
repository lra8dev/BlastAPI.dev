"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryBtn } from "@/components/global/buttons/primary";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";

export const Header = () => {
  const pathname = usePathname();

  const renderNavItems = (isMobile = false) =>
    NAV_ITEMS.map(({ id, title, href }) => {
      const isActive = pathname === href;
      const baseClass = "box-hover rounded font-light text-gray-300 transition-colors";
      const activeClass = isMobile
        ? "bg-dark-gray text-gray-200 border border-neutral-700"
        : "bg-dark-gray-2 text-gray-200 border border-gray-700/30";
      const sharedClass = isMobile
        ? "flex-grow py-2 text-center text-xs md:text-sm md:px-3 md:py-2"
        : "px-3 py-2 text-sm";

      return (
        <Link
          key={id}
          href={href}
          className={`${baseClass} ${sharedClass} ${isActive ? activeClass : ""}`}
        >
          {title}
        </Link>
      );
    });

  return (
    <>
      <header className="hidden md:flex md:fixed top-0 z-50 w-full items-center justify-between backdrop-blur-md drop-shadow-sm px-4 lg:px-16 py-5">
        <Link href="/">
          <figure className="flex items-center gap-2">
            <Image
              src="/icons/API Overload Logo.svg"
              alt="API Overload Logo"
              width={60}
              height={60}
              priority
            />
            <h1 className="font-bold font-orbitron text-white text-base">Overload</h1>
          </figure>
        </Link>

        <nav className="flex items-center gap-6 font-jetbrains">{renderNavItems()}</nav>

        <div className="font-jetbrains flex items-center gap-3">
          <PrimaryBtn
            title="GitHub"
            className="font-light p-3 text-sm bg-dark-gray-2 border border-neutral-800 text-gray-300/95 rounded brightness-90 hover:brightness-110"
          >
            <Github className="w-4 h-4" />
          </PrimaryBtn>
          <Button
            variant="primary"
            className="text-sm font-light p-3 rounded bg-electric-blue/35 text-[#73a5d8] border border-electric-blue/20 brightness-90 hover:brightness-110"
          >
            Sign In
          </Button>
        </div>
      </header>

      <header className="md:hidden fixed top-0 z-50 w-full flex flex-col backdrop-blur-md drop-shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <Link href="/">
            <figure>
              <Image
                src="/icons/API Overload Logo.svg"
                alt="API Overload Logo"
                width={60}
                height={60}
              />
            </figure>
          </Link>

          <div className="font-jetbrains flex items-center gap-2">
            <PrimaryBtn
              title="GitHub"
              className="text-xs p-2 md:text-[0.8rem] font-light gap-1 bg-dark-gray-2 border border-neutral-800 text-gray-300/95 rounded brightness-90 hover:brightness-110"
            >
              <Github />
            </PrimaryBtn>
            <Button
              variant="primary"
              className="font-light text-xs p-2 bg-electric-blue/35 text-[#73a5d8] border border-electric-blue/20 rounded brightness-90 hover:brightness-110 md:text-[0.8rem]"
            >
              Sign In
            </Button>
          </div>
        </div>

        <nav className="flex w-full gap-2 px-4 pb-3 md:px-6">{renderNavItems(true)}</nav>
      </header>
    </>
  );
};
