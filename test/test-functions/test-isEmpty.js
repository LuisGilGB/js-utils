const assert = require('assert');
const {isEmpty} = require('../../index');

it('Undefined returns true', () => {
    assert.equal(isEmpty(undefined), true);
});
it('Null returns true', () => {
    assert.equal(isEmpty(null), true);
});
it('False returns true', () => {
    assert.equal(isEmpty(false), true);
});
it('True returns false', () => {
    assert.equal(isEmpty(true), false);
});
it('Empty string returns true', () => {
    assert.equal(isEmpty(''), true);
});
it('0 returns false', () => {
    assert.equal(isEmpty(0), false);
});
it('NaN returns false', () => {
    assert.equal(isEmpty(NaN), false);
});
it('Infinity returns false', () => {
    assert.equal(isEmpty(Infinity), false);
});
it('Empty array returns true', () => {
    assert.equal(isEmpty([]), true);
});
it('Empty object returns true', () => {
    assert.equal(isEmpty({}), true);
});
it('Arbitrary string returns false', () => {
    assert.equal(isEmpty('Arbitrary'), false);
});
it('Array of numbers returns false', () => {
    assert.equal(isEmpty([1,2,3]), false);
});
it('Array of strings returns false', () => {
    assert.equal(isEmpty(['a','b','c']), false);
});
it('Array of objects returns false', () => {
    assert.equal(isEmpty([{v:1},{v:2},{v:3}]), false);
});
it('Arbitrary object returns false', () => {
    assert.equal(isEmpty({a:1,b:2,c:3}), false);
});