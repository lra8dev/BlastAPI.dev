"use client";

import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";

export const JsonEditor = ({ setValue }: SetFormValueProp) => {
  const [jsonValue, setJsonValue] = useState<string>("{}");

  useEffect(() => {
    if (jsonValue) {
      setValue("body", jsonValue, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [jsonValue, setValue]);

  return (
    <div className="rounded-md overflow-hidden">
      <CodeMirror
        value={jsonValue}
        height="200px"
        theme={oneDark}
        extensions={[json()]}
        onChange={value => setJsonValue(value)}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
        }}
      />
    </div>
  );
};
