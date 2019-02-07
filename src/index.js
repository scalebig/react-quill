/*
React-Quill v1.0.0
https://github.com/zenoamaro/react-quill
*/
var Quill = require('quill');
var Component = require('react-quill/src/component');

module.exports = Component;
module.exports.default = Component;
module.exports.Quill = Quill;
module.exports.Mixin = require('./mixin');
module.exports.Toolbar = require('./toolbar');
