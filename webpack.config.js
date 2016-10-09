// Basic building blocks
const path = require('path')
const webpack = require('webpack')
// To merge 2 config files together!
const merge = require('webpack-merge')

// For plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Thing to check what's running on `npm start` or build, etc
const TARGET = process.env.npm_lifecycle_event

// Config file situation
const PATHS = {
  app: path.join( __dirname, 'src' ),
  build: path.join( __dirname, 'dist' ),
  start: path.join( __dirname, 'src' ) + '/index.html'
}

// The base webpack things
const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
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
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.html$/,
        loaders: ['html']
      }
    ],
    postloaders: [],
    noParse: []
  }
}

// Use only with start command
if ( TARGET === 'start' || !TARGET ) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

if ( TARGET === 'build' || !TARGET ) {
  module.exports = merge(common, {})
}
