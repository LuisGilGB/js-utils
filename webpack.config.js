const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'js-utils',
        libraryTarget: 'umd',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    }
}