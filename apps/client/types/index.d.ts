declare interface RootProps {
  children: Readonly<React.ReactNode>;
}

declare interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

declare interface FormProps {
  type: "TEST_API";
  className?: string;
}

declare interface FieldItems {
  id: string;
  name: string;
  type: "textarea" | "select" | "text" | "email" | "password" | string;
  placeholder?: string;
}

declare type RegisterFn = (name: string) => {
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: FocusEvent<any>) => void;
  ref: (instance: HTMLElement | null) => void;
};

declare interface GenerateFormProps {
  items: {
    id: string;
    label: string;
    name: string;
    type: string;
    placeholder: string;
  };
  form: UseFormReturn<any, any>;
}
