// if it's a string:
//  validate it
//    if its valid parse the string to unix time, return
//    if its not, return null
// if its a number:
//  validate it
//    if its valid, convert it to human time, return
//    if it's not, return null
// send json back to client


import datejs from 'datejs'; // eslint-disable-line no-unused-vars


function parseQueryString(string) {
  return Date.parse(string);
}


function parsedToUnix(parsedDate) {
  const unixTimeMilliseconds = parsedDate.getTime();
  const unixTimeSeconds = unixTimeMilliseconds / 1000;
  return unixTimeSeconds;
}


function parsedToNatural(parsedDate) {
  const naturalString = parsedDate.toString('MMMM dd, yyyy');
  return naturalString;
}


function createCompleteTimestamp(string) {
  const parsedString = parseQueryString(string);
  const parsedUnix = parsedToUnix(parsedString);
  const parsedNatural = parsedToNatural(parsedString);
  const completeTimestamp = {
    unix: parsedUnix,
    natural: parsedNatural,
  };
  return completeTimestamp;
}


export {
  parseQueryString,
  parsedToUnix,
  parsedToNatural,
  createCompleteTimestamp,
};
