import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      ...colors
    },
    borderWidth: {
      '1': '1px',
      '3': '3px'
    },
    screens: {
      sm: { min: '0px', max: '450px' },
      tablet: { min: '451px', max: '768px' },
      'md-': { min: '769px', max: '1024px' },
      md: { min: '451px', max: '1024px' }
    },
    extend: {
    }
  },
  plugins: []
};
export default config;
