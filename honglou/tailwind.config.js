/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 水墨色谱：从宣纸到浓墨
        paper: { DEFAULT: '#e7dcc4', light: '#f7f2e6', dark: '#d8c9ab' },
        ink: { DEFAULT: '#2b241a', soft: '#4a3f2c', mute: '#7a6a52', faint: '#a89370' },
        seal: { DEFAULT: '#a8322a', dark: '#7d211a' },
        moss: { DEFAULT: '#3d5a3a', light: '#6b8a5f' },
      },
      fontFamily: {
        kai: ['"Kaiti SC"', '"STKaiti"', '"KaiTi"', '"Noto Serif CJK SC"', 'serif'],
      },
      letterSpacing: {
        seal: '0.28em',
      },
    },
  },
  plugins: [],
}
