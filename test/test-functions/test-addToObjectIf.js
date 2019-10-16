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
        expect(addToObjectIf(inputObject, shortInput, key, alwaysTrue)).to.eql(outputForShort);
    });
    it('Long input test (new key - value must be added)', () => {
        expect(addToObjectIf(inputObject, longInput, key, alwaysTrue)).to.eql(outputForLong);
    });
});

describe('Shorter than true condition input-output tests', () => {
    it('Short input test (new key - value must be added)', () => {
        expect(addToObjectIf(inputObject, shortInput, key, shorterThan3Condition)).to.eql(outputForShort);
    });
    it('Long input test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, longInput, key, shorterThan3Condition)).to.eql(inputObject);
    });
});

describe('Non valid keys tests', () => {
    it('Empty string key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, emptyStringKey, alwaysTrue)).to.eql(inputObject);
    });
    it('Space string key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, spaceKey, alwaysTrue)).to.eql(inputObject);
    });
    it('Boolean key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, boolKey, alwaysTrue)).to.eql(inputObject);
    });
    it('Number key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, numKey, alwaysTrue)).to.eql(inputObject);
    });
    it('Array key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, arrayKey, alwaysTrue)).to.eql(inputObject);
    });
    it('Object key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, objectKey, alwaysTrue)).to.eql(inputObject);
    });
    it('Null key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, null, alwaysTrue)).to.eql(inputObject);
    });
    it('Undefined key test (the output remains the same than the input)', () => {
        expect(addToObjectIf(inputObject, shortInput, undefined, alwaysTrue)).to.eql(inputObject);
    });
});

describe('When an object is not provided, the output remains the same', () => {
    it('Object input is a number', () => {
        expect(addToObjectIf(numKey, shortInput, key, alwaysTrue)).to.eql(numKey);
    });
    it('Object input is a string', () => {
        expect(addToObjectIf(key, shortInput, key, alwaysTrue)).to.eql(key);
    });
    it('Object input is an array', () => {
        expect(addToObjectIf(arrayKey, shortInput, key, alwaysTrue)).to.eql(arrayKey);
    });
})