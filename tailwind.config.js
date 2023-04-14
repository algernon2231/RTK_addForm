/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeate(auto-fit, minmax(15rem,1fr))"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'san-serif']
      },
      colors: {
        primary: "var(--primary)"
      }
    },

  },
  plugins: [],
}