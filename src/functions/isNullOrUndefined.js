/*
 * Returns true if the input is null or undefined.
 */
const exists = require('./exists');

const isNullOrUndefined = input => input === null || !exists(input);

module.exports = isNullOrUndefined;