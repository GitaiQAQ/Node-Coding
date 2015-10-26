(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Pull_requests', function() {
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
    describe('create()', function() {
      return it('创建 PullRequest', function(done) {
        return coding.pullRequests.create(user, project, {
          "src_branch": "string",
          "des_user_name": "string",
          "des_project_name": "string",
          "des_branch": "string",
          "diff": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('show_3()', function() {
      return it('获取某个 PullRequest', function(done) {
        return coding.pullRequests.show_3(user, project, iid, {
          "diff": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('cancel_1()', function() {
      return it('取消 PullRequest', function(done) {
        return coding.pullRequests.cancel_1(user, project, iid, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('comments()', function() {
      return it('PullRequest 评论列表', function(done) {
        return coding.pullRequests.comments(user, project, iid, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('showCommits()', function() {
      return it('获取某个 PullRequest 的评论', function(done) {
        return coding.pullRequests.showCommits(user, project, iid, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('merge_1()', function() {
      return it('合并 PullRequest', function(done) {
        return coding.pullRequests.merge_1(user, project, iid, {
          "message": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('refuse_1()', function() {
      return it('拒绝 PullRequest', function(done) {
        return coding.pullRequests.refuse_1(user, project, iid, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('list_3()', function() {
      return it('PullRequest 列表', function(done) {
        return coding.pullRequests.list_3(user, project, status, {
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
