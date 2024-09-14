/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scroll-hidden': {
          overflow: 'hidden',                // General hiding of the scrollbar
          '-ms-overflow-style': 'none',       // IE and Edge
          'scrollbar-width': 'none',          // Firefox
        },
        '.scroll-hidden::-webkit-scrollbar': {
          display: 'none',                    // Chrome, Safari, and Opera
        },
      });
    },
  ],
}
