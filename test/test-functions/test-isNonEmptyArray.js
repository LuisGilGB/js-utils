const assert = require('assert');
const {isNonEmptyArray} = require('../../dist/index');

const undefinedExpects = false;
const nullExpects = false;
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
const arrayNumbersExpects = true;
const arrayStringsExpects = true;
const arrayObjectsExpects = true;
const objectExpects = false;
const functionExpects = false;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isNonEmptyArray(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isNonEmptyArray(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isNonEmptyArray(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isNonEmptyArray(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isNonEmptyArray(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isNonEmptyArray(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isNonEmptyArray(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isNonEmptyArray(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isNonEmptyArray([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isNonEmptyArray({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isNonEmptyArray('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isNonEmptyArray(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isNonEmptyArray([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isNonEmptyArray(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isNonEmptyArray([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isNonEmptyArray({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isNonEmptyArray(() => 'I am a function'), functionExpects);
});