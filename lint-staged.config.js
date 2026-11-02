const config = {
  // Sequential execution: if one command fails, subsequent commands won't run.
  '**/*.{js,jsx,ts,tsx}': [
    'pnpm run lint:eslint',
    'prettier --write',
    // 'pnpm run format:fix',
    // 'pnpm exec prettier --write',
  ],

  '**/*.{css,scss}': ['pnpm run lint:stylelint', 'prettier --write'],

  '**/*.{md,mdx,html,json,yml,yaml}': ['prettier --write'],

  // Explicitly ignore TypeScript declaration files.
  '**/*.d.ts': [],
};

export default config;
