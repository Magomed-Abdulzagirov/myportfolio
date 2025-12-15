/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'roboto': ['Roboto', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
        'fira-mono': ['Fira Code', 'monospace'],
          poppins: ['Poppins', 'sans-serif'],
        
        // Алиасы для удобства
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Roboto', 'system-ui', 'sans-serif'],
        'accent': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
        screens: {
            'max-md': {'max': '767px'},
            'max-lg': {'max': '1023px'},
            'max-xl': {'max': '1279px'},
        }
    },
  },
  plugins: [],
};
