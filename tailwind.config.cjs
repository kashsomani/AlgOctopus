/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#CB6CE6",
          secondary: "#5CE1E6",
          accent: "#E5D0CC",
          neutral: "#444554",
          "base-100": "#172121",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
