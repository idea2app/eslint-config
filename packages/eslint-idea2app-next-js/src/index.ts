import nextPlugin from '@next/eslint-plugin-next';
import type { Linter } from 'eslint';
import TSX, { TSXDictionaries } from 'eslint-idea2app-tsx';

export const NextJSDictionaries = [...TSXDictionaries, 'next'];

export const NextJS: Linter.Config[] = [
  ...TSX,
  {
    name: 'idea2app/next-js',
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-sync-scripts': 'warn',
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            language: 'en',
            dictionaries: NextJSDictionaries
          }
        }
      ]
    }
  }
];

export default NextJS;
