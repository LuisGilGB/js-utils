const {expect} = require('chai');
const {concatArrays} = require('../../dist/index');

describe("Single input tests", () => {
    it("Returns the only input when it is an array", () => {
        expect(concatArrays([1,2])).to.eql([1,2]);
    });
    it("Returns the only input as a single item array with the input as its only item when it's not an array", () => {
        expect(concatArrays(12)).to.eql([12]);
    });
});
describe("Only arrays as inputs tests", () => {
    it("Concatenates two arrays", () => {
        expect(concatArrays([1,2], [3,4])).to.eql([1,2,3,4]);
    });
    it("Concatenates three arrays", () => {
        expect(concatArrays([1,2], [3,4], [5,6])).to.eql([1,2,3,4,5,6]);
    });
});
describe("Mixed inputs (arrays and non-arrays) tests", () => {
    it("Concatenates an array and a non array as an item", () => {
        expect(concatArrays([1,2], 'abc')).to.eql([1,2,'abc']);
    });
    it("Concatenates two arrays and a non array as an item", () => {
        expect(concatArrays([1,2], [3,4], 'abc')).to.eql([1,2,3,4, 'abc']);
    });
    it("Concatenates two arrays and a two non arrays as an item", () => {
        expect(concatArrays([1,2], 7, [3,4], 'abc')).to.eql([1,2,7,3,4, 'abc']);
    });
});
describe("Null and undefined inputs tests", () => {
    it("Concatenates two arrays skipping an undefined in the middle of the parameters", () => {
        expect(concatArrays([1,2], undefined, [3,4])).to.eql([1,2,3,4]);
    });
    it("Concatenates two arrays without skipping a null in the middle of the parameters", () => {
        expect(concatArrays([1,2], null, [3,4])).to.eql([1,2,null,3,4]);
    });
});