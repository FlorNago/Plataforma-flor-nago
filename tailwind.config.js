/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaria: "#016494",
        segunda: "#4E2A5A",
        terceira: "#FF5647",
        quarta: "#FFD84A",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
