/*
 * Returns true if the input is a string.
 */
const isString = input => typeof input === 'string' || input instanceof String;

module.exports = isString;