const utils = require('../../index');
const {defaultMapper} = utils;

const test = () => {
    console.log('Testing defaultMapper function')

    const input1 = [1,2,3];

    console.log(`Input 1: ${input1.toString()}`);

    const output1 = input1.map(defaultMapper);

    console.log(`Output 1: ${output1.toString()}`);
    console.log(`Strict equality: ${input1 === output1}`);
    console.log(`Value as a string equality: ${input1.toString() === output1.toString()}`);
}

module.exports = test;