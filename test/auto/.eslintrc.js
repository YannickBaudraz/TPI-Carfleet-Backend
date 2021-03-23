module.exports = {
  extends: ['../../.eslintrc.js'],
  overrides: [
    {
      files: ['./**/*.test.ts', './*.js'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
      env: {
        jest: true,
      },
    },
  ],
};
