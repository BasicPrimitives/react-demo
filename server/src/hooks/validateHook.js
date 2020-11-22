const errors = require('@feathersjs/errors');
const { createAsyncValidator } = require('utils/validation');

function validateHook(schema) {
  return async hook => {
    try {
      await createAsyncValidator(schema, { hook })(hook.data);
      return hook;
    } catch (errorsValidation) {
      if (Object.keys(errorsValidation).length) {
        throw new errors.BadRequest('Validation failed', errorsValidation);
      }
    }
  };
}

module.exports = validateHook;