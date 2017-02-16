import {
  expect,
} from 'chai';
import {
  queryStringToDate,
  parsedToUnix,
  parsedToNatural,
  createCompleteTimestamp,
} from './calcResponse';
import datejs from 'datejs';

// Add Error cases.

/* eslint-disable no-unused-expressions */


describe('calcResponse tests', () => {
  const queryStringUnix = '100000';
  const queryStringNatural = 'January 1, 2014';
  const newDate = new Date();
  const nullDate = Date.parse('incorrect');
  describe('queryStringToDate function', () => {
    it('should exist', () => {
      expect(queryStringToDate(queryStringUnix)).to.exist;
    });
    it('should return a Date object', () => {
      expect(queryStringToDate(queryStringUnix)).to.be.an.instanceof(Date);
    });
    it('should return the correct Date object when given a unix value', () => {
      expect(queryStringToDate(queryStringUnix)).to.be.ok;
    });
    it('should return the correct Date object when given a natural value', () => {
      expect(queryStringToDate(queryStringNatural)).to.be.ok;
    });
  });
  describe('parsedToUnix function', () => {
    it('should exist', () => {
      expect(parsedToUnix(newDate)).to.exist;
    });
    it('should return a Number', () => {
      expect(parsedToUnix(newDate)).to.be.a('number');
    });
    it('should return null for non parsable strings', () => {
      expect(parsedToUnix(nullDate)).to.be.null;
    });
  });
  describe('parsedToNatural function', () => {
    it('should exist', () => {
      expect(parsedToNatural(newDate)).to.exist;
    });
    it('should return a String', () => {
      expect(parsedToNatural(newDate)).to.be.a('string');
    });
    it('should return null for non parsable strings', () => {
      expect(parsedToNatural(nullDate)).to.be.null;
    });
  });
  describe('createCompleteTimestamp function', () => {
    it('should exist', () => {
      expect(createCompleteTimestamp(newDate)).to.exist;
    });
    it('should return an Object', () => {
      expect(createCompleteTimestamp(newDate)).to.be.an('object');
    });
  });
});
