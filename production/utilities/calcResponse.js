'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompleteTimestamp = exports.parsedToNatural = exports.parsedToUnix = exports.queryStringToDate = undefined;

var _datejs = require('datejs');

var _datejs2 = _interopRequireDefault(_datejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars


function queryStringToDate(string) {
  if (Number.parseInt(string, 10)) {
    var epochDate = new Date(0);
    var unixNumber = Number.parseInt(string, 10);
    var unixDateNumber = epochDate.setUTCSeconds(unixNumber);
    if (new Date(unixDateNumber) == 'Invalid Date') {
      // eslint-disable-line eqeqeq
      return null;
    }
    return new Date(unixDateNumber);
  }
  if (new Date(string) == 'Invalid Date') {
    // eslint-disable-line eqeqeq
    return null;
  }
  return Date.parse(string);
}

function parsedToUnix(parsedDate) {
  if (parsedDate === null) {
    return null;
  }
  var unixTimeMilliseconds = parsedDate.getTime();
  var unixTimeSeconds = unixTimeMilliseconds / 1000;
  return unixTimeSeconds;
}

function parsedToNatural(parsedDate) {
  if (parsedDate === null) {
    return null;
  }
  var naturalString = parsedDate.toString('MMMM d, yyyy');
  return naturalString;
}

function createCompleteTimestamp(string) {
  var parsedString = queryStringToDate(string);
  var parsedUnix = parsedToUnix(parsedString);
  var parsedNatural = parsedToNatural(parsedString);
  var completeTimestamp = {
    unix: parsedUnix,
    natural: parsedNatural
  };
  return completeTimestamp;
}

exports.queryStringToDate = queryStringToDate;
exports.parsedToUnix = parsedToUnix;
exports.parsedToNatural = parsedToNatural;
exports.createCompleteTimestamp = createCompleteTimestamp;