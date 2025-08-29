/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-lora)', 'Georgia', 'serif'],
      },
      colors: {
        warm: {
          50: '#fefdfb',
          100: '#fdf9f2',
          200: '#faf0e0',
          300: '#f5e3ca',
          400: '#efd0a7',
          500: '#e6b884',
          600: '#d99c5b',
          700: '#c87d3c',
          800: '#a5612a',
          900: '#8a4f23',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d2c7',
          300: '#a3b4a3',
          400: '#7a917a',
          500: '#5a735a',
          600: '#465a46',
          700: '#3a4a3a',
          800: '#313b31',
          900: '#2a332a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f2',
          200: '#fbf3e8',
          300: '#f7e8d3',
          400: '#f1d6b1',
          500: '#e8bd85',
          600: '#d99f57',
          700: '#c7823a',
          800: '#a36630',
          900: '#85532a',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--tw-prose-body)',
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:first-of-type::after': {
              content: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
