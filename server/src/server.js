#!/usr/bin/env node
const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PrettyError = require('pretty-error');
const config = require('./config');
const services = require('./services');

const pretty = new PrettyError();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise ', p, pretty.render(reason));
});

const app = express(feathers());

app
  .set('config', config)
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
  .use(bodyParser.json())
  // Core
  .configure(express.rest())
  .configure(services)
  // Final handlers
  .use(express.notFound())
  .use(
    express.errorHandler({
      logger: {
        error: error => {
          if (error && error.code !== 404) {
            console.error('API ERROR:', pretty.render(error));
          }
        }
      }
    })
  );

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
