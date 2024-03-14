/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        500: "500px",
      },
      height: {
        full: "100%",
        789: "789px",
      },
    },
    fontFamily: {
      SDSamliphopangche_Outline: ["SDSamliphopangche_Outline"],
      ygjalnan: ["yg-jalnan"],
      NPSfontBold: ["NPSfontBold"],
    },
  },
  plugins: [],
};
