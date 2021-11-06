module.exports = {
  prefix: 'tw-',
  important: true,
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        bg            : 'var(--color-bg)',
        'bg-lt'       : 'var(--color-bg-lt)',
        'bg-dk'       : 'var(--color-bg-dk)',
        'bg-lter'     : 'var(--color-bg-lter)',
        'bg-dker'     : 'var(--color-bg-dker)',

        primary       : 'var(--color-primary)',
        'primary-lt'  : 'var(--color-primary-lt)',
        'primary-dk'  : 'var(--color-primary-dk)',
        'primary-lter': 'var(--color-primary-lter)',
        'primary-dker': 'var(--color-primary-dker)',

        accent        : 'var(--color-accent)',
        'accent-lt'   : 'var(--color-accent-lt)',
        'accent-dk'   : 'var(--color-accent-dk)',
        'accent-lter' : 'var(--color-accent-lter)',
        'accent-dker' : 'var(--color-accent-dker)',

        body          : 'var(--color-body)',
        heading       : 'var(--color-heading)',
        subtle        : 'var(--color-subtle)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
