/*
 * Takes an array and creates an object in which input's items are stored as values for the
 * output's field whose key is the value of the item's property with a specified key name.
 *
 * Remember this function requires input array's items to be objects and the key should
 * be one of a field with unique values to work properly.
 *
 * Summary: input as array -> output as object
 *
 * Example:
 * - Input:
 *     [
 *         {
 *             name: 'top',
 *             value: 2
 *         },
 *         {
 *             name: 'bottom',
 *             value: 0
 *         }
 *     ]
 *
 * - Run convertArrayToObjectFromKey(input, 'name')
 *
 * - Output:
 *     {
 *         top: {
 *             name: 'top',
 *             value: 2
 *         },
 *         bottom: {
 *             name: 'bottom',
 *             value: 0
 *         }
 *     }
 */
const converterStep = (key = 'id') => (tempAns = {}, item = {}) => ({...tempAns, [item[key]]: item});

const convertArrayToObjectFromKey = (input = [], key = 'id') => input.reduce(converterStep(key), {});

module.exports = convertArrayToObjectFromKey;