import nextPlugin from '@next/eslint-plugin-next';

import TSX from 'eslint-idea2app-tsx';

export const NextJS = [
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
