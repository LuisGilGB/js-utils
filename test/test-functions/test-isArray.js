const assert = require('assert');
const {isArray} = require('../../index');

it('Undefined returns false', () => {
    assert.equal(isArray(undefined), false);
});
it('Null returns false', () => {
    assert.equal(isArray(null), false);
});
it('False returns false', () => {
    assert.equal(isArray(false), false);
});
it('Empty string returns false', () => {
    assert.equal(isArray(''), false);
});
it('0 returns false', () => {
    assert.equal(isArray(0), false);
});
it('NaN returns false', () => {
    assert.equal(isArray(NaN), false);
});
it('Infinity returns false', () => {
    assert.equal(isArray(Infinity), false);
});
it('Empty array returns true', () => {
    assert.equal(isArray([]), true);
});
it('Empty object returns false', () => {
    assert.equal(isArray({}), false);
});
it('Arbitrary string returns false', () => {
    assert.equal(isArray('Arbitrary'), false);
});
it('Array of numbers returns true', () => {
    assert.equal(isArray([1,2,3]), true);
});
it('Array of strings returns true', () => {
    assert.equal(isArray(['a','b','c']), true);
});
it('Array of objects returns true', () => {
    assert.equal(isArray([{v:1},{v:2},{v:3}]), true);
});
it('Arbitrary object returns false', () => {
    assert.equal(isArray({a:1,b:2,c:3}), false);
});