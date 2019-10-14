/*
 * Combine and sort as many inputs given into an ordered with unique items array.
 */
const combineArrays = require('./combineArrays');
const sortArray = require('./sortArray');

const combineAndSortArrays = (...inputs) => sortArray(combineArrays(...inputs));

module.exports = combineAndSortArrays;