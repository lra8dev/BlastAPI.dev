import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { NewTestConfig } from "./_components/form";

const NewTestPage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect(`/signin?callbackUrl=${encodeURIComponent("/newtest")}`);
  }

  return (
    <main className="w-full flex flex-col gap-3 md:gap-6 font-inter bg-white dark:bg-dark">
      <Header
        user={{
          ...session.user,
          id: session.user.id ?? "",
          email: session.user.email ?? "",
          name: session.user.name ?? null,
          image: session.user.image ?? null,
        }}
        className="sticky top-0 z-50 bg-white"
      />
      <NewTestConfig />
    </main>
  );
};

export default NewTestPage;
