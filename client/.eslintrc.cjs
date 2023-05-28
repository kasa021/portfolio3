module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "simple-import-sort/imports": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
  },
};
