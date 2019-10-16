/*
 * Returns an object with the given inputValue assigned as the value for the given key.
 * If the input already is an object, the function returns it.
 * If the input doesn't exist, returns an empty object.
 *
 * Example: objectify(3, 'number') returns the object { number: 3 }
 */
const exists = require('./exists');
const isObject = require('./isObject');

const objectify = (input, key = 'value') => exists(input) ? isObject(input) ? input : {[key]: input} : {};

module.exports = objectify;