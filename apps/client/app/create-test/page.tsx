import { FormContainer } from "@/components/global/forms";
import { Header } from "@/components/global/header";

const CreateTest = () => {
  return (
    <section className="grid gap-2 md:gap-4 bg-dark">
      <Header />
      <FormContainer type="TEST_CONFIG" />
    </section>
  );
};

export default CreateTest;
