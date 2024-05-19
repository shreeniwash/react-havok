/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      fontFamily:{
        custom:['Poppins', 'sans-serif'],
        custom1: ["Dancing Script", "cursive"]
      },
      colors:{
        color1:"#181818",
        color2:"#D9D9D9",
        color3:"#B4B1B1",
        color4:"#00EB96",
        color5:"#111111"
        
      }
    },
  },
  plugins: [],
}