import stylistic from '@stylistic/eslint-plugin';
import type { ESLint } from 'eslint';
import { defineConfig } from 'eslint/config';
import JavaScript, { JavaScriptDictionaries } from 'eslint-idea2app-js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

type FlatConfig = Parameters<typeof defineConfig>[number];

export const TSXDictionaries = [
  'css',
  'typescript',
  ...JavaScriptDictionaries
];

export const TSX = defineConfig(
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      react,
      jsxA11y: jsxA11y as ESLint.Plugin,
      '@stylistic': stylistic
    }
  },
  ...JavaScript,
  jsxA11y.flatConfigs.recommended as FlatConfig,
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
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            language: 'en',
            dictionaries: TSXDictionaries
          }
        }
      ]
    }
  }
);

export default TSX;
