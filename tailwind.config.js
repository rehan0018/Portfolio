/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg: '#07090D',
          bgSecondary: '#0D1117',
          surface: '#10151C',
          surfaceElevated: '#171F29',
          border: '#1F2937',
          borderSubtle: 'rgba(143, 175, 196, 0.12)',
          text: '#F1F3F5',
          textSecondary: '#A7B0BA',
          textMuted: '#6F7985',
          accent: '#8FAFC4', // Steel Blue
          gold: '#C8A96B',   // Muted Gold
          slate: '#727B9A',  // Cosmic Slate
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 30%, rgba(23, 31, 41, 0.7) 0%, rgba(7, 9, 13, 0.95) 75%, #07090D 100%)',
      }
    },
  },
  plugins: [],
}
