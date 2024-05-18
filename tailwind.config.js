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
        bpink: '#ffacee',  // example pastel pink
        borange: '#ffb347', // example pastel orange
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        blob: 'blob 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

