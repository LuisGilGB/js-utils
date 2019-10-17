/*
 * Given an input object and an input value, pushes the last one to the array at a given key in the input
 * object (if, in fact, that array exists).
 *
 * If the field at the given key doesn't exist, creates an array with the input value as the only item.
 */
const exists = require('./exists');
const isObject = require('./isObject');
const isArray = require('./isArray');
const isNonEmptyString = require('./isNonEmptyString');

const pushToArrayAtKey = (inputObject, value, key) => {
    if (isObject(inputObject) && isNonEmptyString(key)) {
        const targetField = inputObject[key];
        if (isArray(targetField)) {
            return {
                ...inputObject,
                [key]: [...targetField, value]
            }
        } else if (!exists(targetField)) {
            return {
                ...inputObject,
                [key]: [value]
            }
        }
    }
    return inputObject;
}

module.exports = pushToArrayAtKey;