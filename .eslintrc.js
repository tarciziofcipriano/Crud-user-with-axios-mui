module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "@typescript-eslint",
    "prettier",
    "import-helpers",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-extra-boolean-cast": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.{test,spec}.{js,jsx,ts,tsx}",
          "src/test/setup.ts",
          "src/test/test-utils.tsx",
        ],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    ],
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "no-console": "off",
    "consistent-return": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/require-default-props": "off",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "no-nested-ternary": "off",
    "linebreak-style": ["error", "unix"],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
