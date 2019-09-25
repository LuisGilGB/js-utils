/*
 * Returns true if the input is a number, excluding NaN and Infinity values.
 */
const isNumber = input => typeof input === 'number' && isFinite(input);

module.exports = isNumber;