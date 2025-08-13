"use client";

import { useCallback } from "react";
import { useNavigation } from "../../_hooks";
import { FilterBarProps } from "../../_types";
import { primaryFilterConfig } from "../../_utils";
import { DateFilter } from "../filter-by-date";
import { NotesFilter } from "../filter-by-notes";
import { PrimaryFilters } from "../primary-filters";

export const FilterBar = ({ data }: FilterBarProps) => {
  const { hasSearchParam, updateSearchParam } = useNavigation();

  const insertFilterData = useCallback(() => {
    const options = data?.reduce(
      (acc, test) => {
        acc[test.testConfig.name] = test;
        return acc;
      },
      {} as Record<string, (typeof data)[0]>,
    );

    return primaryFilterConfig({ ...options });
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
