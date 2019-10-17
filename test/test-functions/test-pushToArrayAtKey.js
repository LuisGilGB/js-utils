const {expect} = require('chai');
const {pushToArrayAtKey} = require('../../index');

it("Default use case", () => {
    expect(pushToArrayAtKey({a:'a',b:[1,3]}, 5, 'b')).to.eql({a:'a',b:[1,3,5]});
});
it("Default use case with an empty array at the target field", () => {
    expect(pushToArrayAtKey({a:'a',b:[]}, 5, 'b')).to.eql({a:'a',b:[5]});
});
it("Creates an array at the given key field with the value if that field doesn't exist", () => {
    expect(pushToArrayAtKey({a:'a'}, 5, 'b')).to.eql({a:'a',b:[5]});
});
it("Returns the input object when the target field exists and it's not an array", () => {
    expect(pushToArrayAtKey({a:'a',b:1}, 5, 'b')).to.eql({a:'a',b:1});
});
it("Returns the input object when it isn't an object", () => {
    expect(pushToArrayAtKey(1, 5, 'b')).to.eql(1);
});
describe("Returns the input object when the key is not a valid string", () => {
    it("The key is not a string", () => {
        expect(pushToArrayAtKey({a:'a',b:[1,3]}, 5, 8)).to.eql({a:'a',b:[1,3]});
    });
    it("The key is an empty string", () => {
        expect(pushToArrayAtKey({a:'a',b:[1,3]}, 5, '')).to.eql({a:'a',b:[1,3]});
    });
});