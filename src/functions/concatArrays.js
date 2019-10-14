/*
 * Concatenates as many arrays as passed as a parameter to form a single array to return.
 * Any non-array input value passed is concatenated as a single item into the output array.
 * Skips undefined inputs.
 */
const isArray = require('./isArray');
const pushToArrayIfExists = require('./pushToArrayIfExists');

const stepFn = (draft, input) => isArray(input) ? [...draft, ...input] : pushToArrayIfExists(draft, input);
const concatArrays = (...inputs) => inputs.reduce(stepFn, []);

module.exports = concatArrays;