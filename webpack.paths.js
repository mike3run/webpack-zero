const path = require('path');

// Config file situation
const PATHS = {
  app: path.join( __dirname, 'src' ),
  build: path.join( __dirname, 'dist' ),
  start: path.join( __dirname, 'src', 'index.html' ),
  styles: path.join( __dirname, 'src', 'styles', '1-abstracts' )
}

module.exports = PATHS
