const config = {
  urls: {
    publicPath: () => process.env.PUBLIC_PATH
  },

  paths: {
    src: {
      scss        : './../src/scss/',
      node_modules: './../node_modules'
    },
    dist: {
      base : './../dist',
      clean: ['**/*']
    }
  },

  stats: {
    preset: 'minimal'
  }

};

module.exports = config;
