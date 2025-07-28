import config from "../../eslint.config.mjs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const project = resolve(__dirname, "./tsconfig.json");

const serverConfig = config.map(entry =>
  typeof entry === "object" && entry.languageOptions?.parserOptions
    ? {
        ...entry,
        languageOptions: {
          ...entry.languageOptions,
          parserOptions: {
            ...entry.languageOptions.parserOptions,
            project: [project],
            tsconfigRootDir: __dirname,
          },
        },
      }
    : entry,
);

export default serverConfig;
