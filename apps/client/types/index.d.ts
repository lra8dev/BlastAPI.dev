declare interface RootProps {
  children: Readonly<React.ReactNode>;
}

declare interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

declare interface ButtonProps {
  children: React.ReactElement;
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
    | null
    | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}
