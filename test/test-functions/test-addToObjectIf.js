const {expect} = require('chai');
const {addToObjectIf} = require('../../index');

const alwaysTrue = () => true;

const shorterThan3Condition = input => input.length < 3;

const inputObject = {
    prevValue: 123
}

const key = 'newValue';
const emptyStringKey = '';
const spaceKey = ' ';
const boolKey = true;
const numKey = 1;
const arrayKey = [1,2,'c'];
const objectKey = {a:1,b:2,c:3}
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

describe('Always true condition input-output tests', () => {
    it('Short input test (new key - value must be added)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, key)).to.eql(outputForShort);
    });
    it('Long input test (new key - value must be added)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, longInput, key)).to.eql(outputForLong);
    });
});

describe('Shorter than true condition input-output tests', () => {
    it('Short input test (new key - value must be added)', () => {
        expect(addToObjectIf(shorterThan3Condition, inputObject, shortInput, key)).to.eql(outputForShort);
    });
    it('Long input test (the output remains the same than the input)', () => {
        expect(addToObjectIf(shorterThan3Condition, inputObject, longInput, key)).to.eql(inputObject);
    });
});

describe('Non valid keys tests', () => {
    it('Empty string key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, emptyStringKey)).to.eql(inputObject);
    });
    it('Space string key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, spaceKey)).to.eql(inputObject);
    });
    it('Boolean key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, boolKey)).to.eql(inputObject);
    });
    it('Number key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, numKey)).to.eql(inputObject);
    });
    it('Array key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, arrayKey)).to.eql(inputObject);
    });
    it('Object key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, objectKey)).to.eql(inputObject);
    });
    it('Null key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput, null)).to.eql(inputObject);
    });
    it('Undefined key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(alwaysTrue, inputObject, shortInput)).to.eql(inputObject);
    });
});