/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          green: '#00ff9f',
          purple: '#bf00ff',
        },
        cyber: {
          dark: '#0a0a0f',
          darker: '#050507',
          light: '#1a1a2f',
        }
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float-large': 'floatLarge 8s ease-in-out infinite',
        'float-large-delayed': 'floatLarge 8s ease-in-out infinite 2s',
        'float-large-reverse': 'floatLargeReverse 8s ease-in-out infinite',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff' },
          '100%': { textShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' },
        },
        floatLarge: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        floatLargeReverse: {
          '0%, 100%': { transform: 'translateY(-40px)' },
          '50%': { transform: 'translateY(0)' },
        },
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};