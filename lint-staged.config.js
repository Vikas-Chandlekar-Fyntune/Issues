const config = {
  '**/*.{js,jsx,ts,tsx}': ['pnpm exec eslint --fix', 'pnpm exec prettier --write'],

  '**/*.{css,scss}': ['pnpm exec stylelint --fix', 'pnpm exec prettier --write'],

  '**/*.{md,mdx,html,json,yml,yaml}': ['pnpm exec prettier --write'],
};

export default config;
