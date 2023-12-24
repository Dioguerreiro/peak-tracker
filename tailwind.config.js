/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spc_blue: {
          50: '#3FA1FB',
          100: '#163858',
        },
        spc_teal: {
          50: '#36F2E4',
          100: '#135550'
        },
        spc_green: {
          50: '#B9FF0A',
          100: '#415904'
        },
        spc_orange: {
          50: '#FD8206',
          100: '#592E02'
        },
        spc_red: {
          50: '#F82173',
          100: '#570C28'
        }
      }
    },
  },
  plugins: [],
};
