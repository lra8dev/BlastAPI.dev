"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const JSONTable = ({ setValue }: SetFormValueProp) => {
  const [rows, setRows] = useState<JsonRow[]>([{ key: "", value: "" }]);
  const [isHover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const jsonString = rows
      .filter(row => row.key.trim() !== "" || row.value.trim() !== "")
      .map(row => [row.key, row.value]);

    setValue("headers", jsonString, { shouldValidate: true, shouldDirty: true });
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
    <Table className="w-full border border-neutral-700">
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="border border-neutral-700 text-gray-300/70">Key</TableHead>
          <TableHead className="border border-neutral-700 text-gray-300/70">Value</TableHead>
          <TableHead className="border border-neutral-700 text-gray-300/70">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            className="text-gray-300 hover:bg-transparent border-none"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <TableCell className="border border-neutral-700">
              <Input
                className="rounded-xs border-none focus-visible:ring focus-visible:ring-neutral-700/40 p-0 h-fit"
                placeholder="Key"
                value={row.key}
                onChange={e => handleChange(index, "key", e.target.value)}
              />
            </TableCell>
            <TableCell className="border border-neutral-700">
              <Input
                className="rounded-xs border-none focus-visible:ring focus-visible:ring-neutral-700/40 p-0 h-fit"
                placeholder="Value"
                value={row.value}
                onChange={e => handleChange(index, "value", e.target.value)}
              />
            </TableCell>
            <TableCell className="border border-neutral-700">
              <div className="flex items-center relative">
                <Input
                  className="h-fit rounded-xs border-none focus-visible:ring focus-visible:ring-neutral-700/40 p-0"
                  placeholder="Description"
                />
                {isHover === index && index !== rows.length - 1 && (
                  <Trash2
                    aria-label="Delete"
                    className="absolute right-4 p-1 hover:bg-neutral-700 rounded-sm cursor-pointer"
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
