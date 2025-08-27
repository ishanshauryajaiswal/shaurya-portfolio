/**
 * Tailwind CSS configuration
 *
 * This file instructs Tailwind on where to look for class names and defines
 * custom theme extensions if necessary. By specifying the `content` paths
 * we ensure that unused styles are purged during production builds, keeping
 * the output CSS as small as possible. Feel free to extend the theme
 * with custom colors, spacing or fonts to suit your personal style.
 */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};