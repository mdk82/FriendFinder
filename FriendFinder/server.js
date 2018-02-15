// Dependencies //
// ======== //
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// initializing express //
// ==================== //
const app = express();

// Assigning PORT //
// ============== //
const PORT = process.env.PORT || 5150

app.use(express.static(path.join(__dirname, '../app/public')))

// Bring in body-parser functionality - parses data sent to it from the server //
// =========================================================================== //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.text())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

// Bring in route files - used for server side operations to and from a URL //
//========================================================================= //
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Initializing PORT listener //
// =============== //
app.listen(PORT, () => {
    console.log('Listening on PORT: ' + PORT)
});