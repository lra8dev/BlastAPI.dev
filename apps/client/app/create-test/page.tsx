import { FormContainer } from "@/components/global/forms";
import { Header } from "@/components/global/header";

const CreateTest = () => {
  return (
    <section className="flex flex-col gap-3 md:gap-6 bg-dark">
      <Header className="md:sticky top-0 z-50" />
      <FormContainer type="TEST_CONFIG" />
    </section>
  );
};

export default CreateTest;
