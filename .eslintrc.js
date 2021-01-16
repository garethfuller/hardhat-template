module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: ['warn', 'never'],
    camelcase: 'off',
    curly: 'off',
    'no-console': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/namespace': ['error', { allowComputed: true }]
  }
}
