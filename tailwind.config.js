/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-light": "#F0F8FF"
      },
      colors: {
        "blue": "#0084FF",
        "blue-button": "#007EFF",
        "blue-border": "#0093FF",
        "default-color":"#1C3C50",
      }
    },
  },
  plugins: [],
};
