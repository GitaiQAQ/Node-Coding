(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Merge_requests', function() {
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
    describe('do_create()', function() {
      return it('创建 MergeRequest', function(done) {
        return coding.mergeRequests.do_create(user, project, {
          "srcBranch": "string",
          "desBranch": "string",
          "title": "string",
          "content": "string",
          "reviewers": "string",
          "tasks": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('show_2()', function() {
      return it('显示某个 MergeRequest', function(done) {
        return coding.mergeRequests.show_2(user, project, iid, {
          "diff": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('cancel()', function() {
      return it('取消 MergeRequest', function(done) {
        return coding.mergeRequests.cancel(user, project, iid, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('merge()', function() {
      return it('合并某个 MergeRequest', function(done) {
        return coding.mergeRequests.merge(user, project, iid, {
          "message": "string",
          "del_source_branch": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('refuse()', function() {
      return it('拒绝某个 MergeRequest', function(done) {
        return coding.mergeRequests.refuse(user, project, iid, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('list_2()', function() {
      return it('MergeRequest 列表', function(done) {
        return coding.mergeRequests.list_2(user, project, status, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
