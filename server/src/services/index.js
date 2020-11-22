const authentication = require('./authentication');
const demoorganizationalcharts = require('./demoorganizationalcharts');
const demofamilycharts = require('./demofamilycharts');
const howtouse = require('./howtouse');
const users = require('./users');

function services(app) {
  app.configure(authentication);
  app.configure(demoorganizationalcharts);
  app.configure(demofamilycharts);
  app.configure(users);
  app.configure(howtouse);
};

module.exports = services;
