"use client";

import { Globe, LogOut, Monitor, Moon, Settings, Sun } from "lucide-react";
import { v4 } from "uuid";
import { PrimaryBtn } from "@/components/global/buttons/primary";
import { UserMenuAction } from "@/constants";

// TODO: implement all actions of each object, later.

export const USER_PROFILE_ITEMS: UserProfileAction[] = [
  {
    id: v4(),
    children: (
      <PrimaryBtn title="Edit profile" className="font-medium text-gray-300/80 text-[0.8125rem]">
        <Settings className="size-[0.8125rem]" />
      </PrimaryBtn>
    ),
    actionId: UserMenuAction.EditProfile,
  },

  {
    id: v4(),
    children: (
      <PrimaryBtn title="Time zone" className="font-medium text-gray-300/80 text-[0.8125rem]">
        <Globe className="size-[0.8125rem]" />
      </PrimaryBtn>
    ),

    subItems: [
      {
        id: v4(),
        children: (
          <PrimaryBtn title="Local time" className="font-medium text-gray-300/80 text-[0.8125rem]">
            {""}
          </PrimaryBtn>
        ),
        actionId: UserMenuAction.LocalTime,
      },

      {
        id: v4(),
        children: (
          <PrimaryBtn title="UTC" className="font-medium text-gray-300/80 text-[0.8125rem]">
            {""}
          </PrimaryBtn>
        ),
        actionId: UserMenuAction.UTCTime,
      },
    ],
    itemShortcut: "L time",
  },

  {
    id: v4(),
    children: (
      <PrimaryBtn title="Theme" className="font-medium text-gray-300/80 text-[0.8125rem]">
        <Monitor className="size-[0.8125rem]" />
      </PrimaryBtn>
    ),

    subItems: [
      {
        id: v4(),
        children: (
          <PrimaryBtn title="System" className="font-medium text-gray-300/80 text-[0.8125rem]">
            <Monitor className="size-[0.8125rem]" />
          </PrimaryBtn>
        ),
        actionId: UserMenuAction.SystemTheme,
      },

      {
        id: v4(),
        children: (
          <PrimaryBtn title="Light" className="font-medium text-gray-300/80 text-[0.8125rem]">
            <Sun className="size-[0.8125rem]" />
          </PrimaryBtn>
        ),
        actionId: UserMenuAction.LightTheme,
      },

      {
        id: v4(),
        children: (
          <PrimaryBtn title="Dark" className="font-medium text-gray-300/80 text-[0.8125rem]">
            <Moon className="size-[0.8125rem]" />
          </PrimaryBtn>
        ),
        actionId: UserMenuAction.DarkTheme,
      },
    ],
    itemShortcut: "System",
  },

  {
    id: v4(),
    children: (
      <PrimaryBtn title="Sign out" className="font-medium text-gray-300/80 text-[0.8125rem]">
        <LogOut className="size-[0.8125rem]" />
      </PrimaryBtn>
    ),
    actionId: UserMenuAction.SignOut,
    isSeparator: true,
  },
];
