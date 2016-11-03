module.exports = function() {
  var container = document.createElement('div')
  container.classList.add('prettyPic')
  var prettyPic = document.createElement('img')
  prettyPic.setAttribute( 'src', require('./prettyPic.jpg') )

  container.appendChild(prettyPic)
  return container
}
