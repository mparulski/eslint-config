const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  rules: {
    'accessor-pairs': OFF,
    'array-callback-return': [ERROR, {allowImplicit: true}],
    'block-scoped-var': ERROR,
    'class-methods-use-this': OFF,
    complexity: OFF,
    'consistent-return': ERROR,
    curly: [ERROR, 'multi-line'],
    'default-case': [ERROR, {commentPattern: '^skip\\sdefault'}],
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, {allowKeywords: true}],
    eqeqeq: [ERROR, 'smart'],
    'guard-for-in': ERROR,
    'max-classes-per-file': [ERROR, 1],
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-case-declarations': ERROR,
    'no-div-regex': OFF,
    'no-else-return': [ERROR, {allowElseIf: false}],
    'no-empty-function': ERROR,
    'no-empty-pattern': ERROR,
    'no-eq-null': OFF,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': ERROR,
    'no-native-reassign': OFF,
    'no-implicit-coercion': [ERROR, {boolean: false, number: true, string: true, allow: []}],
    'no-implicit-globals': OFF,
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF,
    'no-iterator': ERROR,
    'no-labels': [ERROR, {allowLoop: false, allowSwitch: false}],
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-magic-numbers': [OFF, {ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: true}],
    'no-multi-spaces': [ERROR, {ignoreEOLComments: false}],
    'no-multi-str': ERROR,
    'no-new': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-octal': ERROR,
    'no-octal-escape': ERROR,
    'no-param-reassign': [
      ERROR,
      {
        props: true
      }
    ],
    'no-proto': ERROR,
    'no-redeclare': ERROR,
    'no-restricted-properties': [
      ERROR,
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'no-return-assign': [ERROR, 'always'],
    'no-return-await': OFF,
    'no-script-url': ERROR,
    'no-self-assign': [ERROR, {props: false}],
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': OFF,
    'no-unused-expressions': ERROR,
    'no-unused-labels': ERROR,
    'no-useless-call': OFF,
    'no-useless-catch': OFF,
    'no-useless-concat': ERROR,
    'no-useless-escape': ERROR,
    'no-useless-return': ERROR,
    'no-void': OFF,
    'no-warning-comments': [ERROR, {terms: ['todo', 'fixme', 'any other term'], location: 'start'}],
    'no-with': ERROR,
    'prefer-promise-reject-errors': [ERROR, {allowEmptyReject: true}],
    radix: ERROR,
    'require-await': WARNING,
    'require-unicode-regexp': OFF,
    'vars-on-top': ERROR,
    'wrap-iife': [ERROR, 'inside', {functionPrototypeMethods: true}],
    yoda: ERROR
  }
}
