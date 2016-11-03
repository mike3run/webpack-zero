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
        test: /\.(jpe?g|png|gif)$/,
        loaders: ['url?limit=25000', 'image-webpack'],
        include: PATHS.app
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loaders: ['file?name=[path][name].[hash].[ext]', 'image-webpack'],
        include: PATHS.app
      },
      {
        test: /\.svg$/,
        loaders: ['svg-url-loader?limit=25000', 'image-webpack'],
        include: PATHS.app
      },
      {
        test: /\.s(a|c)ss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
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
