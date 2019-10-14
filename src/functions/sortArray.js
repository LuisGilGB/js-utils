/*
 * Does a basic array sort.
 */
const isArray = require('./isArray');

const sortFn = (a,b) => a-b;
const sortArray = (input) => isArray(input) ? input.sort(sortFn) : input;

module.exports = sortArray;