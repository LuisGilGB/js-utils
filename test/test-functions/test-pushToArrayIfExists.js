const {expect} = require('chai');
const {pushToArrayIfExists} = require('../../index');

it("Truthy input is pushed", () => {
    expect(pushToArrayIfExists([1,2,3], 4)).to.eql([1,2,3,4]);
});
it("Null input is pushed", () => {
    expect(pushToArrayIfExists([1,2,3], null)).to.eql([1,2,3,null]);
});
it("Undefined input is not pushed", () => {
    expect(pushToArrayIfExists([1,2,3], undefined)).to.eql([1,2,3]);
});