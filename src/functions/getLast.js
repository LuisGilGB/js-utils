/*
 * Returns the last element of an array.
 */
const isNonEmptyArray = require('./isNonEmptyArray');

const getLast = input => isNonEmptyArray(input) ? input.slice(-1)[0] : undefined;

module.exports = getLast;