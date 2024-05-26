/* eslint-disable local-rules/no-flowbite */
"use strict";

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "tailwindcss", "eslint-plugin-local-rules"],
  rules: {
    // Enable custom rule
    "local-rules/no-flowbite": "error",

    //  Enable other rules
    "react/prop-types": "off",
    "jsx-a11y/heading-has-content": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "tailwindcss/no-custom-classname": [
      "warn",
      {
        whitelist: [
          "text-md",
          "radix\\-([0-z]+(\\-[0-z]+)*)",
          "animate\\-([0-z]+(\\-[0-z]+)*)",
          "animation\\-([0-z]+(\\-[0-z]+)*)",
          // 'custom\\-([0-z]+(\\-[0-z]+)*)',
          // "([0-z]+)\\-destructive",
        ],
      },
    ],
  },
  reportUnusedDisableDirectives: true,
};

module.exports = config;
