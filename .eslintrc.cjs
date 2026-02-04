module.exports = {
  root: true,
  extends: ['@webdeveric/eslint-config-ts', 'plugin:import/recommended', 'plugin:import/typescript', 'prettier'],
  plugins: ['@stylistic'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './backend/tsconfig.json',
      './frontend/tsconfig.app.json',
      './frontend/tsconfig.node.json',
    ],
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.mts', '.cts', '.js', '.jsx', '.mjs', '.cjs', '.json'],
    'import/resolver': {
      typescript: {
        project: [
          './tsconfig.json',
          './backend/tsconfig.json',
          './frontend/tsconfig.app.json',
          './frontend/tsconfig.node.json',
        ],
      },
      node: {
        extensions: ['.ts', '.tsx', '.mts', '.cts', '.js', '.jsx', '.mjs', '.cjs'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
    },
  },
  rules: {
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          markers: ['!'],
          balanced: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './.eslintrc.cjs',
          './*.js',
          './*.jsx',
          './*.cjs',
          './*.mjs',
          './*.ts',
          './*.tsx',
          './*.cts',
          './*.mts',
          './**/__tests__/**/*.{ts,tsx}',
          './**/vitest.config.ts',
          './frontend/vite.config.ts',
        ],
        packageDir: ['.', './backend', './frontend'],
      },
    ],
    'import/no-relative-packages': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: false,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true,
        },
        distinctGroup: false,
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index'], 'type', 'object'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        warnOnUnassignedImports: true,
      },
    ],
    'sort-imports': 'off',
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
  },
  overrides: [
    {
      files: [
        './.eslintrc.cjs',
        './*.js',
        './*.jsx',
        './*.cjs',
        './*.mjs',
        './*.ts',
        './*.tsx',
        './*.cts',
        './*.mts',
        './**/__tests__/**/*.{ts,tsx}',
        './**/vitest.config.ts',
        './frontend/src/**/*.{ts,tsx}',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': ['off'],
      },
    },
    {
      files: ['frontend/**/*.{ts,tsx,js,jsx}'],
      env: {
        browser: true,
        node: false,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/no-absolute-path': 'off',
        'import/no-unresolved': ['error', { ignore: ['^/'] }],
      },
    },
  ],
};
