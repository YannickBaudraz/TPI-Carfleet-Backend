module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    jsdoc: {
      ignorePrivate: true,
      tagNamePreference: {
        returns: 'return',
      },
    },
  },
  rules: {
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: ['MethodDefinition:not([accessibility="private"], [accessibility="protected"]) > FunctionExpression'],
        publicOnly: true,
        checkSetters: false,
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
        },
      },
    ],
    'jsdoc/require-description': [
      'error',
      {
        contexts: ['any'],
        descriptionStyle: 'body',
      },
    ],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-returns': [
      'warn',
      {
        checkGetters: false,
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],
    'lines-around-comment': ['error', { beforeBlockComment: false }],
    semi: ['error', 'always'],
    'max-len': [2, 120],
  },
};
