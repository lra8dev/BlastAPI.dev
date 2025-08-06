import { JsonEditor } from "@/components/json-editor";
import { JSONTable } from "@/components/json-table";
import { FieldConfig } from "@/types/form";
import { CustSelectOption } from "@/types/general";

export const HTTP_METHODS: CustSelectOption[] = [
  { value: "GET", label: "GET" },
  { value: "POST", label: "POST" },
  { value: "PUT", label: "PUT" },
  { value: "DELETE", label: "DELETE" },
];

export const REQUEST_CONFIG_ITEMS: FieldConfig[] = [
  {
    name: "url",
    type: "url",
    required: true,
    placeholder: "Enter URL: https://api.example.com",
  },
];

export const REQUEST_CONFIG_TABS = [
  {
    name: "Headers",
    children: JSONTable,
  },
  {
    name: "Body",
    children: JsonEditor,
  },
];

export const LOAD_CONFIG: FieldConfig[] = [
  {
    name: "totalRequests",
    type: "number",
    label: "Total Requests",
    placeholder: "10",
  },
  {
    name: "duration",
    type: "number",
    label: "Duration (s)",
    placeholder: "10",
  },
  {
    name: "concurrency",
    type: "number",
    label: "Concurrency",
    placeholder: "10",
  },
  {
    name: "requestRate",
    type: "number",
    label: "Request Rate",
    placeholder: "10",
  },
];

export const METADATA_CONFIG: FieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Test Name",
    placeholder: "Enter test name",
  },
  {
    name: "region",
    type: "text", // WIP: use select-box instead.
    label: "Test Region",
    placeholder: "Choose nearest region",
  },
];
