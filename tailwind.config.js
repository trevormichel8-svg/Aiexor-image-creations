/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aiexorGold: "#FFD700",
        aiexorTurquoise: "#00FFFF",
        aiexorDark: "#0B0B0B",
      },
      backgroundImage: {
        "gradient-aiexor": "linear-gradient(to bottom right, #0B0B0B, #003333)",
      },
    },
  },
  plugins: [],
};
