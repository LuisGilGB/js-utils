const assert = require('assert');
const {isNull} = require('../../index');

const undefinedExpects = false;
const nullExpects = true;
const falseExpects = false;
const trueExpects = false;
const emptyStringExpects = false;
const zeroExpects = false;
const nanExpects = false;
const infinityExpects = false;
const emptyArrayExpects = false;
const emptyObjectExpects = false;
const stringExpects = false;
const numberExpects = false;
const arrayNumbersExpects = false;
const arrayStringsExpects = false;
const arrayObjectsExpects = false;
const objectExpects = false;

it(`Undefined returns `, () => {
    assert.equal(isNull(undefined), undefinedExpects);
});
it(`Null returns `, () => {
    assert.equal(isNull(null), nullExpects);
});
it(`False returns `, () => {
    assert.equal(isNull(false), falseExpects);
});
it(`True returns `, () => {
    assert.equal(isNull(true), trueExpects);
});
it(`Empty string returns `, () => {
    assert.equal(isNull(''), emptyStringExpects);
});
it(`0 returns `, () => {
    assert.equal(isNull(0), zeroExpects);
});
it(`NaN returns `, () => {
    assert.equal(isNull(NaN), nanExpects);
});
it(`Infinity returns `, () => {
    assert.equal(isNull(Infinity), infinityExpects);
});
it(`Empty array returns `, () => {
    assert.equal(isNull([]), emptyArrayExpects);
});
it(`Empty object returns `, () => {
    assert.equal(isNull({}), emptyObjectExpects);
});
it(`Arbitrary string returns `, () => {
    assert.equal(isNull('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns `, () => {
    assert.equal(isNull(1234), numberExpects);
});
it(`Array of numbers returns `, () => {
    assert.equal(isNull([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns `, () => {
    assert.equal(isNull(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns `, () => {
    assert.equal(isNull([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns `, () => {
    assert.equal(isNull({a:1,b:2,c:3}), objectExpects);
});