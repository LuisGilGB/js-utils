const assert = require('assert');
const utils = require('../../dist/index');
const {defaultMapper} = utils;

const input1 = [1,2,3];
const input2 = ['a', 'b', 'c', 'd'];
const input3 = [{val: 1}, {val: 2}, {val: 3}];

it('Input and output after a map with defaultMapper should be the same (numbers array)', () => {
    assert.equal(input1.toString(), input1.map(defaultMapper).toString());
});
it('Input and output after a map with defaultMapper should be the same (strings array)', () => {
    assert.equal(input2.toString(), input2.map(defaultMapper).toString());
});
it('Input and output after a map with defaultMapper should be the same (objects array)', () => {
    assert.equal(input3.toString(), input3.map(defaultMapper).toString());
});