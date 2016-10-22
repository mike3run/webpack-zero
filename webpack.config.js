// To merge 2 config files together!
const merge = require('webpack-merge')

const start = require('./webpack/webpack.start')
const production = require('./webpack/webpack.production')
const common = require('./webpack/webpack.common')

switch (process.env.npm_lifecycle_event) {
  case 'build':
    module.exports = merge(common, production)
    break;
  default:
    module.exports = merge(common, start)
}
