import datejs from 'datejs'; // eslint-disable-line no-unused-vars


function queryStringToDate(string) {
  if (Number.parseInt(string, 10)) {
    const epochDate = new Date(0);
    const unixNumber = Number.parseInt(string, 10);
    const unixDateNumber = epochDate.setUTCSeconds(unixNumber);
    return new Date(unixDateNumber);
  }

  return Date.parse(string);
}


function parsedToUnix(parsedDate) {
  if (parsedDate === null) {
    return null;
  }
  const unixTimeMilliseconds = parsedDate.getTime();
  const unixTimeSeconds = unixTimeMilliseconds / 1000;
  return unixTimeSeconds;
}


function parsedToNatural(parsedDate) {
  //  Need to improve validation for dates like November 54 2010
  if (parsedDate === null) {
    return null;
  }
  const naturalString = parsedDate.toString('MMMM d, yyyy');
  return naturalString;
}


function createCompleteTimestamp(string) {
  const parsedString = queryStringToDate(string);
  const parsedUnix = parsedToUnix(parsedString);
  const parsedNatural = parsedToNatural(parsedString);
  const completeTimestamp = {
    unix: parsedUnix,
    natural: parsedNatural,
  };
  return completeTimestamp;
}


export {
  queryStringToDate,
  parsedToUnix,
  parsedToNatural,
  createCompleteTimestamp,
};
