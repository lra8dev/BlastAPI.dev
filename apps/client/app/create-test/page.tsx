import { FormContainer } from "@/components/global/forms";

const CreateTest = () => {
  return (
    <div className="bg-dark-gray flex h-screen w-full flex-col items-center justify-center gap-5">
      <div className="flex w-[27rem] flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">Test API</h1>
        <p className="text-base font-medium text-white">
          Enter the details to test an API endpoint.
        </p>
      </div>
      <FormContainer type={"TEST_API"} className="flex w-[27rem] items-center justify-center" />
    </div>
  );
};

export default CreateTest;
