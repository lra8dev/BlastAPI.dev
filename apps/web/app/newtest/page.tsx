import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { NewTestConfig } from "./_components/form";

const NewTestPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect(`/signin?callbackUrl=${encodeURIComponent("/newtest")}`);
  }

  return (
    <main className="w-full flex flex-col gap-3 md:gap-6 font-inter bg-white dark:bg-dark">
      <Header user={session.user} className="sticky top-0 z-50 bg-white" />
      <NewTestConfig userId={session.user.id} />
    </main>
  );
};

export default NewTestPage;
