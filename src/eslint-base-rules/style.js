const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  rules: {
    'array-bracket-newline': OFF,
    'array-bracket-spacing': [ERROR, 'never'],
    'array-element-newline': OFF,
    'block-spacing': [ERROR, 'always'],
    'brace-style': [ERROR, '1tbs', {allowSingleLine: true}],
    camelcase: [ERROR, {properties: 'always'}],
    'capitalized-comments': OFF,
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline'
      }
    ],
    'comma-spacing': [ERROR, {before: false, after: true}],
    'comma-style': [
      ERROR,
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false
        }
      }
    ],
    'computed-property-spacing': [ERROR, 'never'],
    'consistent-this': OFF,
    'eol-last': [ERROR, 'always'],
    'func-call-spacing': [ERROR, 'never'],
    'func-call-spacing': [ERROR, 'never'],
    'func-name-matching': [OFF, 'always', {includeCommonJSModuleExports: false}],
    'func-names': WARNING,
    'func-style': OFF,
    'function-paren-newline': [ERROR, 'consistent'],
    'id-blacklist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    'implicit-arrow-linebreak': [ERROR, 'beside'],
    indent: [
      ERROR,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        ignoreComments: true
      }
    ],
    'jsx-quotes': [OFF, 'prefer-double'],
    'key-spacing': [ERROR, {beforeColon: false, afterColon: true}],
    'keyword-spacing': [
      ERROR,
      {
        before: true,
        after: true,
        overrides: {
          return: {after: true},
          throw: {after: true},
          case: {after: true}
        }
      }
    ],
    'line-comment-position': OFF,
    'linebreak-style': [ERROR, 'unix'],
    'lines-between-class-members': [ERROR, 'always', {exceptAfterSingleLine: false}],
    'lines-around-comment': OFF,
    'max-depth': [WARNING, 3],
    'max-len': [
      ERROR,
      180,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'max-lines': OFF,
    'max-lines-per-function': OFF,
    'max-nested-callbacks': OFF,
    'max-params': [WARNING, 2],
    'max-statements': OFF,
    'max-statements-per-line': OFF,
    'multiline-comment-style': OFF,
    'multiline-ternary': OFF,
    'new-cap': [
      ERROR,
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],
    'new-parens': ERROR,
    'newline-per-chained-call': [ERROR, {ignoreChainWithDepth: 4}],
    'no-array-constructor': ERROR,
    'no-continue': ERROR,
    'no-inline-comments': OFF,
    'no-lonely-if': ERROR,
    'no-mixed-operators': [
      ERROR,
      {
        groups: [['+', '-', '*', '/', '%', '**'], ['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']],
        allowSamePrecedence: false
      }
    ],
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multi-assign': ERROR,
    'no-multiple-empty-lines': [ERROR, {max: 1, maxEOF: 1}],
    'no-negated-condition': OFF,
    'no-nested-ternary': ERROR,
    'no-new-object': ERROR,
    'no-plusplus': [ERROR, {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': [
      ERROR,
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain is forbidden. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are forbidden.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode.'
      }
    ],
    'no-tabs': ERROR,
    'no-ternary': OFF,
    'no-trailing-spaces': [
      ERROR,
      {
        skipBlankLines: false,
        ignoreComments: false
      }
    ],
    'no-underscore-dangle': [
      ERROR,
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true
      }
    ],
    'no-unneeded-ternary': [ERROR, {defaultAssignment: false}],
    'no-whitespace-before-property': ERROR,
    'nonblock-statement-body-position': [ERROR, 'below', {overrides: {}}],
    'object-curly-spacing': [ERROR, 'always'],
    'object-curly-newline': [
      ERROR,
      {
        ObjectExpression: {minProperties: 4, multiline: true, consistent: true},
        ObjectPattern: {minProperties: 4, multiline: true, consistent: true},
        ImportDeclaration: {minProperties: 4, multiline: true, consistent: true},
        ExportDeclaration: {minProperties: 4, multiline: true, consistent: true}
      }
    ],
    'object-property-newline': [ERROR, {allowAllPropertiesOnSameLine: true}],
    'one-var': [ERROR, 'never'],
    'one-var-declaration-per-line': [ERROR, 'always'],
    'operator-assignment': [ERROR, 'always'],
    'operator-linebreak': [ERROR, 'before', {overrides: {'=': 'none'}}],
    'padded-blocks': [ERROR, {blocks: 'never', classes: 'never', switches: 'never'}],
    'padding-line-between-statements': OFF,
    'prefer-object-spread': OFF,
    'quote-props': [ERROR, 'as-needed', {keywords: false, unnecessary: true, numbers: false}],
    quotes: [ERROR, 'single', {avoidEscape: true}],
    'require-jsdoc': OFF,
    semi: [ERROR, 'never'],
    'semi-spacing': [ERROR, {before: false, after: true}],
    'semi-style': [ERROR, 'last'],
    'sort-keys': OFF,
    'sort-vars': OFF,
    'space-before-blocks': ERROR,
    'space-before-function-paren': [
      ERROR,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': ERROR,
    'space-unary-ops': [
      ERROR,
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],
    'spaced-comment': [
      ERROR,
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!']
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true
        }
      }
    ],
    'switch-colon-spacing': [ERROR, {after: true, before: false}],
    'template-tag-spacing': [ERROR, 'never'],
    'unicode-bom': [ERROR, 'never'],
    'wrap-regex': OFF
  }
}
