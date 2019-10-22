const assert = require('assert');
const {identityFunction} = require('../../dist/index');

const input1 = 7865324;
const input2 = 'just a string';
const input3 = [1, 4, 7, 2, 5];
const input4 = {val1: 'value 1', val2: 2}
const input5 = [{val: 1}, {val: 2}, {val: 3}];

it('Input and output should be the same (null)', () => {
    assert.equal(null, identityFunction(null));
});
it('Input and output should be the same (number)', () => {
    assert.equal(input1, identityFunction(input1));
});
it('Input and output should be the same (string)', () => {
    assert.equal(input2, identityFunction(input2));
});
it('Input and output should be the same (array)', () => {
    assert.equal(input3, identityFunction(input3));
});
it('Input and output should be the same (object)', () => {
    assert.equal(input4, identityFunction(input4));
});
it('Input and output should be the same (array of objects)', () => {
    assert.equal(input5, identityFunction(input5));
});