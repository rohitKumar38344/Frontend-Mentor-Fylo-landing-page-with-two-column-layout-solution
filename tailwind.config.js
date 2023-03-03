/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "fylo-dark-blue": "hsl(243, 87%, 12%)",
        "fylo-desaturated-blue": "hsl(238, 22%, 44%)",
        "fylo-bright-blue": "hsl(224, 93%, 58%)",
        "fylo-md-cyan": "hsl(170, 45%, 43%)",
        "fylo-light-grayish-blue": "hsl(240, 75%, 98%)",
        "fylo-light-gray": "hsl(0, 0%, 75%)",
      },
      backgroundImage: {
        "curve-pattern": "url('/build/images/bg-curve-desktop.svg')",
        "mobile-curve-pattern": "url('/build/images/bg-curve-mobile.svg')",
        "illustration-2": "url('/build/images/illustration-2.svg')",
      },
      backgroundSize: {
        "75%": "75%",
      },
      fontFamily: {
        Raleway: ["Raleway"],
        "Open-Sans": ["Open Sans"],
      },
    },
  },
  plugins: [],
};
