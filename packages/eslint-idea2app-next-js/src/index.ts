import nextPlugin from '@next/eslint-plugin-next';

import TSX from 'eslint-idea2app-tsx';
import type { Linter } from 'eslint';

export const NextJS: Linter.Config[] = [
  ...TSX,
  {
    name: 'idea2app/next-js',
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-sync-scripts': 'warn'
    }
  }
];

export default NextJS;
