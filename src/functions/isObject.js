/*
 * Returns true if the input is an object, excluding null, arrays and functions from this object definition.
 */
const isArray = require('./isArray');

const isObject = input => !!(input && typeof input === 'object' && !isArray(input));

module.exports = isObject;