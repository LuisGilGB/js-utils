const {expect} = require('chai');
const {filterRepeatedItemsInArray} = require('../../dist/index');

it("Returns the same array given in the input when no repeated items are found", () => {
    expect(filterRepeatedItemsInArray([1,2,3])).to.eql([1,2,3]);
});
it("Returns input array without repeated items", () => {
    expect(filterRepeatedItemsInArray([1,2,3,2,3])).to.eql([1,2,3]);
});
it("Returns the input because it is not an array", () => {
    expect(filterRepeatedItemsInArray(123)).to.eql(123);
});
it("Returns undefined because the input is undefined", () => {
    expect(filterRepeatedItemsInArray(undefined)).to.eql(undefined);
});