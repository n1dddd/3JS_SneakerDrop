/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: ["Chakra Petch","sans-serif"]
      },
      backgroundColor: {
         'bg-color': 'rgb(211,235,255)',
      }
    },
  },
  plugins: [],
}

