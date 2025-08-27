/**
 * PostCSS configuration
 *
 * Tailwind CSS is built on top of PostCSS. This configuration loads
 * Tailwind and Autoprefixer. Autoprefixer automatically adds vendor
 * prefixes to CSS rules to improve cross-browser compatibility.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};