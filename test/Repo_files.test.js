(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Repo_files', function() {
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
    describe('delete_file()', function() {
      return it('删除文件', function(done) {
        return coding.repoFiles.delete_file(user, project, file, {
          "ref": "string",
          "path": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('edit_file()', function() {
      return it('更新文件', function(done) {
        return coding.repoFiles.edit_file(user, project, file, {
          "ref": "string",
          "path": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('create_file()', function() {
      return it('新建文件', function(done) {
        return coding.repoFiles.create_file(user, project, file, {
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
