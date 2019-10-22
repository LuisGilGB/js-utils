const {expect} = require('chai');
const {pushToArrayIf} = require('../../dist/index');

const alwaysTrue = () => true;

const shorterThan3Condition = input => input.length < 3;

describe("Always-true condition always pushes the item to the array", () => {
    it("Basic test", () => {
        expect(pushToArrayIf([1,2,3], 4, alwaysTrue)).to.eql([1,2,3,4]);
    });
    it("Pushes null input values", () => {
        expect(pushToArrayIf([1,2,3], null, alwaysTrue)).to.eql([1,2,3,null]);
    });
    it("Pushes even undefined input values", () => {
        expect(pushToArrayIf([1,2,3], undefined, alwaysTrue)).to.eql([1,2,3,undefined]);
    });
});

describe("Tests conditional pushing", () => {
    it("Should push the new item because it successfully matches the condition", () => {
        expect(pushToArrayIf(['a','b','c'], 'd', shorterThan3Condition)).to.eql(['a','b','c','d']);
    });
    it("Shouldn't push the new item because it fails at the condition", () => {
        expect(pushToArrayIf(['a','b','c'], 'abc', shorterThan3Condition)).to.eql(['a','b','c']);
    });
    it("Shouldn't push the new item even if it successfully matches the condition when the inputArray isn't an array", () => {
        expect(pushToArrayIf('abc', 'd', shorterThan3Condition)).to.eql('abc');
    });
});