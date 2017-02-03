// Node Modules
const path = require('path');
// Express
const Express = require('express');
// MiddleWare
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// My Routers
const home = require('./routes/home');

const app = Express();

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/', home);

const PORT = 4545;
app.listen(PORT, function () { console.log(`Server listening on http://localhost:${PORT}`)})
