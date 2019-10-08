/*
 * Add to the input object a value at the field specified by a key if successfully resolves
 * the given condition. The key must be a valid non empty string.
 */
const {isNonEmptyString} = require('../../index');

const addToObjectIf = (condFn, obj = {}, value, key) => isNonEmptyString(key) && condFn(value) ? {...obj, [key]: value} : obj;

module.exports = addToObjectIf;