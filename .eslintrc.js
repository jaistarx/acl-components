module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'unused-imports'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'error',
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/no-restricted-types': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    'react/display-name': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
  ignorePatterns: ['build/', 'dist/', 'node_modules/', 'src/c-test/'],
};
