/*
 * Returns the input array without repeated items.
 * Deep equality filter not supported yet.
 *
 * If the input is not an array, the output is the input itself.
 */
const isArray = require('./isArray');

const stepFn = (item, index, array) => array.indexOf(item) === index;
const filterRepeatedItemsInArray = (input) => isArray(input) ? input.filter(stepFn) : input;

module.exports = filterRepeatedItemsInArray;