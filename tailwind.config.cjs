/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    colors: {
      black: "#121212",
      primary: "#3bd949",
      secondary: "#80dc88",
      greenish: "#f8fef8",
      white: "#fdfdfd",
      blue: "#2a2146",
    },
    extend: {
      spacing: {
        100: "30rem",
        50: "15rem",
      },
    },
  },
  plugins: [],
};
