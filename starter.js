require('babel-polyfill');
require('babel-register')({
    presets: ['electron', 'react'],
    plugins: ["transform-object-rest-spread", "transform-class-properties"]
})

module.exports = require('./main.js')