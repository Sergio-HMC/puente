/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#204975",     // azul principal
          prussian: "#142E4A",    // azul prusiano
          steel: "#8D99AE",       // gris azulado
          cornsilk: "#FAF4D3",    // amarillo claro
          tea: "#C2EFB3"          // verde claro
        }
      },
      fontFamily: {
        sans: ["Lato", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};
