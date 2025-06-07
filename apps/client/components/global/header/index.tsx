import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 right-0 left-0 z-50 hidden w-full items-center justify-between px-4 py-2 backdrop-blur-sm md:h-20 md:px-28 lg:flex">
        <figure>
          <Link href="/">
            <Image src="/assets/brand-loogo.svg" alt="logo" width={150} height={150} />
          </Link>
        </figure>
        <nav className="flex items-center md:gap-2 md:text-sm lg:gap-8 lg:text-base">
          {NAV_ITEMS.map(({ id, title, href }) => (
            <Link
              key={id}
              href={href}
              className={`box-hover cursor-pointer rounded-sm px-3 py-2 text-sm font-normal text-gray-400 ${
                href === "/" && "bg-dark-gray text-gray-300"
              }`} // TODO: Fix this href condition
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="font-inter flex items-center gap-3">
          <Button className="bg-dark-gray text-xs font-light max-md:px-3 md:text-sm">GitHub</Button>
          <Button variant="outline" className="text-xs font-light max-md:px-3 md:text-sm">
            Sign In
          </Button>
        </div>
      </header>

      <div className="fixed top-0 right-0 left-0 z-50 flex w-full flex-col backdrop-blur-sm lg:hidden">
        <header className="flex w-full items-center justify-between px-4 py-2 md:h-20 md:px-28">
          <figure>
            <Link href="/">
              <Image src="/assets/brand-loogo.svg" alt="logo" width={150} height={150} />
            </Link>
          </figure>

          <div className="font-inter flex items-center gap-3">
            <Button className="bg-dark-gray text-xs font-light max-md:px-3 md:text-sm">
              GitHub
            </Button>
            <Button variant="outline" className="text-xs font-light max-md:px-3 md:text-sm">
              Sign In
            </Button>
          </div>
        </header>
        <nav className="flex w-full gap-4 px-4 md:px-28">
          {NAV_ITEMS.map(({ id, title, href }) => (
            <Link
              key={id}
              href={href}
              className={`box-hover flex-grow cursor-pointer rounded-sm border border-gray-900 py-2 text-center text-xs font-normal text-gray-400 md:px-3 md:py-2 md:text-sm ${
                title === "Home" && "bg-dark-gray text-gray-300"
              }`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
