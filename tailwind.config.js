/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          beige: "#f6ead4",
          olive: "#a2a595",
          taupe: "#b4a284",
        },
      },
    },
    plugins: [],
  }
  