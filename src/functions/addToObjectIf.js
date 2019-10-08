/*
 * Add to the input object a value at the field specified by a key if successfully resolves
 * the given condition.
 */
const addToObjectIf = (condFn, obj = {}, value, key) => condFn(value) ? {...obj, [key]: value} : obj;

module.exports = addToObjectIf;