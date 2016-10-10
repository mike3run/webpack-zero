require('./styles/main.sass')
const hello = require('./components/hello/hello.component')
const goodbye = require('./components/goodbye/goodbye.component')

const app = document.createElement('div')

document.body.append(app)

app.appendChild( hello() )
app.appendChild( goodbye() )
