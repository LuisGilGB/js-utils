const {expect} = require('chai');
const {sortArray} = require('../../dist/index');

it("Returns the same array given in the input when it is already ordered", () => {
    expect(sortArray([1,2,3])).to.eql([1,2,3]);
});
it("Returns ordered a non ordered input array", () => {
    expect(sortArray([1,3,2])).to.eql([1,2,3]);
});
it("Returns the input because it is not an array", () => {
    expect(sortArray(123)).to.eql(123);
});
it("Returns undefined because the input is undefined", () => {
    expect(sortArray(undefined)).to.eql(undefined);
});