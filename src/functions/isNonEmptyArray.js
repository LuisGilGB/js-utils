/*
 * Returns true if the input is an array with at least one element.
 */
const isArray = require('./isArray');

const isNonEmptyArray = input => !!(isArray(input) && input.length);

module.exports = isNonEmptyArray;