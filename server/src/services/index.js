// const authentication = require('./authentication');
const demoorganizationalcharts = require('./demoorganizationalcharts');
const demofamilycharts = require('./demofamilycharts');
const howtouse = require('./howtouse');

function services(url, app) {
  // app.configure(authentication);
  demoorganizationalcharts(url, app);
  demofamilycharts(url, app);
  howtouse(url, app);
};

module.exports = services;
