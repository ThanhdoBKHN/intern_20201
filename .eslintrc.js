const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-expressions': 'off',
    'func-names': 'off',
  },
  plugins: ['prettier'],
};
