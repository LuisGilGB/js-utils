/*
 * Returns true if the input is a non empty string after trimming it.
 */
const isString = require('./isString');

const isNonEmptyString = input => isString(input) && input.trim().length > 0;

module.exports = isNonEmptyString;