/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '426px',
      },
      maxWidth: {
        xxs: '320px',
        xs: '426px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        '3xs': '0.65rem',
        'xxs': '0.7rem',
        'xs': '0.8rem',
        'sm': '0.875rem',
        'md': '0.91rem',
        'base': '1rem',
        'lg': '1.15rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        'responsive-lg': 'clamp(2.75rem, 12vw, 3.40rem)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none',  
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', 
        },
      });
    },
  ],
};