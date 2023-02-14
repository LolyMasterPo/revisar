/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'characterImg': 'url(@/assets/img/imgCharacter.jpg)',
        'projectOne' : 'url(@/assets/img/projectOne.jpg)',
        'projectTwo' : 'url(@/assets/img/projectTwo.jpg)',
        'projectThree' : 'url(@/assets/img/projectThree.PNG)'
      }),
      backgroundColor: theme => ({
        'pale-sky': {
          DEFAULT: '#6B7280',
          50: '#B7BBC3',
          100: '#ACB0BA',
          200: '#969BA7',
          300: '#7F8694',
          400: '#6B7280',
          500: '#515761',
          600: '#383C43',
          700: '#1E2024',
          800: '#050506',
          900: '#000000'
        },
      }),
      colors: theme => ({
        'pale-sky': {
          DEFAULT: '#6B7280',
          50: '#B7BBC3',
          100: '#ACB0BA',
          200: '#969BA7',
          300: '#7F8694',
          400: '#6B7280',
          500: '#515761',
          600: '#383C43',
          700: '#1E2024',
          800: '#050506',
          900: '#000000'
        },
      })
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
