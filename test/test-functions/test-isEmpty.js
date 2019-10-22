const assert = require('assert');
const {isEmpty} = require('../../dist/index');

const undefinedExpects = true;
const nullExpects = true;
const falseExpects = false;
const trueExpects = false;
const emptyStringExpects = true;
const zeroExpects = false;
const nanExpects = false;
const infinityExpects = false;
const emptyArrayExpects = true;
const emptyObjectExpects = true;
const stringExpects = false;
const numberExpects = false;
const arrayNumbersExpects = false;
const arrayStringsExpects = false;
const arrayObjectsExpects = false;
const objectExpects = false;
const functionExpects = false;

it(`Undefined returns ${undefinedExpects}`, () => {
    assert.equal(isEmpty(undefined), undefinedExpects);
});
it(`Null returns ${nullExpects}`, () => {
    assert.equal(isEmpty(null), nullExpects);
});
it(`False returns ${falseExpects}`, () => {
    assert.equal(isEmpty(false), falseExpects);
});
it(`True returns ${trueExpects}`, () => {
    assert.equal(isEmpty(true), trueExpects);
});
it(`Empty string returns ${emptyStringExpects}`, () => {
    assert.equal(isEmpty(''), emptyStringExpects);
});
it(`0 returns ${zeroExpects}`, () => {
    assert.equal(isEmpty(0), zeroExpects);
});
it(`NaN returns ${nanExpects}`, () => {
    assert.equal(isEmpty(NaN), nanExpects);
});
it(`Infinity returns ${infinityExpects}`, () => {
    assert.equal(isEmpty(Infinity), infinityExpects);
});
it(`Empty array returns ${emptyArrayExpects}`, () => {
    assert.equal(isEmpty([]), emptyArrayExpects);
});
it(`Empty object returns ${emptyObjectExpects}`, () => {
    assert.equal(isEmpty({}), emptyObjectExpects);
});
it(`Arbitrary string returns ${stringExpects}`, () => {
    assert.equal(isEmpty('Arbitrary'), stringExpects);
});
it(`Arbitrary number returns ${numberExpects}`, () => {
    assert.equal(isEmpty(1234), numberExpects);
});
it(`Array of numbers returns ${arrayNumbersExpects}`, () => {
    assert.equal(isEmpty([1,2,3]), arrayNumbersExpects);
});
it(`Array of strings returns ${arrayStringsExpects}`, () => {
    assert.equal(isEmpty(['a','b','c']), arrayStringsExpects);
});
it(`Array of objects returns ${arrayObjectsExpects}`, () => {
    assert.equal(isEmpty([{v:1},{v:2},{v:3}]), arrayObjectsExpects);
});
it(`Arbitrary object returns ${objectExpects}`, () => {
    assert.equal(isEmpty({a:1,b:2,c:3}), objectExpects);
});
it(`Arbitrary function returns ${functionExpects}`, () => {
    assert.equal(isEmpty(() => 'I am a function'), functionExpects);
});