const express = require('express')
require('./db/mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser');
const error = require('./middleware/error');

/**
* Express instance
* @public
*/
const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// if error is not an instanceOf APIError, convert it.

// mount api routes
app.use('/api', routes);



app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);











module.exports = app