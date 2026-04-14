import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        clearTimeout: 'readonly',
        setTimeout: 'readonly',
        DOMParser: 'readonly',
      },
    },
    rules: {
      'quotes': [
        'error',
        'single',
        { avoidEscape: true },
      ],
      'semi': ['error', 'never'],
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxEOF: 0 },
      ],
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'operator-linebreak': ['error', 'before'],
    },
  },
]
