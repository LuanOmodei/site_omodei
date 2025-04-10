import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Adicionando a regra para permitir variáveis não utilizadas
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Desativa a regra de variáveis não usadas
    },
  },
];

export default eslintConfig;
