// Adding Bootstrap to your Express app
// Step 1: Make sure it can serve static assets
// Step 2: Create public/ folder and put Bootstrap assets in it
// Step 3: Add link & script tag in header partial to load Bootstrap
// Step 4: Add jQuery library dependency to project

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
// The following will serve files from the public folder to
// the root of our app http://localhost:4545/
app.use(Express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/', home);

const PORT = 4545;
app.listen(PORT, function () { console.log(`Server listening on http://localhost:${PORT}`)})
