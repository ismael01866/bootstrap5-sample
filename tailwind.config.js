module.exports = {
  prefix: 'tw-',
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
