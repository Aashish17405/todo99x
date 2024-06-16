/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/createTodos.jsx',
    './src/components/incompleteTodos.jsx',
    './src/components/completedTodos.jsx',
    './src/components/allTodos.jsx'
  ],
  theme: {
    extend: {
      width: {
        '96': '24rem',
      },
      colors: {
        'blue':'#74F0ED',
        'red':'#EA445A'
      }
    },
  },
  plugins: [],
}

