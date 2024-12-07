module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier",
    "next",
    "next/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./packages/*/tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "@/components/common",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/components/hooks",
            group: "internal",
            position: "before",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [],
      extends: [],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
          },
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
          },
          {
            selector: "parameter",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
            leadingUnderscore: "allow",
          },
          {
            selector: "property",
            format: null,
          },
          {
            selector: "enumMember",
            format: ["UPPER_CASE"],
          },
          {
            selector: "function",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: "import",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
          },
        ],
      },
    },
  ],
};
