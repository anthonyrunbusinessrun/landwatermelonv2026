import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@next/next/no-page-custom-font": "off", // fonts loaded via CSS for Railway build compatibility
      "@next/next/no-img-element": "off", // allow img for external URLs with fallback
    },
  },
  {
    files: ["app/admin/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Admin pages use runtime DB data pre-Prisma-generate
    },
  },
]

export default eslintConfig
