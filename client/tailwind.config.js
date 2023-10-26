/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,tsx,ts}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        teal: {
          800: '#115E59'
        },
        yellow: {
          400: '#FACC15'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'light',
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#115E59',
              foreground: '#B7FFFA'
            },
            secondary: {
              DEFAULT: '#FACC15',
              foreground: '#FFEFB0'
            }
          }
        }
      }
    })
  ]
}
