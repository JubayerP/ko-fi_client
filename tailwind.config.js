/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      'nav': ['"Open Sans"'],
      'body': ['Oswald']
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    // themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        myTheme: {
          'primary': '#C7A17A',
        'secondary': '#333333',
        'base': '#ffffff'
        }
      }
    ]
  },
}
