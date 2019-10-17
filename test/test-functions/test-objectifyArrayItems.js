const {expect} = require('chai');
const {objectifyArrayItems} = require('../../index');

it("Objectify with default key", () => {
    expect(objectifyArrayItems(['a','s','d','f'])).to.eql([{value:'a'},{value:'s'},{value:'d'},{value:'f'}]);
});
it("Objectify with custom key", () => {
    expect(objectifyArrayItems(['a','s','d','f'], 'char')).to.eql([{char:'a'},{char:'s'},{char:'d'},{char:'f'}]);
});
it("Empty array returns an empty array", () => {
    expect(objectifyArrayItems([])).to.eql([]);
});
it("Object returns the object itself", () => {
    expect(objectifyArrayItems({val: 'a'})).to.eql({val: 'a'});
});
it("Number returns objectified number", () => {
    expect(objectifyArrayItems(3)).to.eql({value: 3});
});
it("Undefined returns empty object", () => {
    expect(objectifyArrayItems(undefined)).to.eql({});
});