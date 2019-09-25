/*
 * Returns true if the input is an empty object. Null, arrays and functions are excluded.
 */
const isObject = require('./isObject');

const isEmptyObject = input => isObject(input) && Object.keys(input).length === 0;

module.exports = isEmptyObject;