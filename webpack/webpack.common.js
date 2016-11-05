// For plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// POSTCSS
const autoprefixer = require('autoprefixer');
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
        test: /\.(jpe?g|svg|png|gif|mp4|mov|webm|mp3|pdf)$/,
        loaders: ['url?limit=25000&name=[name].[hash:base64:9].[ext]', 'image-webpack'],
        include: PATHS.app
      },
      {
        test: /\.woff2?$/,
        loader: 'url',
        query: {
          name: 'font/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        },
        include: PATHS.app
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file',
        query: {
          name: 'font/[hash].[ext]'
        },
        include: PATHS.app
      },
      {
        test: /\.s(a|c)ss$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[path][name]---[local]---[hash:base64:7]',
          'postcss',
          'sass'
        ],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
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
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  sassLoader: {
    includePaths: [ PATHS.styles ]
  },
  imageWebpackLoader: {
    mozjpeg: {
      quality: 65
    },
    pngquant:{
      quality: "65-90",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        },
        {
         removeStyleElement : true
        }
      ]
    }
  }
}
