/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#112240', ink: '#0A192F', bone: '#E5E5E5', slate: '#A8B2D1', muted: '#8892B0', mint: '#64FFDA' },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      keyframes: {
        rise: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '50%': { transform: 'translate(-10px, 12px)' } }
      },
      animation: { rise: 'rise .7s ease-out both', float: 'float 8s ease-in-out infinite' }
    }
  },
  plugins: []
};
