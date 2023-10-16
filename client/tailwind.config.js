/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: ['./src/**/*.{html,js,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors:{
        teal:{
          '800':'#115E59'
        },
        yellow:{
          '400':'#FACC15'
        }
      }
    },
  },
  plugins: [nextui()],
}

