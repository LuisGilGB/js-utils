/*
 * Push an item to an array if that item exists.
 */
const pushToArrayIf = require('./pushToArrayIf');
const exists = require('./exists');

const pushToArrayIfExists = (inputArray, inputItem) => pushToArrayIf(inputArray, inputItem, exists);

module.exports = pushToArrayIfExists;