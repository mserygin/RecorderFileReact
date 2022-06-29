const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react"],
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier",
  ],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    '@typescript-eslint/no-empty-function': 'off',

    "react/no-direct-mutation-state": "off",
    "react/no-deprecated": "off",
    "react/no-string-refs": "off",
    "react/require-render-return": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/prop-types": "off", //
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
