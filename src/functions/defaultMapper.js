/*
 * Default mapper: A mapper to be used by default in map functions. It is the identityFunction
 * itself, so it just returns the given object.
 */
const identityFunction = require('./identityFunction');

const defaultMapper = identityFunction;

module.exports = defaultMapper;