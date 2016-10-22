const path = require('path');
const process = require('process');

// Config file situation
const PATHS = {
  app: path.join( process.cwd(), 'src' ),
  build: path.join( process.cwd(), 'dist' ),
  start: path.join( process.cwd(), 'src', 'index.html' ),
  styles: path.join( process.cwd(), 'src', 'styles', '1-abstracts' )
}

module.exports = PATHS
