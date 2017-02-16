import datejs from 'datejs'; // eslint-disable-line no-unused-vars


function queryStringToDate(string) {
  if (Number.parseInt(string)) {
    let epochDate = new Date(0);
    let unixNumber = Number.parseInt(string);
    let unixDateNumber = epochDate.setUTCSeconds(unixNumber);
    return new Date(unixDateNumber);
  } else {
    return Date.parse(string);
  }
}



function parsedToUnix(parsedDate) {
  if (parsedDate === null) {
    return null;
  } else {
    const unixTimeMilliseconds = parsedDate.getTime();
    const unixTimeSeconds = unixTimeMilliseconds / 1000;
    return unixTimeSeconds;
  }
}


function parsedToNatural(parsedDate) {
  if (parsedDate === null) {
    return null;
  } else {
    const naturalString = parsedDate.toString('MMMM dd, yyyy');
    return naturalString;
  }
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
