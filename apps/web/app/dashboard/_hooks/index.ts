"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useNavigation = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateSearchParam = useCallback(
    (key: string, value?: string | boolean) => {
      const params = new URLSearchParams(searchParams);

      if (value === undefined || value === false) {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace],
  );

  const hasSearchParam = useCallback(
    (name: string, value?: string) => {
      return value ? searchParams.has(name, value) : searchParams.has(name);
    },
    [searchParams],
  );

  const getSearchParam = useCallback(
    (name: string) => {
      return name ? searchParams.get(name) : null;
    },
    [searchParams],
  );

  return { hasSearchParam, updateSearchParam, getSearchParam };
};
