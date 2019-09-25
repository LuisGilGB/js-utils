/*
 * Returns true if the input is undefined or null.
 */
const exists = require('./exists');

const isNullOrUndefined = input => input === null || exists(input);

module.exports = isNullOrUndefined;