const {expect} = require('chai');
const {convertArrayToObjectFromKey} = require('../../dist/index');

const inputDefKey = [
    {
        id: 'left',
        name: 'Left',
        value: 2
    },
    {
        id: 'right',
        name: 'Right',
        value: 3
    }
];
const inputAltKey = [
    {
        name: 'movies',
        value: 2
    },
    {
        name: 'films',
        value: 3
    }
]

const expectedOutputDefKey = {
    left: {
        id: 'left',
        name: 'Left',
        value: 2
    },
    right: {
        id: 'right',
        name: 'Right',
        value: 3
    }
}
const expectedOutputAltKey = {
    movies: {
        name: 'movies',
        value: 2
    },
    films: {
        name: 'films',
        value: 3
    }
}

describe('Basic input-output test', () => {
    it('Default key (id)', () => {
        expect(convertArrayToObjectFromKey(inputDefKey)).to.eql(expectedOutputDefKey);
    });
    it('Alt key (name)', () => {
        expect(convertArrayToObjectFromKey(inputAltKey, 'name')).to.eql(expectedOutputAltKey);
    });
});