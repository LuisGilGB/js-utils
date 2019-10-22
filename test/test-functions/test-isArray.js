const assert = require('assert');
const {isArray} = require('../../dist/index');

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
const arrayNumbersExpects = true;
const arrayStringsExpects = true;
const arrayObjectsExpects = true;
const objectExpects = false;
const functionExpects = false;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isArray(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isArray(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isArray(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isArray(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isArray(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isArray(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isArray(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isArray(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isArray([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isArray({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isArray('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isArray(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isArray([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isArray(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isArray([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isArray({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isArray(() => 'I am a function'), functionExpects);
});