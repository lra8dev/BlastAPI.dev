import { BackgroundBeams } from "@/components/ui/background-beams";
export const BGBeams = ({ children, className }: ChildrenProps) => {
  return (
    <div className={`relative bg-neutral-950 antialiased ${className}`}>
      <BackgroundBeams />
      {children}
    </div>
  );
};
