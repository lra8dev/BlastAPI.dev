"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { UserMenuAction } from "@/constants";

export const useUserMenuActions = () => {
  const { setTheme } = useTheme();
  const router = useRouter();

  const handleAction = useCallback(
    (actionId: UserMenuAction) => {
      switch (actionId) {
        case UserMenuAction.EditProfile:
          router.push("/profile/edit");
          break;

        case UserMenuAction.SignOut:
          console.log("Signing out user...");
          break;

        case UserMenuAction.SystemTheme:
          setTheme("system");
          break;

        case UserMenuAction.LightTheme:
          setTheme("light");
          break;

        case UserMenuAction.DarkTheme:
          setTheme("dark");
          break;

        case UserMenuAction.LocalTime:
          console.log("local time");
          break;

        case UserMenuAction.UTCTime:
          console.log("utc time");
          break;

        default:
          console.log(`Unhandled user action: ${actionId}`);
      }
    },
    [setTheme, router],
  );

  return { handleAction };
};
