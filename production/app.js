'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _calcResponse = require('./utilities/calcResponse');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express2.default)();
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use((0, _morgan2.default)('dev'));
}

app.use(_express2.default.static('public'));

app.get('/', function (req, res) {
  res.json((0, _calcResponse.createCompleteTimestamp)('928357984'));
});

app.get('/:timestamp', function (req, res) {
  var timestamp = req.params.timestamp;
  res.json((0, _calcResponse.createCompleteTimestamp)(timestamp));
});

// TODO: Set up Catch statement + general Error Handler


app.listen(port, function () {});

exports.default = app;