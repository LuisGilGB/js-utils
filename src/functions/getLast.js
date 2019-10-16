/*
 * Returns the last element of a non empty string (the emptyness of the string is eevaluated after
 * trimming it) or array.
 */
const isNonEmptyString = require('./isNonEmptyString');
const isNonEmptyArray = require('./isNonEmptyArray');

const getLast = input => isNonEmptyString(input) || isNonEmptyArray(input) ? input.slice(-1)[0] : undefined;

module.exports = getLast;