const identityFunction = require('./identityFunction');
const defaultMapper = require('./defaultMapper');
const exists = require('./exists');
const objectify = require('./objectify');
const isNull = require('./isNull');
const isArray = require('./isArray');
const isString = require('./isString');
const isTruthy = require('./isTruthy');
const isNullOrUndefined = require('./isNullOrUndefined');
const isEmptyArray = require('./isEmptyArray');

module.exports = {
	identityFunction,
    defaultMapper,
    exists,
    objectify,
    isNull,
    isArray,
    isString,
    isTruthy,
    isNullOrUndefined,
    isEmptyArray,
}