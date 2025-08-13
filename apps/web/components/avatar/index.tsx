import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { UserAvatarProps } from "@/types";

export const UserAvatar = ({ url, fallbackChar, className }: UserAvatarProps) => (
  <Avatar className={cn(className)}>
    <AvatarImage src={url} />
    <AvatarFallback>{fallbackChar}</AvatarFallback>
  </Avatar>
);
