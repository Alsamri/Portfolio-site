/**@type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lighthover: "#f5f5f5",
        darkhover: "#333333",
        darkTheme: "#11001f",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
