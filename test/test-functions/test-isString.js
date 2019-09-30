const assert = require('assert');
const {isString} = require('../../index');

const undefinedExpects = false;
const nullExpects = false;
const falseExpects = false;
const trueExpects = false;
const emptyStringExpects = true;
const zeroExpects = false;
const nanExpects = false;
const infinityExpects = false;
const emptyArrayExpects = false;
const emptyObjectExpects = false;
const stringExpects = true;
const numberExpects = false;
const arrayNumbersExpects = false;
const arrayStringsExpects = false;
const arrayObjectsExpects = false;
const objectExpects = false;
const functionExpects = false;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isString(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isString(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isString(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isString(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isString(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isString(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isString(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isString(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isString([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isString({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isString('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isString(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isString([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isString(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isString([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isString({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isString(() => 'I am a function'), functionExpects);
});