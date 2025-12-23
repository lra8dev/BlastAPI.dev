import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BGBeams } from "./_components/bg-beams";
import { FAQs } from "./_components/faq";
import { Header } from "./_components/header";

const Home = () => {
  return (
    <main className="w-full h-screen font-inter bg-dark">
      <BGBeams className="h-full">
        <Header />
        <section className="flex flex-col items-center justify-center gap-5 h-full px-4 md:px-16 lg:p-0">
          <div className="flex flex-col gap-3 px-7 md:px-9 lg:px-0 pt-16">
            <h1 className="font-semibold text-gray-200 bg-clip-text text-center text-3xl xl:text-4xl md:font-bold lg:leading-12">
              The Complete Load Testing Platform
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base font-normal md:text-lg md:font-normal text-gray-300/72">
              BlastAPI is a scalable, flexible and easy-to-use platform that contains everything you
              need for production-grade load testing.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap font-mono">
            <Link href="/newtest">
              <Button
                size="xs"
                variant="primary"
                className="font-medium text-xs bg-electric-blue/35 px-3 py-2 text-[#8cbff3] border-electric-blue/20 brightness-85 hover:brightness-120 uppercase tracking-widest"
              >
                Start Testing — Free
              </Button>
            </Link>
            <Button
              size="xs"
              variant="primary"
              className="font-medium text-xs bg-dark-3 px-3 py-2 border-neutral-700/20 brightness-85 hover:brightness-120 text-gray-300/95 uppercase tracking-widest"
            >
              Talk to Sales
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
