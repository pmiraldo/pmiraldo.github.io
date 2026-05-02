// SPDX-FileCopyrightText: 2026 Pedro Miraldo
//
// SPDX-License-Identifier: MIT

const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["app/js/**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
      },
    },
  },
];
