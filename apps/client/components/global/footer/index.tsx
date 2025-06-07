import { FOOTER_ITEMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t border-gray-900 bg-neutral-900 p-8 md:px-28 md:pt-10 md:pb-8">
      <div className="grid grid-cols-1 justify-between gap-7 lg:flex lg:gap-0">
        <div>
          <figure>
            <Link href="/">
              <Image src="/assets/brand-loogo.svg" alt="logo" width={150} height={150} />
            </Link>
          </figure>
          <p className="mt-1 text-sm font-medium text-gray-400">
            Keep{" "}
            <span className="rounded-sm bg-green-900 px-[.21rem] py-[.16rem] text-green-400 shadow-md">
              production
            </span>{" "}
            reliable, customers happy, and pagers silent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm font-medium text-gray-400 md:grid-cols-4 md:gap-4">
          {FOOTER_ITEMS.map(({ id, title, href }) => (
            <Link key={id} href={href} className="hover:underline">
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 justify-between border-t border-dashed border-gray-600 pt-4 text-xs text-gray-500 md:mt-14 lg:flex">
        <p>
          © 2025 API Overload Software Inc or its affiliates. 169 Madison Avenue, #2096, New York,
          NY 10016
        </p>
        <p>XYZ™ is a trademark of XYZ Software Inc</p>
      </div>
    </div>
  );
};
