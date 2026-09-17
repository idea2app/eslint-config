import cspellPlugin from '@cspell/eslint-plugin';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export const JavaScriptDictionaries = ['bash', 'node', 'npm'];

export const JavaScript = defineConfig(
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  {
    name: 'idea2app/javascript/plugins',
    plugins: {
      '@cspell': cspellPlugin,
      'simple-import-sort': simpleImportSortPlugin
    }
  },
  { ...eslint.configs.recommended, name: 'idea2app/javascript/recommended' },
  {
    name: 'idea2app/javascript',
    rules: {
      'array-callback-return': [
        'error',
        { allowImplicit: true, checkForEach: true }
      ],
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'class-methods-use-this': [
        'warn',
        { enforceForClassFields: true }
      ],
      curly: ['error', 'multi-or-nest'],
      'default-param-last': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-empty-pattern': 'warn',
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'consistent-return': 'warn',
      'prefer-destructuring': ['error', { object: true, array: true }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            language: 'en',
            dictionaries: JavaScriptDictionaries
          }
        }
      ]
    }
  },
  eslintConfigPrettier
);

export default JavaScript;