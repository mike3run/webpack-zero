const hello = require('./components/hello/hello.component');
const app = document.createElement('div');

document.body.append(app);

app.appendChild( hello() );
