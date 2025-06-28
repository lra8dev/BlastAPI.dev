import Image from "next/image";
import Link from "next/link";
import { FOOTER_ITEMS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-900 bg-neutral-900 p-8 md:px-33 md:pt-10 md:pb-8">
      <div className="flex flex-col justify-between gap-7 lg:flex lg:gap-0">
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/icons/API Overload Logo.svg" alt="logo" width={60} height={60} />
            <h1 className="font-bold font-orbitron text-white text-base">Overload</h1>
          </Link>

          <p className="mt-1 text-[0.85rem] font-extralight text-gray-300/80">
            Keep{" "}
            <span className="rounded-sm bg-neon-green/10 px-[.21rem] py-[.16rem] text-neon-green/60 shadow-md">
              production
            </span>{" "}
            reliable, customers happy, and pagers silent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[0.85rem] font-extralight text-gray-300/80 md:grid-cols-4 md:gap-4">
          {FOOTER_ITEMS.map(({ id, title, href }) => (
            <Link key={id} href={href} className="hover:underline">
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 justify-between border-t border-dashed border-gray-600 pt-4 text-xs text-gray-500 md:mt-14 lg:flex">
        <p>
          © {new Date().getFullYear()} API Overload Software Inc or its affiliates. 169 Madison
          Avenue, #2096, New York, NY 10016
        </p>
        <p className="mt-2 lg:mt-0 text-gray-400 font-medium">
          Built with 💻, ☕ & 💖 by{" "}
          <Link
            href="https://github.com/laxmanrathod69"
            className="hover:underline hover:underline-offset-3"
          >
            Lucky
          </Link>
        </p>
      </div>
    </footer>
  );
};
