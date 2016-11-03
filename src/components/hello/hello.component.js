module.exports = function () {
  var styles = require('./hello.sass')
  var element = document.createElement('div')
  element.classList.add(styles.hello)
  var logo = document.createElement('div')
  logo.classList.add(styles.logo)
  var hello = document.createElement('h1')
  hello.classList.add(styles.title)
  hello.innerHTML = 'Hello World!!'

  element.appendChild(logo)
  element.appendChild(hello)

  return element
}
