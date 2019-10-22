const {expect} = require('chai');
const {mapExistingToObject} = require('../../dist/index');

const destinationObject = {
    id: 'input0',
    name: 'Input 0'
}

const withDescriptionInput = {
    id: '5678',
    name: 'Pal #5678',
    description: 'This is the pal #5678'
}
const withoutDescriptionInput = {
    id: '1234',
    name: 'Pal #1234'
}

const keyMappings = [{
    from: 'id',
    to: 'palId'
}, {
    from: 'name',
    to: 'palName'
}, {
    from: 'description',
    to: 'palDescription'
}];

const withPalDescriptionOutput = {
    id: 'input0',
    name: 'Input 0',
    palId: '5678',
    palName: 'Pal #5678',
    palDescription: 'This is the pal #5678'
}
const withoutPalDescriptionOutput = {
    id: 'input0',
    name: 'Input 0',
    palId: '1234',
    palName: 'Pal #1234'
}

it("Adds all the input values following the key mappings", () => {
    expect(mapExistingToObject(destinationObject, withDescriptionInput, keyMappings)).to.eql(withPalDescriptionOutput);
});
it('Adds all the input values to the destination object but the description because it is not defined', () => {
    expect(mapExistingToObject(destinationObject, withoutDescriptionInput, keyMappings)).to.eql(withoutPalDescriptionOutput);
});