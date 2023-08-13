/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    colors: {
      black: '#000',
      defaultLight: '#FAFAFA',
      paperDark: '#424242',
      defaultDark: '#303030',
      paperLight: '#FFFFFF',
      primaryMain: '#EC407A',
      primaryLight: '#F8BBD0',
      primaryDark: '#880E4F',
      secondaryMain: '#673AB7',
      secondaryLight: '#D1C4E9',
      secondaryDark: '#311B92',
      baseBackground: '#f2f2f2',
      textPrimary: '#212121',
      textSecondary: '#757575',
      textDisabled: '#9e9e9e',
      textDisable2: '#737373',
      textSecondaryDarkMode: '#ffffff',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
