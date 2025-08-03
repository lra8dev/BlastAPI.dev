"use client";

import { useCallback } from "react";
import { UserAvatar } from "@/components/avatar";
import { generateFallbackChars } from "@/utils/generate-fallback-char";
import { useNavigation } from "../../_hooks";
import { TestHistories } from "../../_types";
import { primaryFilterConfig } from "../../_utils";
import { DateFilter } from "../filter-by-date";
import { NotesFilter } from "../filter-by-notes";
import { PrimaryFilters } from "../primary-filters";

export const FilterBar = ({ data }: TestHistories) => {
  const { hasSearchParam, updateSearchParam } = useNavigation();

  const insertFilterData = useCallback(() => {
    const testsOptions = data.map(test => ({ name: test.testConfig.name }));

    const usersOptions = data.map(({ user }) => ({
      name: user.name ?? user.email,
      children: (
        <UserAvatar
          url={user.image ?? undefined}
          className="size-5.5"
          fallbackChar={generateFallbackChars(user.name ?? user.email)}
        />
      ),
    }));

    return primaryFilterConfig({ testsOptions, usersOptions });
  }, [data]);

  return (
    <>
      <PrimaryFilters
        options={insertFilterData()}
        hasSearchParam={hasSearchParam}
        updateSearchParam={updateSearchParam}
      />
      <DateFilter hasSearchParam={hasSearchParam} updateSearchParam={updateSearchParam} />
      <NotesFilter hasSearchParam={hasSearchParam} updateSearchParam={updateSearchParam} />
    </>
  );
};
