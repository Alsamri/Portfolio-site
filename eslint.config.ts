import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig: unknown[] = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
