/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/createTodos.jsx',
    './src/components/incompleteTodos.jsx',
    './src/components/completedTodos.jsx',
    './src/components/allTodos.jsx',
    './src/components/Login.jsx'
  ],
  theme: {
    extend: {
      width: {
        '96': '28rem',
      },
      colors: {
        'blue':'#74F0ED',
        'red':'#EA445A',
        'yellow': {
          300: '#FCD34D',
          400: '#FBBF24',
        },
      },
      maxWidth: {
        '2xl': '42rem',
      },
    },
  },
  plugins: [],
}