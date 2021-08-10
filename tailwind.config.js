module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    darkSelector: '.dark-mode',
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'display': ['Rubik', 'sans-serif'],
    },
    colors: {
      primary: '#2D4EF9',
      white: '#FFFFFF',
      light: '#6E7187',
      grey: '#EDEDED',
      dark: {
        300: '#1E1D32',
        400: '#121423'
      }
    }
  },
  options: {
    safelist: ['dark'],
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  
}
