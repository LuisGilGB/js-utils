const assert = require('assert');
const {isEmptyArray} = require('../../index');

it('Undefined returns false', () => {
    assert.equal(isEmptyArray(undefined), false);
});
it('Null returns false', () => {
    assert.equal(isEmptyArray(null), false);
});
it('False returns false', () => {
    assert.equal(isEmptyArray(false), false);
});
it('True returns false', () => {
    assert.equal(isEmptyArray(true), false);
});
it('Empty string returns false', () => {
    assert.equal(isEmptyArray(''), false);
});
it('0 returns false', () => {
    assert.equal(isEmptyArray(0), false);
});
it('NaN returns false', () => {
    assert.equal(isEmptyArray(NaN), false);
});
it('Infinity returns false', () => {
    assert.equal(isEmptyArray(Infinity), false);
});
it('Empty array returns true', () => {
    assert.equal(isEmptyArray([]), true);
});
it('Empty object returns false', () => {
    assert.equal(isEmptyArray({}), false);
});
it('Arbitrary string returns false', () => {
    assert.equal(isEmptyArray('Arbitrary'), false);
});
it('Array of numbers returns false', () => {
    assert.equal(isEmptyArray([1,2,3]), false);
});
it('Array of strings returns false', () => {
    assert.equal(isEmptyArray(['a','b','c']), false);
});
it('Array of objects returns false', () => {
    assert.equal(isEmptyArray([{v:1},{v:2},{v:3}]), false);
});
it('Arbitrary object returns false', () => {
    assert.equal(isEmptyArray({a:1,b:2,c:3}), false);
});