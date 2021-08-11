module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    "unicorn",
    "react-hooks" // we can use it since CRA depends on it
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  ignorePatterns: ["*.test.tsx", "*.test.ts", "*.test.js"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs

    "no-shadow": ["error", {builtinGlobals: false, hoist: "functions", allow: []}],

    "@typescript-eslint/explicit-function-return-type": ["warn", {allowExpressions: true}],

    // Since explicit-function-return-type will force us to use React.FC, no need in this rule
    "react/prop-types": 0,

    // properties should be in camelCase, but translation modules can start from pp_
    // "@typescript-eslint/camelcase": ["error", {allow: ["^pp_"]}],

    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",

    // Sorry, but double quotes are nicer
    // note you must disable the base rule as it can report incorrect errors
    // this rule is overridden by prettier!
    "@typescript-eslint/quotes": ["error", "double"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    "no-nested-ternary": "off", // this just disables basic rule in favor of unicorn
    "unicorn/no-nested-ternary": "error", // this allows to nest only one level
    "unicorn/no-abusive-eslint-disable": "error"
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
