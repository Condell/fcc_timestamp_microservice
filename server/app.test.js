import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

chai.should();
chai.use(chaiHttp);


// describe('GET "/" test', () => {
//   it('should respond with JSON');
// });

describe('GET route tests', () => {
  describe('Initial GET "/:timestamp" tests', () => {
    it('should return a json response equal to the timestamp passed in (1000)', (done) => {
      chai.request(app)
        .get('/1000')
        .end((err, res) => {
          res.should.be.json; // eslint-disable-line no-unused-expressions
          done();
        });
    });
    it('should return a json response equal to the timestamp passed in (2000)', (done) => {
      chai.request(app)
        .get('/2000')
        .end((err, res) => {
          res.should.be.json; // eslint-disable-line no-unused-expressions
          done();
        });
    });
  });


  describe('Final GET "/:timestamp" tests', () => {
    it('should return correct json if queryString is a valid unix timestamp');
    it('should return correct json if queryString is a valid natural language date');
    it('should return null json if queryString is not valid');
  });
});
