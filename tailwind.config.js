/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo-escuro': '#4B0082',
        'roxo-vibrante': '#7C3AED',
        'roxo-base': '#8B5CF6',
        'roxo-medio': '#A78BFA',
        'roxo-pastel': '#C4B5FD',
        'roxo-hover': '#DDD6FE',
        'roxo-fundo-claro': '#EDE9FE',
        'roxo-quase-branco': '#F5F3FF',
        'danger-red': "#F32013"
      }
    },
  },
  plugins: [],
}