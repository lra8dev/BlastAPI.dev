import config from "../../eslint.config.mjs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const project = path.resolve(__dirname, "./tsconfig.json");

const clientConfig = config.map(entry => {
  if (typeof entry === "object" && entry.languageOptions?.parserOptions) {
    return {
      ...entry,
      languageOptions: {
        ...entry.languageOptions,
        parserOptions: {
          ...entry.languageOptions.parserOptions,
          project: [project],
          tsconfigRootDir: __dirname,
        },
      },
    };
  }
  return entry;
});

export default clientConfig;
