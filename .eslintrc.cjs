module.exports = {
  root: true,

  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': ['eslint:recommended', 'prettier'],
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-unused-vars': 'warn',
  },
};
