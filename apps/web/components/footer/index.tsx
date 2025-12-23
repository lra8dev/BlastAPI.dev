import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-900 bg-neutral-900 p-8 md:px-33 md:pt-10 md:pb-8">
      <div className="justify-between text-xs text-gray-500 lg:flex">
        <p>
          © {new Date().getFullYear()} BlastAPI Software Inc or its affiliates. 169 Madison Avenue,
          #2096, New York, NY 10016
        </p>
        <p className="mt-2 lg:mt-0 text-gray-400 font-medium">
          Built with 💻, ☕ & 💖 by{" "}
          <Link
            href="https://github.com/lra8dev"
            className="hover:underline hover:underline-offset-3 text-gray-200/80 hover:text-gray-200"
          >
            Lucky
          </Link>
        </p>
      </div>
    </footer>
  );
};
