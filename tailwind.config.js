/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ['"Poppins", sans-serif'],
      },
      fontSize: {
        xxs: "0.6rem",
      },
      screens: {
        xs: { min: "140px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
      },
      colors: {
        neutral: {
          100: "#FDFEFC",
          200: "#FAFEFA",
          300: "#F5FCF5",
          400: "#F0FAEE",
          450: "#F0FBEF",
          500: "#E1F6DF",
          600: "#DAF4D7",
          700: "#D4F2D1",
          800: "#CDF0C9",
          900: "#C6EEC2",
          1000: "#BAEAB6",
          1200: "#8DA18B",
        },
        foundation: {
          100: "#C8EEC4",
          200: "#506E4D",
          300: "#F5F6F7",
          400: "#6B788E",
          500: "#8993A4",
          600: "#EBEDF0",
          700: "#FAFBFB",
          800: "#98A1B0",
          900: "#5D6B82",
          1000: "#A6AEBB",
          1100: "#42526D",
          1200: "#505F79",
          1300: "#7A8699",
          1400: "#DFE2E6",
          1500: "#B3B9C4",
          1600: "#7A8699",
        },
        primary: {
          100: "#A4E49E",
          200: "#7FD876",
          300: "#48C73A",
          400: "#22BC12",
          500: "#18840D",
          600: "#15730B",
        },
        secondary: {
          50: "#FFFAF2",
          100: "#FFD296",
          200: "#FFC06B",
          300: "#FFA52B",
          400: "#FF9200",
          500: "#B36600",
          600: "#FFF9F2",
          700: "#FFFAF3",
        },
        warning: {
          50: "#FFE3E3",
          100: "#FFA29F",
          150: "#FFF4F3",
          200: "#FF7C77",
          300: "#FF433D",
          400: "#FF1D15",
          450: "#C80000",
          500: "#B3140F",
          600: "#FFF8F8",
          700: "#830005",
          800: "#48242C",
        },
        progress: {
          100: "#F8E99A",
          200: "#F6E070",
          300: "#F2D332",
          400: "#EFCA08",
          500: "#A78D06",
        },
        success: {
          100: "#A4E49E",
          200: "#7FD876",
          300: "#48C73A",
          400: "#22BC12",
          500: "#18840D",
        },
        shades: {
          100: "#FFFFFF",
          150: "#465145",
          200: "#020D01",
          300: "#F6FCF6",
          400: "#E2F6E0",
          500: "#6A7968",
          600: "#EBEDF0",
          700: "#CED0CE",
          800: "#D3F2D0",
          900: "#DAF4D8",
        },
        salesYellow: {
          100: "#FFF8D1",
        },
      },
      height: {
        120: "32rem",
        1000: "1400px",
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        450: "450px",
        218: "218.95px",
        192: "192.61px",
        422: "422.85px",
        316: "316px",
        254: "254.88px",
        341: "341.22px",
        1: "1px",
        178: "178px",
        352: "352px",
        400: "400px",
        10: "10px",
        0.5: "0.5px",
        900: "900px",
        750: "750px",
      },
    },
  },
  plugins: [],
};
