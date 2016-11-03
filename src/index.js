require('./styles/main.sass')
const hello = require('./components/hello/hello.component')
const goodbye = require('./components/goodbye/goodbye.component')
const prettyPic = require('./components/prettypic/prettypic.component')

const app = document.createElement('main')
document.body.append(app)

app.appendChild( hello() )
app.appendChild( goodbye() )
app.appendChild( prettyPic() )
