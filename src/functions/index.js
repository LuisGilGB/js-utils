const convertArrayToObjectFromKey = require('./convertArrayToObjectFromKey');
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
const isNullOrUndefined = require('./isNullOrUndefined');
const isEmptyString = require('./isEmptyString');
const isEmptyArray = require('./isEmptyArray');
const isEmptyObject = require('./isEmptyObject');
const isEmpty = require('./isEmpty');
const isNonEmptyString = require('./isNonEmptyString');
const addToObjectIf = require('./addToObjectIf');
const addToObjectIfExists = require('./addToObjectIfExists');
const mapExistingToObject = require('./mapExistingToObject');

module.exports = {
    convertArrayToObjectFromKey,
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
    isNullOrUndefined,
    isEmptyString,
    isEmptyArray,
    isEmptyObject,
    isEmpty,
    isNonEmptyString,
    addToObjectIf,
    addToObjectIfExists,
    mapExistingToObject
}