module.exports = function () {
  require('./goodbye.sass')
  var element = document.createElement('h1')
  element.innerHTML = 'Goodbye World!!'
  element.classList.add('goodbye')
  return element
}
