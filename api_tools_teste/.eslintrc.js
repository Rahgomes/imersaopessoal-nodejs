module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "import/newline-after-import": "off",
    "import/first": "off",
  },
};
