const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    'arrow-body-style': [ERROR, 'as-needed', {requireReturnForObjectLiteral: false}],
    'arrow-parens': [ERROR, 'as-needed', {requireForBlockBody: true}],
    'arrow-spacing': [ERROR, {before: true, after: true}],
    'constructor-super': ERROR,
    'generator-star-spacing': [ERROR, {before: false, after: true}],
    'no-class-assign': ERROR,
    'no-confusing-arrow': [ERROR, {allowParens: true}],
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': OFF,
    'no-new-symbol': ERROR,
    'no-restricted-imports': OFF,
    'no-this-before-super': ERROR,
    'no-useless-computed-key': ERROR,
    'no-useless-constructor': ERROR,
    'no-useless-rename': [ERROR, {ignoreDestructuring: false, ignoreImport: false, ignoreExport: false}],
    'no-var': ERROR,
    'object-shorthand': [ERROR, 'always', {ignoreConstructors: false, avoidQuotes: true}],
    'prefer-arrow-callback': [ERROR, {allowNamedFunctions: false, allowUnboundThis: true}],
    'prefer-const': [ERROR, {destructuring: 'any', ignoreReadBeforeAssign: true}],
    'prefer-destructuring': [
      ERROR,
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-numeric-literals': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': ERROR,
    'require-yield': ERROR,
    'rest-spread-spacing': [ERROR, 'never'],
    'sort-imports': OFF,
    'symbol-description': OFF,
    'template-curly-spacing': ERROR,
    'yield-star-spacing': [ERROR, 'after']
  }
}
