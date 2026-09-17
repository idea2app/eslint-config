import cspellPlugin from '@cspell/eslint-plugin';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import type { Linter } from 'eslint';

export const TSX: Linter.Config[] = tsEslint.config(
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      react,
      jsxA11y,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSortPlugin,
      '@cspell': cspellPlugin
    }
  },
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  eslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tsEslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.es2026, ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false
      }
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'no-empty-pattern': 'warn',
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'consistent-return': 'warn',
      'prefer-destructuring': ['error', { object: true, array: true }],
      'react/no-unescaped-entities': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' }
      ],
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-sort-props': [
        'error',
        {
          reservedFirst: true,
          callbacksLast: true,
          noSortAlphabetically: true
        }
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'no-restricted-syntax': [
        'error',
        {
          selector: "TSPropertySignature[key.name='children']",
          message:
            'Please use PropsWithChildren<T> instead of defining children manually'
        }
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
        {
          blankLine: 'always',
          prev: '*',
          next: ['enum', 'interface', 'type']
        }
      ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            language: 'en',
            dictionaries: ['typescript', 'node', 'next', 'css', 'bash', 'npm']
          }
        }
      ]
    }
  },
  eslintConfigPrettier
) as Linter.Config[];

export default TSX;
