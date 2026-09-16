import nextPlugin from '@next/eslint-plugin-next';

import jsx from 'eslint-idea2app-jsx';

const nextJs = [
  ...jsx,
  {
    name: 'idea2app/next-js',
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-sync-scripts': 'warn'
    }
  }
];

export default nextJs;
export { nextJs };
