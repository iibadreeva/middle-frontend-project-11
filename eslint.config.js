import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error'
    }
  }
];
