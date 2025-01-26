import perfectionist from 'eslint-plugin-perfectionist'

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    perfectionist.configs['recommended-alphabetical'],
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/default': 0,
    'import/order': [
      2,
      {
        groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
}
