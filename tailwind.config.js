/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        // => @media (min-width: 576px) { ... }
  
        md: "960px",
        // => @media (min-width: 960px) { ... }
  
        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      // backgroundImage: {
      //   "imagen-about": "url('./img/somosdynamos/fondodynamos.png')",
      // },
    },
  },
  plugins: [],
};
