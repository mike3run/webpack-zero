module.exports = function () {
  var styles = require('./goodbye.sass')
  var element = document.createElement('div')
  var goodbye = document.createElement('h2')
  goodbye.innerHTML = 'Goodbye World!!'
  element.classList.add(styles.container)
  goodbye.classList.add(styles.title)
  element.appendChild(goodbye)
  return element
}
