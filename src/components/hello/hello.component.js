module.exports = function () {
  require('./hello.sass')
  var element = document.createElement('h1')
  element.innerHTML = 'Hello World!!'
  return element
}
