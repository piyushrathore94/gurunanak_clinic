module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E86AB", // blue-600
          50: "#EBF4F8", // blue-50
          100: "#D7E9F2", // blue-100
          200: "#AFD3E5", // blue-200
          300: "#87BDD8", // blue-300
          400: "#5FA7CB", // blue-400
          500: "#2E86AB", // blue-500
          600: "#256B89", // blue-600
          700: "#1C5067", // blue-700
          800: "#133545", // blue-800
          900: "#0A1A23", // blue-900
        },
        secondary: {
          DEFAULT: "#A8DADC", // teal-300
          50: "#F0FAFB", // teal-50
          100: "#E1F5F6", // teal-100
          200: "#C3EBED", // teal-200
          300: "#A8DADC", // teal-300
          400: "#8AC9CB", // teal-400
          500: "#6CB8BA", // teal-500
          600: "#569395", // teal-600
          700: "#406E70", // teal-700
          800: "#2A494A", // teal-800
          900: "#152425", // teal-900
        },
        accent: {
          DEFAULT: "#F1FAEE", // green-50
          50: "#F1FAEE", // green-50
          100: "#E3F5DD", // green-100
          200: "#C7EBBB", // green-200
          300: "#ABE199", // green-300
          400: "#8FD777", // green-400
          500: "#73CD55", // green-500
          600: "#5CA444", // green-600
          700: "#457B33", // green-700
          800: "#2E5222", // green-800
          900: "#172911", // green-900
        },
        background: "#FFFFFF", // white
        surface: "#F8F9FA", // gray-50
        "text-primary": "#1D3557", // slate-800
        "text-secondary": "#6C757D", // gray-500
        success: "#28A745", // green-600
        warning: "#FFC107", // yellow-400
        error: "#DC3545", // red-600
        border: "#E5E7EB", // gray-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Merriweather', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'quick': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}