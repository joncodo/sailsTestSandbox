var request = require('supertest');
var chai = require('chai');
var q = require('bluebird');
chai.should();

describe('UserController', function() {

  beforeEach(function (done) {
      done();
    });

    afterEach(function (done) {
      //q.all([User.destroy({}), Oauth.destroy({})]).then(function () {

      //get rid of all the data after each test
      q.all([User.destroy({})]).then(function () {
        done();
      });
    });

  describe('dummyData()', function() {
      it('should return the dummyData string', function (done) {
        request(sails.hooks.http.app).get('/dummyData')
        .expect(200)
        .end(function (err, results) {
          if (err) {
            throw err;
          }
          var dummyText = results.res.text;
          dummyText.should.equal('dummyData');

          done();
        });
      });
    });

    describe('generate', function() {
      it('should create a user', function (done) {
        request(sails.hooks.http.app).get('/generate')
        .expect(200)
        .end(function (err, results) {
          if (err) {
            throw err;
          }
          var dummyText = results.res.text;
          //dummyText.should.equal('dummyData');

          User.find().then(function (foundUsers) {
            foundUsers.length.should.equal(1);
            done();
          })
        });
      });
    });
});
