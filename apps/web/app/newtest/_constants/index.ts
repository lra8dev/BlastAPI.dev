import { HttpMethod } from "@blastapi/db/types";
import { JsonEditor } from "@/components/json-editor";
import { JSONTable } from "@/components/json-table";
import { CustSelectOption, FieldConfig } from "@/types";

interface LoadConfig extends FieldConfig {
  max: number;
}

export const HTTP_METHODS: CustSelectOption[] = Object.keys(HttpMethod).map(key => ({
  value: key,
  label: key,
}));

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

export const LOAD_CONFIG: LoadConfig[] = [
  {
    name: "vusers",
    type: "number",
    label: "Virtual Users",
    max: 1000,
    placeholder: "100",
  },
  {
    name: "duration",
    type: "number",
    label: "Duration (s)",
    max: 480,
    placeholder: "300",
  },
  {
    name: "rampUp",
    type: "number",
    label: "Ramp Up Time (s)",
    max: 300,
    placeholder: "60",
  },
  {
    name: "rampUpSteps",
    type: "number",
    label: "Ramp Up Steps",
    max: 50,
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
