import { BottomGradient } from "@/components/bottom-gradient";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { onSignIn } from "../../_actions";
import { OAUTH_PROVIDERS } from "../../_constants";
import { OAuthSignInProprs } from "../../_types";

export const OAuthSignin = ({ className, callbackUrl, isLoading }: OAuthSignInProprs) => {
  return OAUTH_PROVIDERS.map(provider => (
    <Button
      key={provider.label}
      type="button"
      variant="primary"
      title={provider.label}
      disabled={isLoading}
      onClick={() => onSignIn({ provider: provider.name, callbackUrl })}
      className={cn(
        "w-full relative group/auth-btn group/gradient-btn dark:border-neutral-700/45 bg-dark-3",
        className,
      )}
    >
      <provider.icon aria-hidden="true" className="dark:text-neutral-300/80 text-black" />
      {provider.label}
      <BottomGradient />
    </Button>
  ));
};
