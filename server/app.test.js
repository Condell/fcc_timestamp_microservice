import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

chai.should();
chai.use(chaiHttp);

describe('Route test', () => {
  it('should have a response status of 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

