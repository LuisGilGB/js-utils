/*
 * Returns true if the input is an empty string after trimming it.
 */
const isString = require('./isString');

const isEmptyString = input => isString(input) && input.trim().length === 0;

module.exports = isEmptyString;