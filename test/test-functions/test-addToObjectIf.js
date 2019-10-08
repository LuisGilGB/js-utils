const {expect} = require('chai');
const {addToObjectIf} = require('../../index');

const alwaysTrue = () => true;

const shorterThan3Condition = input => input.length < 3;

const inputObject = {
    prevValue: 123
}

const key = 'newValue';
const shortInput = 'ok';
const longInput = 'all right';

const outputForShort = {
    ...inputObject,
    [key]: shortInput
}
const outputForLong = {
    ...inputObject,
    [key]: longInput
}

describe('Always true condition input-output test', () => {
    it('Short input test (new key - value must be added)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, key)).to.eql(outputForShort);
    });
    it('Long input test (new key - value must be added)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, longInput, key)).to.eql(outputForLong);
    });
});

describe('Shorter than true condition input-output test', () => {
    it('Short input test (new key - value must be added)', () => {
        expect(addToObjectIf(shorterThan3Condition, inputObject, shortInput, key)).to.eql(outputForShort);
    });
    it('Long input test (the output remains the same than the input)', () => {
        expect(addToObjectIf(shorterThan3Condition, inputObject, longInput, key)).to.eql(inputObject);
    });
});