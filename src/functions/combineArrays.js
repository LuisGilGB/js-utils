/*
 * Combine multiple arrays and params by concatenation and filtering of repeated elements.
 * No deep equality filter supported yet.
 */
const concatArrays = require('./concatArrays');
const filterRepeatedItemsInArray = require('./filterRepeatedItemsInArray');

const combineArrays = (...inputs) => filterRepeatedItemsInArray(concatArrays(...inputs));

module.exports = combineArrays;