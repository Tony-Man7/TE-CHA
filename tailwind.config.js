/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  
        secondary: '#F97316', 
        accent: '#A7D477',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
