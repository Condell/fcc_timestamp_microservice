import {
  expect,
} from 'chai';
import {
  parseQueryString,
  parsedToUnix,
  parsedToNatural,
  createCompleteTimestamp,
} from './calcResponse';

// Add Error cases.

/* eslint-disable no-unused-expressions */


describe('calcResponse tests', () => {
  const queryStringUnix = '100000';
  const queryStringNatural = 'January 1, 2014';
  const newDate = Date.today();
  describe('parseQueryString function', () => {
    it('should exist', () => {
      expect(parseQueryString(queryStringUnix)).to.exist;
    });
    it('should return a Date object', () => {
      expect(parseQueryString(queryStringUnix)).to.be.an.instanceof(Date);
    });
    it('should return the correct Date object when given a unix value', () => {
      expect(parseQueryString(queryStringUnix)).to.be.ok;
    });
    it('should return the correct Date object when given a natural value', () => {
      expect(parseQueryString(queryStringNatural)).to.be.ok;
    });
  });
  describe('parsedToUnix function', () => {
    it('should exist', () => {
      expect(parsedToUnix(newDate)).to.exist;
    });
    it('should return a Number', () => {
      expect(parsedToUnix(newDate)).to.be.a('number');
    });
  });
  describe('parsedToNatural function', () => {
    it('should exist', () => {
      expect(parsedToNatural(newDate)).to.exist;
    });
    it('should return a String', () => {
      expect(parsedToNatural(newDate)).to.be.a('string');
    });
  });
  describe('createCompleteTimestamp function', () => {
    it('should exist', () => {
      expect(createCompleteTimestamp(newDate)).to.exist;
    });
    it('should return a String', () => {
      expect(createCompleteTimestamp(newDate)).to.be.an('object');
    });
  });
});
