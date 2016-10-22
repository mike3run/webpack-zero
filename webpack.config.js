// To merge 2 config files together!
const merge = require('webpack-merge')

// Thing to check what's running on `npm start` or build, etc
const TARGET = process.env.npm_lifecycle_event
const start = require('./webpack/webpack.start')
const production = require('./webpack/webpack.production')
const common = require('./webpack/webpack.common')

// Use only with start command
if ( TARGET === 'start' || !TARGET ) {
  module.exports = merge(common, start)
}

if ( TARGET === 'build' || !TARGET ) {
  module.exports = merge(common, {})
}
