// Basic webpack requirements
const webpack = require('webpack')
// Paths file
const PATHS = require('./webpack.paths')
const parts = require('./libs/parts')

module.exports = parts.devServer({
    contentBase: PATHS.build,
    host: process.env.HOST,
    port: process.env.PORT
  })
