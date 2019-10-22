const {expect} = require('chai');
const {getLast} = require('../../dist/index');

describe("Get the last element of a string", () => {
    it("Many chars string", () => {
        expect(getLast('qwerty')).to.eql('y');
    });
    it("One char array", () => {
        expect(getLast('x')).to.eql('x');
    });
    it("Last char is a space", () => {
        expect(getLast('asdf ')).to.eql(' ');
    });
});

describe("Get the last element of an array", () => {
    it("Numbers array", () => {
        expect(getLast([1,2,3])).to.eql(3);
    });
    it("Strings array", () => {
        expect(getLast(['a','s','d','f'])).to.eql('f');
    });
    it("Arrays array", () => {
        expect(getLast([[1,6],[2,5],[3,4]])).to.eql([3,4]);
    });
    it("Objects array", () => {
        expect(getLast([{value:'1'},{value:'a'}])).to.eql({value:'a'});
    });
});

describe("Returns undefined when it must", () => {
    it("Number input", () => {
        expect(getLast(1)).to.eql(undefined);
    });
    it("Object input", () => {
        expect(getLast({value:1, label: 'uno'})).to.eql(undefined);
    });
    it("Boolean input", () => {
        expect(getLast(true)).to.eql(undefined);
    });
    it("Null input", () => {
        expect(getLast(null)).to.eql(undefined);
    });
    it("Undefined input", () => {
        expect(getLast(undefined)).to.eql(undefined);
    });
    it("Empty string input", () => {
        expect(getLast('')).to.eql(undefined);
    });
    it("Only char is a space", () => {
        expect(getLast(' ')).to.eql(undefined);
    });
    it("Empty array input", () => {
        expect(getLast([])).to.eql(undefined);
    });
})