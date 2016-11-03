module.exports = function () {
  require('./goodbye.sass')
  var element = document.createElement('div')
  var goodbye = document.createElement('h2')
  goodbye.innerHTML = 'Goodbye World!!'
  element.classList.add('goodbye')
  element.appendChild(goodbye)
  return element
}
