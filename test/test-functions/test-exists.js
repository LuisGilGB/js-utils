const assert = require('assert');
const {exists} = require('../../dist/index');

const undefinedExpects = false;
const nullExpects = true;
const falseExpects = true;
const trueExpects = true;
const emptyStringExpects = true;
const zeroExpects = true;
const nanExpects = true;
const infinityExpects = true;
const emptyArrayExpects = true;
const emptyObjectExpects = true;
const stringExpects = true;
const numberExpects = true;
const arrayNumbersExpects = true;
const arrayStringsExpects = true;
const arrayObjectsExpects = true;
const objectExpects = true;
const functionExpects = true;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(exists(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(exists(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(exists(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(exists(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(exists(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(exists(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(exists(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(exists(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(exists([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(exists({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(exists('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(exists(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(exists([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(exists(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(exists([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(exists({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(exists(() => 'I am a function'), functionExpects);
});