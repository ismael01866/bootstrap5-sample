const common                   = require('./webpack.common.js');

const { merge }                = require('webpack-merge');

const MiniCssExtractPlugin     = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const configureImageLoader = () => {
  return {
    test: /\.svg$/,
    type: 'asset/inline'
  };
};

const configureSCSSLoader = () => {
  return {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  };
};

const configureMiniCssExtract = () => {
  return {
    filename: '[name].css'
  };
};

module.exports = merge(
  common.config, {
    mode: 'production',
    module: {
      rules: [
        configureSCSSLoader(),
        configureImageLoader()
      ]
    },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin(
        configureMiniCssExtract()
      )
    ]
  }
);
