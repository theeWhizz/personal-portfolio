/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'san-serif'],
        general: ['general', 'san-serif'],
        'circular-web': ['circular-web', 'san-serif'],
        'robert-medium': ['robert-medium', 'san-serif'],
        'robert-regular': ['robert-regular', 'san-serif'],
      },
      colors: {
        oilblack: {
          900: '#0C0C0C',
        },
        obsidian: {
          900: '#0B1215',
        },
        darkslategray: {
          900: '#0D1717',
        },
        midnightblue: {
          900: '#101720',
        },
        deepnavyblue: {
          900: '#011222',
        },
        richblack: {
          900: '#020D19',
        },
      }
    },
  },
  plugins: [],
}