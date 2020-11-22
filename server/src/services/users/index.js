const feathersNedb = require('feathers-nedb');
const NeDB = require('nedb');
const hooks = require('./hooks');

module.exports = function userService(app) {
  const options = {
    Model: new NeDB({
      filename: `${__dirname}/users.nedb`,
      autoload: true
    }),
    paginate: {
      default: 5,
      max: 25
    }
  };

  app.use('/users', feathersNedb(options));

  app.service('users').hooks(hooks);
}
