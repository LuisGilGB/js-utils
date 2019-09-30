const assert = require('assert');
const {isEmptyArray} = require('../../index');

const undefinedExpects = false;
const nullExpects = false;
const falseExpects = false;
const trueExpects = false;
const emptyStringExpects = false;
const zeroExpects = false;
const nanExpects = false;
const infinityExpects = false;
const emptyArrayExpects = true;
const emptyObjectExpects = false;
const stringExpects = false;
const numberExpects = false;
const arrayNumbersExpects = false;
const arrayStringsExpects = false;
const arrayObjectsExpects = false;
const objectExpects = false;
const functionExpects = false;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isEmptyArray(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isEmptyArray(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isEmptyArray(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isEmptyArray(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isEmptyArray(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isEmptyArray(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isEmptyArray(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isEmptyArray(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isEmptyArray([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isEmptyArray({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isEmptyArray('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isEmptyArray(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isEmptyArray([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isEmptyArray(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isEmptyArray([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isEmptyArray({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isEmptyArray(() => 'I am a function'), functionExpects);
});