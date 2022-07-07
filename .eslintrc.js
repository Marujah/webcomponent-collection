/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-empty': 0,
    'no-irregular-whitespace': 0,
  },
  ignorePatterns: ['**/stories/m2-qr-code/*.js'],
};
