"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { FieldValues, Path, PathValue } from "react-hook-form";
import { SetFormValueProps } from "@/app/newtest/_types";
import { setFormValue } from "@/app/newtest/_utils";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JsonRow } from "@/types";

export const JSONTable = <T extends FieldValues>({ setValue }: SetFormValueProps<T>) => {
  const [rows, setRows] = useState<JsonRow[]>([{ key: "", value: "" }]);
  const [isHover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const jsonString = rows.filter(
      row =>
        row.key.trim() !== "" ||
        row.value.trim() !== "" ||
        (row.description && row.description.trim() !== ""),
    );
    jsonString.forEach(row => {
      setFormValue({
        fieldName: "headers" as Path<T>,
        value: JSON.parse(JSON.stringify({ [row.key]: row.value })) as PathValue<T, Path<T>>,
        setValue,
      });
    });
  }, [rows, setValue]);

  const handleChange = (index: number, field: "key" | "value", value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);

    const isLastRow = index === rows.length - 1;
    const currentRowFilled = updatedRows[index].key || updatedRows[index].value;

    if (isLastRow && currentRowFilled) {
      setRows([...updatedRows, { key: "", value: "" }]);
    }
  };

  const handleRemove = (index: number) => {
    if ((index === 0 && rows.length === 1) || index === rows.length - 1) return;
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <Table className="border border-neutral-200 dark:border-neutral-700/40">
      <TableHeader>
        <TableRow className="border-neutral-200 dark:border-neutral-700/40">
          <TableHead>Key</TableHead>
          <TableHead className="border-x border-neutral-200 dark:border-neutral-700/40">
            Value
          </TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            className="border-neutral-200 dark:border-neutral-700/40"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <TableCell>
              <Input
                className="h-auto font-normal text-[.8125rem] text-neutral-600/90 dark:text-neutral-300/80 rounded placeholder:opacity-60 placeholder:text-xs border-none focus-visible:bg-white dark:focus-visible:bg-dark-2 focus-visible:ring focus-visible:ring-neutral-200/50 focus-visible:dark:ring-neutral-700/20 px-1 py-0.5 bg-transparent dark:bg-transparent shadow-none"
                placeholder="Key"
                value={row.key}
                onChange={e => handleChange(index, "key", e.target.value)}
              />
            </TableCell>
            <TableCell className="border-x border-neutral-200 dark:border-neutral-700/40">
              <Input
                className="h-auto font-normal text-[.8125rem] text-neutral-600/90 dark:text-neutral-300/80 rounded placeholder:opacity-60 placeholder:text-xs border-none focus-visible:bg-white dark:focus-visible:bg-dark-2 focus-visible:ring focus-visible:ring-neutral-200/50  focus-visible:dark:ring-neutral-700/20 px-1 py-0.5 bg-transparent dark:bg-transparent shadow-none"
                placeholder="Value"
                value={row.value}
                onChange={e => handleChange(index, "value", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <div className="flex items-center relative">
                <Input
                  className="h-auto font-normal text-[.8125rem] text-neutral-600/90 dark:text-neutral-300/80 rounded placeholder:opacity-60 placeholder:text-xs border-none focus-visible:bg-white dark:focus-visible:bg-dark-2 focus-visible:ring focus-visible:ring-neutral-200/50  focus-visible:dark:ring-neutral-700/20 px-1 py-0.5 bg-transparent dark:bg-transparent shadow-none"
                  placeholder="Description"
                />
                {isHover === index && index !== rows.length - 1 && (
                  <Trash2
                    aria-label="Delete"
                    className="absolute right-4 size-6.5 p-1.5 hover:bg-muted rounded-sm cursor-pointer"
                    onClick={() => handleRemove(index)}
                  />
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
