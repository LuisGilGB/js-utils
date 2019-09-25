const functionsTests = require('./test-functions');

const tests = [
    ...functionsTests
];

const runTest = () => {
    functionsTests.forEach(test => test());
}

runTest();