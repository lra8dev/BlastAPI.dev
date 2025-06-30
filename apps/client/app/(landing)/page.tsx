import Link from "next/link";
import { Header } from "@/app/(landing)/_components/header";
import { Footer } from "@/components/global/footer";
import { Button } from "@/components/ui/button";
import { BGBeams } from "./_components/bg-beams";
import { FAQs } from "./_components/faq";

const Home = () => {
  return (
    <main className="size-full font-inter bg-dark">
      <BGBeams className="size-full">
        <Header />
        {/* WIP: add snapshots to the hero section */}
        <section className="flex flex-col items-center justify-center gap-5 h-screen px-4 md:px-16 lg:p-0">
          <div className="flex flex-col gap-3 px-7 xl:pt-41 md:px-9 lg:px-0">
            <h1 className="font-semibold text-gray-200 bg-clip-text text-center text-3xl xl:text-4xl md:font-bold lg:leading-12">
              The Complete Load Testing Platform
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base font-normal md:text-lg md:font-normal text-gray-300/72">
              API Overload is a scalable, flexible and easy-to-use platform that contains everything
              you need for production-grade load testing.
            </p>
          </div>
          <div className="flex gap-4 font-jetbrains">
            <Button
              variant="primary"
              className="font-light text-xs p-2 sm:text-sm sm:p-3 rounded bg-electric-blue/35 text-[#8cbff3] border border-electric-blue/20 brightness-85 hover:brightness-120 uppercase"
            >
              Get Started — Free
            </Button>
            <Button
              variant="primary"
              className="font-light text-xs p-2 rounded sm:p-3 sm:text-sm bg-dark-2 border border-neutral-700/20 brightness-85 hover:brightness-120 text-gray-300/95 uppercase"
            >
              Tolk to Sales
            </Button>
          </div>
          <p className="text-center text-sm font-normal text-neutral-400/90 max-md:grid">
            Need help with an internal PoC?{" "}
            <Link
              href="mailto:luckyyr18@gmail.com"
              className="cursor-pointer transition-all duration-300 ease-in underline hover:text-neutral-300"
            >
              Talk to an engineer
            </Link>
          </p>
        </section>
      </BGBeams>
      <FAQs />
      <Footer />
    </main>
  );
};

export default Home;
