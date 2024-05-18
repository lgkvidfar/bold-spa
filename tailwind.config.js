/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1c1c1c',
        light: '#f5f5f5',
        bpink: '#ffd1dc',  // example pastel pink
        borange: '#ffb347', // example pastel orange
      },
    },
  },
  plugins: [],
}

