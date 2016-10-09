module.exports = function () {
  require('./hello.css')
  var element = document.createElement('h1')
  element.innerHTML = 'Hello World!!'
  return element
}
