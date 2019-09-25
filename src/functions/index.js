const identityFunction = require('./identityFunction');
const defaultMapper = require('./defaultMapper');
const exists = require('./exists');
const objectify = require('./objectify');
const isArray = require('./isArray');
const isString = require('./isString');
const isTruthy = require('./isTruthy');
const isNullOrUndefined = require('./isNullOrUndefined');

module.exports = {
	identityFunction,
    defaultMapper,
    exists,
    objectify,
    isArray,
    isString,
    isTruthy,
    isNullOrUndefined,
}