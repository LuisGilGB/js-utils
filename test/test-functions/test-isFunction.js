const assert = require('assert');
const {isFunction} = require('../../index');

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
const arrayNumbersExpects = false;
const arrayStringsExpects = false;
const arrayObjectsExpects = false;
const objectExpects = false;
const functionExpects = true;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isFunction(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isFunction(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isFunction(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isFunction(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isFunction(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isFunction(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isFunction(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isFunction(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isFunction([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isFunction({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isFunction('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isFunction(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isFunction([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isFunction(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isFunction([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isFunction({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isFunction(() => 'I am a function'), functionExpects);
});