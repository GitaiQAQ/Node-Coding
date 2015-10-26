(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Historys', function() {
    var coding, projectName, realId, realSecret, testName, userName;
    coding = null;
    realId = "1ef6d9c909016bc8c3cdaa344d114262";
    realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512";
    projectName = "Node-Coding";
    userName = "gitai";
    testName = "dphdjy";
    before(function() {
      return coding = new require('..')({
        url: "https://coding.net",
        cache: "./temp"
      });
    });
    beforeEach(function() {});
    return describe('history()', function() {
      return it('获取代码的历史', function(done) {
        return coding.historys.history(user, project, commits, {
          "page": "integer",
          "pageSize": "integer",
          "ref": "string",
          "path": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
