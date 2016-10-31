// To merge 2 config files together!
const merge = require('webpack-merge')

const start = require('./webpack.start')
const production = require('./webpack.production')
const common = require('./webpack.common')

switch (process.env.npm_lifecycle_event) {
  case 'build':
    module.exports = merge(common,
      {
        devtool: 'eval-source-map'
      },
      production)
    break;
  default:
    module.exports = merge(common, start)
}
