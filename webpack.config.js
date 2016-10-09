// For plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Paths for webpack
const PATHS = require('./webpack.paths')

const common = {
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
    // Use this to fancy/import stuff prefix with ~
    // example @import "~bootstrap"
    includePaths: [
      PATHS.node
    ]
  }
}

// To merge 2 config files together!
const merge = require('webpack-merge')

// Thing to check what's running on `npm start` or build, etc
const TARGET = process.env.npm_lifecycle_event
const start = require('./webpack/webpack.start')
const production = require('./webpack/webpack.production')

// Use only with start command
if ( TARGET === 'start' || !TARGET ) {
  module.exports = merge(common, start)
}

if ( TARGET === 'build' || !TARGET ) {
  module.exports = merge(common, {})
}
