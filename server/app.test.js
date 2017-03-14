import chai from 'chai';
import {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

/* eslint-disable no-unused-expressions */

chai.use(chaiHttp);


describe('GET route tests', () => {
  describe('GET "/" tests', () => {
    it('should respond with json matching the structure defined in the user stories', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('GET "/:timestamp" tests', () => {
    it('should respond with json matching the structure defined in the user stories', (done) => {
      chai.request(app)
        .get('/987634598')
        .end((err, res) => {
          expect(res).to.be.json;
          expect(res).to.have.status(200);
          expect(res.body).to.have.ownProperty('unix');
          expect(res.body).to.have.ownProperty('natural');
          done();
        });
    });
  });
});


//  Make sure to incorporate errors and incorrect input into all tests and functions.

