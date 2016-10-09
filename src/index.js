require('./style.css')

const hello = require('./components/hello');
const app = document.createElement('div');

document.body.append(app);

app.appendChild( hello() );
