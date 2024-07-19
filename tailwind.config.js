/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.2': '0.2px',
        '0.5': '0.5px',
        '1': '1px',
      },
      width: {
        "84/100": "84%",
        "85/100": "85%",
        "86/100": "86%",
        "87/100": "87%",
        "88/100": "88%",
        "89/100": "89%",
        "90/100": "90%",
        "91/100": "91%",
        "92/100": "92%",
        "93/100": "93%",
        "94/100": "94%",
        "95/100": "95%",
        "96/100": "96%",
        "97/100": "97%",
        "98/100": "98%",
        "99/100": "99%",
      },
      blur: {
        "low": "0.5px",
        "medium": "1px",
        "high": "2px",
      },
      boxShadow :{
        "furdamental": "0 0 5px 3px rgb(46, 46, 46,0.15)",
        "intermediate": "0 0 5px 5px rgb(46, 46, 46,0.15)",
        "advanced": "0 0 6px 6px rgb(46, 46, 46,0.15)",
      },
      colors: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#FAD02C",
        quaternary: "#D8D8D8",
        quinary: "#DEDEDE",
      },
      textColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#FAD02C",
        quaternary: "#9CA3AF",
        quinary: "#DEDEDE",
        custom: "#1E3554",
      },
      backgroundColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#FAD02C",
        quaternary: "#DEDEDE",
        quinary: "#E5E7EB",
        custom: "#f2f2f2",
      },
      outlineColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#FAD02C",
        quaternary: "#9CA3AF",
        quinary: "#DEDEDE",
        custom: "#1E3554",
      },
      borderColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#FAD02C",
        quaternary: "#DEDEDE",
        quinary: "#E5E7EB",
        custom: "#1E3554",
      },
      dropShadow: {
        "strong": "0 0 6px rgb(210, 210, 210)",
        "medium": "0 0 5px rgb(210, 210, 210)",
        "low": "0 0 4px rgb(210, 210, 210)",
        "login": "0 0 4px rgb(152,152,152)",
      },
    },
  },
  plugins: [],
}

