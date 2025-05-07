import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gta-pink': '#ff0080',
        'gta-purple': '#7928ca',
      },
    },
  },
  plugins: [],
};

export default config;