const assert = require('assert');
const {isNumber} = require('../../index');

const undefinedExpects = false;
const nullExpects = false;
const falseExpects = false;
const trueExpects = false;
const emptyStringExpects = false;
const zeroExpects = true;
const nanExpects = false;
const infinityExpects = false;
const emptyArrayExpects = false;
const emptyObjectExpects = false;
const stringExpects = false;
const numberExpects = true;
const arrayNumbersExpects = false;
const arrayStringsExpects = false;
const arrayObjectsExpects = false;
const objectExpects = false;
const functionExpects = false;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isNumber(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isNumber(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isNumber(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isNumber(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isNumber(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isNumber(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isNumber(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isNumber(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isNumber([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isNumber({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isNumber('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isNumber(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isNumber([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isNumber(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isNumber([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isNumber({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isNumber(() => 'I am a function'), functionExpects);
});