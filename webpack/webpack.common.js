const path                   = require('path');
const settings               = require('./webpack.settings.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const configureResolveModules = () => {
  const modules = [];

  for (const [key, value] of Object.entries(settings.paths.src)){
    modules.push(path.join(__dirname, value));
  }

  return modules;
};

const config = {
  name : 'main',
  entry: {
    style: path.resolve(__dirname, settings.paths.src.scss, 'index.scss')
  },
  output: {
    path      : path.resolve(__dirname, settings.paths.dist.base),
    publicPath: settings.urls.publicPath() + '/'
  },
  resolve: {
    extensions: ['.scss'],
    modules: configureResolveModules()
  },
  plugins: [
    new CleanWebpackPlugin({
      dry                         : false,
      verbose                     : true,
      cleanOnceBeforeBuildPatterns: settings.paths.dist.clean
    })
  ]
};

module.exports = { config };
