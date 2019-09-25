/*
 * Returns true if the input is null, undefined, an empty string, an empty array or an empty object.
 */
const isNullOrUndefined = require('./isNullOrUndefined');
const isEmptyArray = require('./isEmptyArray');
const isEmptyObject = require('./isEmptyObject');

const isEmpty = input => isNullOrUndefined(input) || input === '' || isEmptyArray(input) || isEmptyObject(input);

module.exports = isEmpty;