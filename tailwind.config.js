/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#2AB894', // EduStow Brand Teal Green
          600: '#1EA07F',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        edugold: {
          50: '#FFFDF0',
          100: '#FFF9C2',
          200: '#FFF085',
          300: '#FFE468', // Primary Golden Yellow from original repo
          400: '#FCD34D',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        edugreen: {
          50: '#F4FAF0',
          100: '#E4F4D9',
          200: '#CBEAB6',
          300: '#ACDD87',
          400: '#8CC641', // Secondary Lime Green from original repo
          500: '#73A82C',
          600: '#588820',
          700: '#406616',
        },
        edudark: {
          700: '#3D3C48',
          800: '#2E2D38',
          900: '#272630', // Dark Charcoal Slate from original repo
          950: '#1A1921',
        },
        navy: {
          800: '#0F1D32',
          900: '#0B1524',
          950: '#070D18',
        },
        accent: {
          gold: '#FFE468',
          green: '#8CC641',
          teal: '#2AB894',
          dark: '#272630',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
          violet: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(255, 228, 104, 0.35)',
        'glow-green': '0 0 25px -5px rgba(140, 198, 65, 0.4)',
        'glow-teal': '0 0 30px -5px rgba(42, 184, 148, 0.4)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-pattern': 'url("/assets/hero.png")',
        'cta-pattern': 'url("/assets/call-to-action.jpg")',
        'quote-pattern': 'url("/assets/quote.jpg")',
        'testimonial-pattern': 'url("/assets/testimonial.jpg")',
        'subtle-grid': 'radial-gradient(rgba(255, 228, 104, 0.15) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
