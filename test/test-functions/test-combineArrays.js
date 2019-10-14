const {expect} = require('chai');
const {combineArrays} = require('../../index');

describe("Single input tests", () => {
    it("Returns the only input when it is an array", () => {
        expect(combineArrays([1,2])).to.eql([1,2]);
    });
    it("Returns the only input but combined", () => {
        expect(combineArrays([1,2,2,1])).to.eql([1,2]);
    });
    it("Returns the only input as a single item array with the input as its only item when it's not an array", () => {
        expect(combineArrays(12)).to.eql([12]);
    });
})
describe("Only arrays as inputs tests", () => {
    it("Concatenates two arrays without sharing items", () => {
        expect(combineArrays([1,2,3], [4,5,6])).to.eql([1,2,3,4,5,6]);
    });
    it("Concatenates three arrays without sharing items", () => {
        expect(combineArrays([1,2,3], [4,5,6], [7,8,9])).to.eql([1,2,3,4,5,6,7,8,9]);
    });
    it("Combines two arrays with some sharing items", () => {
        expect(combineArrays([1,2,3], [2,3,4])).to.eql([1,2,3,4]);
    });
    it("Combines three arrays with some sharing items", () => {
        expect(combineArrays([1,2,3], [3,4,5], [4,5,6])).to.eql([1,2,3,4,5,6]);
    });
});
describe("Mixed inputs (arrays and non-arrays) tests", () => {
    it("Concatenates an array and a non array as an item not found in the input array", () => {
        expect(combineArrays([1,2], 'abc')).to.eql([1,2,'abc']);
    });
    it("Concatenates two arrays and a non array as an item not found in any input array", () => {
        expect(combineArrays([1,2], [3,4], 'abc')).to.eql([1,2,3,4, 'abc']);
    });
    it("Combines two arrays and skips a non array input found in any of the input arrays", () => {
        expect(combineArrays([1,2], [3,4], 3)).to.eql([1,2,3,4]);
    });
});
describe("Null and undefined inputs tests", () => {
    it("Combines two arrays and skips a null input already found in any of the input arrays", () => {
        expect(combineArrays([1,2,null], [3,4], null)).to.eql([1,2,null,3,4]);
    });
    it("The repeated null skip works even when the null input is found first in a non array param", () => {
        expect(combineArrays([1,2], null, [3,null,4])).to.eql([1,2,null,3,4]);
    });
});