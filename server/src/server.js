#!/usr/bin/env node
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PrettyError = require('pretty-error');
const config = require('./config');
const services = require('./services'); // You may want to adjust or remove this if services rely on feathers
require('newrelic');

const pretty = new PrettyError();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise ', p, pretty.render(reason));
});

const app = express();

app.set('config', config)
  .use(morgan('dev'))
  .use(cookieParser())
  .use(
    session({
      secret: 'react and redux rule!!!!',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    })
  )
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

services('/api', app);

// Final handlers
app.use(express.static('public')); // Serve static files if needed
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});
app.use((error, req, res, next) => {
  if (error) {
    console.error('API ERROR:', pretty.render(error));
    res.status(500).send('Internal Server Error');
  }
});

if (process.env.APIPORT) {
  app.listen(process.env.APIPORT, err => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', process.env.APIPORT);
    console.info('==> 💻  Send requests to http://localhost:%s', process.env.APIPORT);
  });
} else {
  console.error('==>     ERROR: No APIPORT environment variable has been specified');
}
