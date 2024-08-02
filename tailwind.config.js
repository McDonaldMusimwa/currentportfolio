/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./Components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
    plugins: [],
  };
  export default config;
  