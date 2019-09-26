const testFunction = (name) => {
    describe(`Function: ${name}`, () => {
        require(`./test-functions/test-${name}`);
    });
}

testFunction('defaultMapper');
testFunction('exists');