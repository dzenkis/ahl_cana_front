/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./public/**/*.html",
  ],
  theme: {
    extend:{
      colors: {
        pink:{
          1200: "#f8e4e4",
        },
        blue: {
          200: "#EBF3FE",
          300: "#539BFF",
          400: "#4784d9",
          500: "#ECF2FF",
          600: "#5D87FF",
          700: "#4f73d9",
        },
        cyan: {
          400: "#E8F7FF",
          500: "#49BEFF",
          600: "#3ea2d9",
        },
        teal: {
          400: "#E6FFFA",
          500: "#13DEB9",
          600: "#10bd9d",
        },
        yellow: {
          400: "#FEF5E5",
          500: "#FFAE1F",
          600: "#d9941a",
        },
        red: {
          400: "#FDEDE8",
          500: "#FA896B",
          600: "#d5745b",
        },
        gray: {
          100: "#ebf1f6",
          200: "#DFE5EF",
          400: "#e5eaef",
          500: "#5A6A85",
          600: "#2a3547",
          700: "#202936",
        },
        cyan:{
          200:"#56bed2",
        },
        brown:{
          100:"#e4d494",
          200:"#c2b27c",
        },
        table:{
          1:"#347489",
          2:"#f2fcff",
        },
        blue:{
          1:"#6394a4",
        },
        transparent: "transparent",
      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        md: "7px",
        full: "50%",
        "2xl": "15px",
        "3xl": "9999px",
      },
      boxShadow: {
        md: "rgba(145,158,171,0.2) 0px 0px 2px 0px,rgba(145,158,171,0.12) 0px 12px 24px -4px",
        xl: "inset 0 1px 2px rgba(90,106,133,0.075)",
      },
      container: {
        center: true,
        padding: "20px",
      },
      zIndex: {
        '100': '100',
        "200":"200",
      },
      screens: {

        sm:"500px",
        lg:"968px",
        xl:"1200px",
  
      },
      backgroundImage: {
        'lupa': "url('../images/lupa.png')",
      },
      padding: {
        '4.5': '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
    require("@tailwindcss/typography"),
    require("preline/plugin"),
  ],
}

