module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    JSX: true,
    NodeJS: true,
  },
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react', ['babel-preset-react-app', false]],
    },
  },
  ignorePatterns: ['node_modules/', 'config/', 'dependencies/*'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-anonymous-default-export': 'off',
    'testing-library/no-unnecessary-act': 'off',
    'react/jsx-boolean-value': 2,
    curly: 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      plugins: ['import'],
      files: '*',
      excludedFiles: ['*.d.ts', 'App.tsx'],
      rules: {
        'import/no-default-export': 'error',
      },
    },
  ],
};
