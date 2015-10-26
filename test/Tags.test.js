(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Tags', function() {
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
    describe('list_4()', function() {
      return it('标签列表', function(done) {
        return coding.tags.list_4(user, project, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('createTag()', function() {
      return it('创建标签', function(done) {
        return coding.tags.createTag(user, project, {
          "tag_name": "string",
          "tag_point": "string",
          "message": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('deleteTag()', function() {
      return it('删除标签', function(done) {
        return coding.tags.deleteTag(user, project, {
          "tag_name": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
