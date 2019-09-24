const identityFunction = require('./identityFunction');

/*
 * Default mapper: A mapper to be used by default in map functions. It is the identityFunction
 * itself, so it just returns the given object.
 */

const defaultMapper = identityFunction;

module.exports = defaultMapper;