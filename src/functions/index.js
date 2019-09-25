const identityFunction = require('./identityFunction');
const defaultMapper = require('./defaultMapper');
const exists = require('./exists');
const objectify = require('./objectify');
const isNull = require('./isNull');
const isString = require('./isString');
const isNumber = require('./isNumber');
const isArray = require('./isArray');
const isObject = require('./isObject');
const isFunction = require('./isFunction');
const isTruthy = require('./isTruthy');
const isNullOrUndefined = require('./isNullOrUndefined');
const isEmptyArray = require('./isEmptyArray');
const isEmptyObject = require('./isEmptyObject');

module.exports = {
	identityFunction,
    defaultMapper,
    exists,
    objectify,
    isNull,
    isString,
    isNumber,
    isArray,
    isObject,
    isFunction,
    isTruthy,
    isNullOrUndefined,
    isEmptyArray,
    isEmptyObject,
}