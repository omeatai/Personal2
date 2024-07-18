import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: ["prettier"],
    extends: ["prettier"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
