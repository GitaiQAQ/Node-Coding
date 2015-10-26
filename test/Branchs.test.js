(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Branchs', function() {
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
    describe('setDefaultBranch()', function() {
      return it('设置默认分支', function(done) {
        return coding.branchs.setDefaultBranch(user, project, {
          "default_branch": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('list()', function() {
      return it('分页显示分支列表', function(done) {
        return coding.branchs.list(user, project, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('createBranch()', function() {
      return it('新建分支', function(done) {
        return coding.branchs.createBranch(user, project, {
          "branch_name": "string",
          "start_point": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('deleteBranch()', function() {
      return it('删除分支', function(done) {
        return coding.branchs.deleteBranch(user, project, {
          "branch_name": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('addProtectedBranchMember()', function() {
      return it('添加保护分支成员', function(done) {
        return coding.branchs.addProtectedBranchMember(user, project, {
          "branch_name": "string",
          "target_global_key": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('disableProtectedBranch()', function() {
      return it('取消保护分支', function(done) {
        return coding.branchs.disableProtectedBranch(user, project, {
          "branch_name": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('enableProtectedBranch()', function() {
      return it('设置保护分支', function(done) {
        return coding.branchs.enableProtectedBranch(user, project, {
          "branch_name": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listProtectedBranchMember()', function() {
      return it('列出保护分支中的成员', function(done) {
        return coding.branchs.listProtectedBranchMember(user, project, {
          "branch_name": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('removeProtectedBranchMember()', function() {
      return it('删除保护分支成员', function(done) {
        return coding.branchs.removeProtectedBranchMember(user, project, {
          "branch_name": "string",
          "target_global_key": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
