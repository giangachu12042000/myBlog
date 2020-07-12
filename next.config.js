if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const webpack = require('webpack')

nextConfig = {
  //target: 'serverless',
  env: {
    weatherApi: '',
    mapBoxApi: ''
  },
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    config.plugins.push(
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
      })
    )
    return config
  }
};

module.exports = withCSS(withSass(withLess(nextConfig)));
