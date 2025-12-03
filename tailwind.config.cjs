/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-maroon': '#690B22',
        'brand-peach': '#E07A5F',
        'brand-cream': '#F1E3D3',
        'brand-green': '#1B4D3E'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        skillTheme: {
          'primary': '#690B22',
          'primary-focus': '#4f081a',
          'primary-content': '#ffffff',

          'secondary': '#E07A5F',
          'secondary-focus': '#c56148',
          'secondary-content': '#1b1b1b',

          'accent': '#1B4D3E',
          'accent-focus': '#163f33',
          'accent-content': '#ffffff',

          'neutral': '#6b6b6b',
          'base-100': '#F1E3D3',
          'base-200': '#E6D6C6',
          'base-300': '#cfc0b0',
          'base-content': '#1b1b1b'
        }
      }
    ],
    base: true,
    styled: true
  }
}
