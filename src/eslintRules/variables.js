const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  rules: {
    'init-declarations': ERROR,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-restricted-globals': [ERROR, 'isFinite', 'isNaN'],
    'no-shadow': ERROR,
    'no-shadow-restricted-names': ERROR,
    'no-undef': ERROR,
    'no-undef-init': ERROR,
    'no-undefined': ERROR,
    'no-unused-vars': [ERROR, {vars: 'all', args: 'after-used', ignoreRestSiblings: true}],
    'no-use-before-define': [ERROR, {functions: false, classes: true, variables: false}]
  }
}
