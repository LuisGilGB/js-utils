const functionsTests = require('./test-functions');

const tests = [
    ...functionsTests
];

const executeTest = () => {
    functionsTests.forEach(test => test());
}

executeTest();