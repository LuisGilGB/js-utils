/*
 * Returns true if the input is an empty array.
 * This means that false is returned for inputs that aren't arrays.
 */
const isArray = require('./isArray');

const isEmptyArray = input => isArray(input) && input.length === 0;

module.exports = isEmptyArray;