const assert = require('assert');
const utils = require('../../index');
const {defaultMapper} = utils;

const input1 = [1,2,3];

it('Input and output after a map with defaultMapper should be the same', () => {
    assert.equal(input1.toString(), input1.map(defaultMapper).toString());
});