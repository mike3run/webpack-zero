const path = require('path');

// Config file situation
const PATHS = {
  app: path.join( __dirname, 'src' ),
  build: path.join( __dirname, 'dist' ),
  start: path.join( __dirname, 'src' ) + '/index.html',
  node: path.join( __dirname, 'node_modules' )
}

module.exports = PATHS
