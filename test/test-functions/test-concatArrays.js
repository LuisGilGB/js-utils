const {expect} = require('chai');
const {concatArrays} = require('../../index');

it("Concatenates two arrays", () => {
    expect(concatArrays([1,2], [3,4])).to.eql([1,2,3,4]);
});
it("Concatenates three arrays", () => {
    expect(concatArrays([1,2], [3,4], [5,6])).to.eql([1,2,3,4,5,6]);
});
it("Concatenates an array and a non array as an item", () => {
    expect(concatArrays([1,2], 'abc')).to.eql([1,2,'abc']);
});
it("Concatenates two arrays and a non array as an item", () => {
    expect(concatArrays([1,2], [3,4], 'abc')).to.eql([1,2,3,4, 'abc']);
});
it("Concatenates two arrays skipping an undefined in the middle of the parameters", () => {
    expect(concatArrays([1,2], undefined, [3,4])).to.eql([1,2,3,4]);
});
it("Concatenates two arrays without skipping a null in the middle of the parameters", () => {
    expect(concatArrays([1,2], null, [3,4])).to.eql([1,2,null,3,4]);
});