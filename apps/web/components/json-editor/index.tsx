"use client";

import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import { FieldValues, Path, PathValue } from "react-hook-form";
import { SetFormValueProps } from "@/app/newtest/_types";
import { setFormValue } from "@/app/newtest/_utils";

export const JsonEditor = <T extends FieldValues>({ setValue }: SetFormValueProps<T>) => {
  const [jsonValue, setJsonValue] = useState<Record<string, string>>({});

  useEffect(() => {
    if (jsonValue) {
      setFormValue({
        fieldName: "body" as Path<T>,
        value: jsonValue as PathValue<T, Path<T>>,
        setValue,
      });
    }
  }, [jsonValue, setValue]);

  return (
    <div className="rounded-md overflow-hidden">
      <CodeMirror
        value={JSON.stringify(jsonValue, null, 2)}
        height="200px"
        theme={oneDark}
        extensions={[json()]}
        onChange={value => setJsonValue(JSON.parse(value))}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
        }}
      />
    </div>
  );
};
