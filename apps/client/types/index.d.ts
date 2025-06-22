declare interface RootProps {
  children: Readonly<React.ReactNode>;
}

declare interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  title: string;
  className?: string;
  variant?:
    | "primary"
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
}

declare interface FormProps {
  type: "TEST_CONFIG" | "AUTH_CONFIG";
}

declare type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

interface useFormValues {
  testRunId: string;
  url: string;
  method: HttpMethods;
  totalRequests: number;
  concurrency: number;
  duration: number;
  requestRate: number;
  headers?: string;
  body?: string;
}

interface FormFieldConfig {
  name: string;
  type: "textarea" | "select" | "text" | "email" | "password" | "number" | string;
  label?: string;
  placeholder?: string;
  options?: { id: string; method: HttpMethods }[]; // for select
}

declare interface GenerateFormProps {
  items: FormFieldConfig;
  formProps: {
    control: Control<useFormValues>;
    errors?: FieldErrors<useFormValues>;
  };
  className?: string;
}

declare interface RenderFieldProps {
  items: FormFieldConfig;
  control: Control<useFormValues>;
  className?: string;
}

declare interface SetFormValueProp {
  setValue: UseFormSetValue<useFormValues>;
}

declare type SliderNames = "totalRequests" | "concurrency" | "duration" | "requestRate";

declare interface CardProps {
  children: React.ReactElement;
  className?: string;
}

declare interface JsonRow {
  key: string;
  value: string;
  description?: string;
}

declare interface ChartAreaStepProps {
  totalRequests: number;
  duration: number;
  requestRate: number;
  concurrency: number;
}

declare type LoadTestsParams = { params: Promise<{ id: string }> };

declare interface TestTypeNavProps {
  test: string;
  setTest: (id: string) => void;
}
