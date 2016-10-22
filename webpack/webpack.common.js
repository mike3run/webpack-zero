// For plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Paths for webpack
const PATHS = require('./webpack.paths')

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // To write clean html and auto inject styles and scripts
    new HtmlWebpackPlugin({
      template: PATHS.start
    }),
    // Clean the build folder on each run
    new CleanWebpackPlugin( [ PATHS.build ] )
  ],
  module: {
    preloaders: [],
    loaders: [
      {
        test: /\.s(a|c)ss/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.html$/,
        loaders: ['html']
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      }
    ],
    postloaders: [],
    noParse: []
  },
  sassLoader: {
    includePaths: [ PATHS.styles ]
  }
}
