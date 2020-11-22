const auth = require('@feathersjs/authentication');
const local = require('@feathersjs/authentication-local');
const errors = require('@feathersjs/errors');
const { restrictToOwner } = require('feathers-authentication-hooks');
const { discard } = require('feathers-hooks-common');
const { validateHook } = require('hooks');
const { required, email, match, unique } = require('utils/validation');

const schemaValidator = {
  email: [required, email, unique('email')],
  password: required,
  password_confirmation: [required, match('password')]
};

function validate() {
  return context => {
    const { data } = context;

    if (data.facebook && !data.email) {
      throw new errors.BadRequest('Incomplete oauth registration', data);
    }

    return validateHook(schemaValidator)(context);
  };
}

const userHooks = {
  before: {
    find: auth.hooks.authenticate('jwt'),
    get: auth.hooks.authenticate('jwt'),
    create: [validate(), discard('password_confirmation'), local.hooks.hashPassword()],
    update: [auth.hooks.authenticate('jwt'), restrictToOwner({ ownerField: '_id' })],
    patch: [auth.hooks.authenticate('jwt'), restrictToOwner({ ownerField: '_id' })],
    remove: [auth.hooks.authenticate('jwt'), restrictToOwner({ ownerField: '_id' })]
  },
  after: {
    all: local.hooks.protect('password'),
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

module.exports =  userHooks;
