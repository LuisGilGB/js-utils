/*
 * Add to the input object a value at the field specified by a key if successfully resolves
 * the given condition. The input object must, obviously, be an object and key must be a valid
 * non empty string.
 */
const isObject = require('./isObject');
const isNonEmptyString = require('./isNonEmptyString');

const addToObjectIf = (condFn, obj = {}, value, key) => isObject(obj) && isNonEmptyString(key) && condFn(value) ? {...obj, [key]: value} : obj;

module.exports = addToObjectIf;