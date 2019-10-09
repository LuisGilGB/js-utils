/*
 * Given an array of from-to keys map (see above in example), assigns the values object to a destination
 * object (empty by default) at the "to" key of the map only if the value to assign is not undefined.
 *
 * Example:
 *
 * - obj: {
 *     id: 'input0',
 *     name: 'Input 0'
 *   }
 * - values: {
 *     id: '1234',
 *     name: 'Pal #1234'
 *   }
 * - map: [{
 *     from: 'id',
 *     to: 'palId'
 *   }, {
 *     from: 'name',
 *     to: 'palName'
 *   }, {
 *     from: 'description',
 *     to: 'palDescription'
 *   }]
 *
 * Then:
 *     mapExistingToObject(obj, values, map)
 *   returns:
 *     {
 *       id: 'input0',
 *       name: 'Input 0',
 *       palId: '1234',
 *       palName: 'Pal #1234'
 *     }
 *
 *   (Look at how the output doesn't have any palDescription just because the values-to-map object doesn't
 *   have any description field).
 */
const addToObjectIfExists = require('./addToObjectIfExists');

const mapExistingToObject = (destinationObject = {}, inputValuesObject = {}, keyMappings = []) => keyMappings.reduce((tempOutput, keyMap) => addToObjectIfExists(tempOutput, inputValuesObject[keyMap.from], keyMap.to), destinationObject);

module.exports = mapExistingToObject;