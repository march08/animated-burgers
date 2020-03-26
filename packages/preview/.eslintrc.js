// aliases
const softenedPackageAndAliasRules = {
  ignore: [
    "components",
    "helpers",
    "lib",
    "ls",
    "pages",
    "rdx",
    "config",
    "misc"
  ]
};

module.exports = {
  globals: {
    System: true
  },
  root: true,
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      experimentalDecorators: true
    },
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ["react", "flowtype"],
  rules: {
    semi: ["error", "never"],
    // quotes: ["error", "single"],
    "array-element-newline": ["error", "always"],
    "react/require-default-props": 1,
    "max-len": ["error", 110],
    "flowtype/require-valid-file-annotation": [0, "never"],
    "jsx-a11y/anchor-is-valid": 0, // fails at using <Link to=...
    "jsx-a11y/label-has-for": 0, // fails, react uses htmlFor
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-one-expression-per-line": false,
    "import/no-unresolved": ["error", softenedPackageAndAliasRules],
    "import/extensions": ["error", softenedPackageAndAliasRules],
    "import/prefer-default-export": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 1,
    "react/jsx-max-props-per-line": [1, { maximum: 1 }],
    "react/jsx-sort-props": 1,
    "react/jsx-curly-spacing": ["error", { when: "always" }],
    "import/extensions": [
      "error",
      "never",
      { ignorePackages: true, Record: "never" }
    ],
    camelcase: 0
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx", "**/__test__/*"],
      rules: {
        // testing local storage
        // https://www.npmjs.com/package/jest-localstorage-mock
        "no-underscore-dangle": 0
      }
    }
  ]
};
