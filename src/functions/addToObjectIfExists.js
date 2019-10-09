/*
 * Add a value to an object at a new field if that value is not undefined.
 */
const addToObjectIf = require('./addToObjectIf');
const exists = require('./exists');

const addToObjectIfExists = (obj = {}, value, key) => addToObjectIf(exists, obj, value, key);

module.exports = addToObjectIfExists;