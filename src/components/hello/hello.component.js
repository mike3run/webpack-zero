module.exports = function () {
  require('./hello.sass')
  var element = document.createElement('div')
  element.classList.add('hello')
  var logo = document.createElement('div')
  logo.classList.add('logo')
  var hello = document.createElement('h1')
  hello.innerHTML = 'Hello World!!'

  element.appendChild(logo)
  element.appendChild(hello)

  return element
}
