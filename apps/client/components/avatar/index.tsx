import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const UserAvatar = ({ url, fallbackChar, alt, className }: UserAvatarProps) => (
  <Avatar
    className={cn(
      "font-inter font-medium border rounded-full text-[0.8125rem] text-gray-300/80 hover:border-neutral-700",
      className,
    )}
  >
    <AvatarImage src={url} alt={alt} />
    <AvatarFallback>{fallbackChar}</AvatarFallback>
  </Avatar>
);
