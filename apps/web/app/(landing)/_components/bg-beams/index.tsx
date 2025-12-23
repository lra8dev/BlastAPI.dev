import { BackgroundBeams } from "@/components/ui/background-beams";
import { LayoutProps } from "@/types";
export const BGBeams = ({ children, className }: LayoutProps) => {
  return (
    <div className={`relative bg-neutral-950 antialiased ${className}`}>
      <BackgroundBeams />
      {children}
    </div>
  );
};
