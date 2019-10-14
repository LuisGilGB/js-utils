/*
 * Combine multiple arrays and params by concatenation and filtering of repeated elements.
 * No deep equality filter supported yet.
 */
const concatArrays = require('./concatArrays');

const filterRepeatedItems = (item, index, array) => array.indexOf(item) === index;

const combineArrays = (...inputs) => concatArrays(...inputs).filter(filterRepeatedItems);

module.exports = combineArrays;