/*
 * Push a new item to an array if it successfully matches a condition.
 *
 * Returns the inputArray if it isn't an array.
 */
const isArray = require('./isArray');

const pushToArrayIf = (inputArray, inputItem, condFn) => isArray(inputArray) && condFn(inputItem, inputArray) ? [...inputArray, inputItem] : inputArray;

module.exports = pushToArrayIf;