// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        reallyLarge: "2500px", // Super large
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  plugins: [],
};
