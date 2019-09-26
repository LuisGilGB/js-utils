const assert = require('assert');
const {exists} = require('../../index');

it('Undefined returns false', () => {
    assert.equal(exists(undefined), false);
});
it('Null returns true', () => {
    assert.equal(exists(null), true);
});
it('False returns true', () => {
    assert.equal(exists(false), true);
});
it('Empty string returns true', () => {
    assert.equal(exists(''), true);
});
it('0 returns true', () => {
    assert.equal(exists(0), true);
});
it('NaN returns true', () => {
    assert.equal(exists(NaN), true);
});
it('Infinity returns true', () => {
    assert.equal(exists(Infinity), true);
});
it('Empty array returns true', () => {
    assert.equal(exists([]), true);
});
it('Empty object returns true', () => {
    assert.equal(exists({}), true);
});
it('Arbitrary string returns true', () => {
    assert.equal(exists('Arbitrary'), true);
});