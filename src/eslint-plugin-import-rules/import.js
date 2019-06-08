const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx'
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(css|json|scss|svg)$',
    ],
  },

  rules: {
    'import/no-unresolved': [ERROR, { commonjs: true, caseSensitive: true }],
    'import/named': ERROR,
    'import/default': OFF,
    'import/namespace': OFF,
    'import/export': ERROR,
    'import/no-named-as-default': ERROR,
    'import/no-named-as-default-member': ERROR,
    'import/no-deprecated': OFF,
    'import/no-extraneous-dependencies': [ERROR, {
      devDependencies: [
        '**/__tests__/**', // jest
        '**/__mocks__/**', // jest
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/jest.config.js', // jest
        '**/jest.setup.js', // jest
        '**/webpack.config.js',
        '**/webpack.config.*.js'
      ],
      optionalDependencies: false,
    }],
    'import/no-mutable-exports': ERROR,
    'import/no-commonjs': OFF,
    'import/no-amd': ERROR,
    'import/no-nodejs-modules': OFF,
    'import/first': ERROR,
    'import/imports-first': OFF,
    'import/no-duplicates': ERROR,
    'import/no-namespace': OFF,
    'import/extensions': [ERROR, 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/order': [ERROR, { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': WARNING,
    'import/prefer-default-export': WARNING,
    'import/no-restricted-paths': OFF,
    'import/max-dependencies': [OFF],
    'import/no-absolute-path': ERROR,
    'import/no-dynamic-require': ERROR,
    'import/no-internal-modules': [OFF],
    'import/unambiguous': OFF,
    'import/no-webpack-loader-syntax': ERROR,
    'import/no-unassigned-import': OFF,
    'import/no-named-default': ERROR,
    'import/no-anonymous-default-export': [OFF, {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],
    'import/exports-last': OFF,
    'import/group-exports': OFF,
    'import/no-default-export': OFF,
    'import/no-named-export': OFF,
    'import/no-self-import': ERROR,
    'import/no-cycle': [ERROR, { maxDepth: Infinity }],
    'import/no-useless-path-segments': ERROR,
    'import/dynamic-import-chunkname': [OFF, {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    }],
    'import/no-relative-parent-imports': OFF,
    'import/no-unused-modules': [OFF, {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    }],
  },
};