const {assert, expect} = require('chai');
const {objectify, isObject} = require('../../dist/index');

const altKey = 'alt'

const stringInput = 'anything';
const numberInput = 1234;
const boolInput = true;
const objectInput = { val: 1 }
const arrayInput = [1, 'a'];

const emptyObject = {}
const nullOutputDefKey = { value: null }
const nullOutputAltKey = { [altKey]: null }
const stringOutputDefKey = { value: stringInput }
const stringOutputAltKey = { [altKey]: stringInput }
const numberOutputDefKey = { value: numberInput }
const numberOutputAltKey = { [altKey]: numberInput }
const boolOutputDefKey = { value: boolInput }
const boolOutputAltKey = { [altKey]: boolInput }
const arrayOutputDefKey = { value: arrayInput }
const arrayOutputAltKey = { [altKey]: arrayInput }

describe('Objectify undefined', () => {
    it('Default key', () => {
        const output = objectify(undefined);
        assert.equal(isObject(output), true);
        expect(output).to.eql(emptyObject);
    });
    it('Alt key', () => {
        const output = objectify(undefined, altKey);
        assert.equal(isObject(output), true);
        expect(output).to.eql(emptyObject);
    });
});
describe('Objectify null', () => {
    it('Default key', () => {
        const output = objectify(null);
        assert.equal(isObject(output), true);
        expect(output).to.eql(nullOutputDefKey);
    });
    it('Alt key', () => {
        const output = objectify(null, altKey);
        assert.equal(isObject(output), true);
        expect(output).to.eql(nullOutputAltKey);
    });
});
describe('Objectify string', () => {
    it('Default key', () => {
        const output = objectify(stringInput);
        assert.equal(isObject(output), true);
        expect(output).to.eql(stringOutputDefKey);
    });
    it('Alt key', () => {
        const output = objectify(stringInput, altKey);
        assert.equal(isObject(output), true);
        expect(output).to.eql(stringOutputAltKey);
    });
});
describe('Objectify number', () => {
    it('Default key', () => {
        const output = objectify(numberInput);
        assert.equal(isObject(output), true);
        expect(output).to.eql(numberOutputDefKey);
    });
    it('Alt key', () => {
        const output = objectify(numberInput, altKey);
        assert.equal(isObject(output), true);
        expect(output).to.eql(numberOutputAltKey);
    });
});
describe('Objectify boolean', () => {
    it('Default key', () => {
        const output = objectify(boolInput);
        assert.equal(isObject(output), true);
        expect(output).to.eql(boolOutputDefKey);
    });
    it('Alt key', () => {
        const output = objectify(boolInput, altKey);
        assert.equal(isObject(output), true);
        expect(output).to.eql(boolOutputAltKey);
    });
});
describe('Objectify object', () => {
    it('Default key', () => {
        const output = objectify(arrayInput);
        assert.equal(isObject(output), true);
        expect(output).to.eql(arrayOutputDefKey);
    });
    it('Alt key', () => {
        const output = objectify(arrayInput, altKey);
        assert.equal(isObject(output), true);
        expect(output).to.eql(arrayOutputAltKey);
    });
});