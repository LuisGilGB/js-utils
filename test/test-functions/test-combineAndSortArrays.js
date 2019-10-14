const {expect} = require('chai');
const {combineAndSortArrays} = require('../../index');

describe("Single input tests", () => {
    it("Returns the only input when it is an ordered array", () => {
        expect(combineAndSortArrays([1,2])).to.eql([1,2]);
    });
    it("Returns the only input as a single item array with the input as its only item when it's not an array", () => {
        expect(combineAndSortArrays(12)).to.eql([12]);
    });
    it("Returns the only input but sorted", () => {
        expect(combineAndSortArrays([2,1])).to.eql([1,2]);
    });
    it("Returns the only input but combined", () => {
        expect(combineAndSortArrays([1,2,2,1])).to.eql([1,2]);
    });
    it("Returns the only input but combined and sorted", () => {
        expect(combineAndSortArrays([2,2,1])).to.eql([1,2]);
    });
})
describe("Only arrays as inputs tests", () => {
    it("Combines and sorts two arrays", () => {
        expect(combineAndSortArrays([1,3,5], [4,5,6,2])).to.eql([1,2,3,4,5,6]);
    });
    it("Combines and sorts three arrays", () => {
        expect(combineAndSortArrays([1,2,6], [3,4,9,5,1], [9,3])).to.eql([1,2,3,4,5,6,9]);
    });
});
describe("Mixed inputs (arrays and non-arrays) tests", () => {
    it("Combines and sorts array and non array inputs", () => {
        expect(combineAndSortArrays([6], 15, [3,4], 3, [1,2])).to.eql([1,2,3,4,6,15]);
    });
    it("Combines and sorts a numbers array and a string", () => {
        expect(combineAndSortArrays([1,2], 'abc')).to.eql([1,2,'abc']);
    });
});
describe("Null and undefined inputs tests", () => {
    it("Combines and sorts two arrays and skips a null input already found in any of the input arrays", () => {
        expect(combineAndSortArrays([1,3,null], [2,4], null)).to.eql([null,1,2,3,4]);
    });
    it("The repeated null skip works even when the null input is found first in a non array param", () => {
        expect(combineAndSortArrays([1,3], null, [2,null,4])).to.eql([null,1,2,3,4]);
    });
});