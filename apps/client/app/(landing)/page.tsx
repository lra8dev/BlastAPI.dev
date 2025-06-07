import { Header } from "@/components/global/header";
import { BGBeams } from "./_components/bg-beams";
import { Footer } from "@/components/global/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FAQs } from "./_components/faq";

const Home = () => {
  return (
    <main className="font-inter bg-dark-gray h-full w-full">
      <BGBeams className="w-full md:min-h-screen">
        <Header />
        <section className="flex flex-col items-center justify-center gap-5 py-36 text-white sm:px-20 md:h-screen md:px-12 lg:p-0">
          <div className="grid gap-3 px-10 lg:p-0">
            <h1 className="font-orbitron relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl">
              The Complete Load Testing Platform
            </h1>
            <p className="relative z-10 mx-auto max-w-xl text-center text-base text-neutral-400 md:text-lg">
              API Overload is a scalable, flexible and easy-to-use platform that contains everything
              you need for production-grade load testing.
            </p>
          </div>
          <div className="mt-1">
            <Button className="text-sm font-light uppercase" variant="secondary">
              GET STARTED — FREE
            </Button>
          </div>
          <p className="relative z-10 text-center text-sm font-medium text-neutral-400 max-md:grid">
            Need help with an internal PoC?
            <Link
              href="mailto:luckyrathod1137@gmail.com"
              className="ml-1 cursor-pointer transition-all duration-300 ease-in hover:text-neutral-300 hover:underline"
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
