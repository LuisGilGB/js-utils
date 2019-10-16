/*
 * Returns the input array mapped the way the input items are now objectified.
 * If the input is not an array, the function returns the objectified input.
 */
const isArray = require('./isArray');
const objectify = require('./objectify');

const objectifyArrayItems = (input, key = 'value') => isArray(input) ? input.map(item => objectify(item, key)) : objectify(item, key);

module.exports = objectifyArrayItems;