const config = {
  // Sequential execution: if one command fails, subsequent commands won't run.
  "**/*.{js,jsx,ts,tsx}": [
    "pnpm run lint:eslint",
    "pnpm run format:check",
    // 'pnpm run format:fix',
    // 'pnpm exec prettier --write',
  ],

  "**/*.{css,scss}": [
    "pnpm run lint:stylelint",
    "pnpm run format:check",
    "pnpm run format:fix",
  ],

  "**/*.{md,mdx,html,json,yml,yaml}": ["pnpm run format:check"],

  // Explicitly ignore TypeScript declaration files.
  "**/*.d.ts": [],
};

export default config;
