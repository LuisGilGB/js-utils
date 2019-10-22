const {expect} = require('chai');
const {addToObjectIfExists} = require('../../dist/index');

const inputObject = {
    prevValue: 123
}

const key = 'newValue';
const definedInput = 123;

const outputObject = {
    ...inputObject,
    [key]: definedInput
}

it('Output object remains the same than input object if input value is undefined', () => {
    expect(addToObjectIfExists(inputObject, undefined, key)).to.eql(inputObject);
});
it('Adds the new value to the input object in the field of the given key', () => {
    expect(addToObjectIfExists(inputObject, definedInput, key)).to.eql(outputObject);
});