(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Depots', function() {
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
    describe('index()', function() {
      return it('获取仓库信息', function(done) {
        return coding.depots.index(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('fork()', function() {
      return it('fork', function(done) {
        return coding.depots.fork(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('forks()', function() {
      return it('项目被fork的列表', function(done) {
        return coding.depots.forks(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('createWebHook()', function() {
      return it('创建 webhook', function(done) {
        return coding.depots.createWebHook(user, project, {
          "hook_url": "string",
          "token": "string",
          "type_push": "boolean",
          "type_mr_pr": "boolean",
          "type_topic": "boolean",
          "type_member": "boolean",
          "type_comment": "boolean",
          "type_document": "boolean",
          "type_watch": "boolean",
          "type_star": "boolean",
          "type_task": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getWebHook()', function() {
      return it('获取 webhook', function(done) {
        return coding.depots.getWebHook(user, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listWebHook()', function() {
      return it('列出项目设置的 webhook', function(done) {
        return coding.depots.listWebHook(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('importRepo()', function() {
      return it('导入仓库', function(done) {
        return coding.depots.importRepo(user, project, {
          "origin_url": "string",
          "vcs_type": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('initDepot()', function() {
      return it('初始化仓库', function(done) {
        return coding.depots.initDepot(user, project, {
          "type": "string",
          "gitReadmeEnabled": "string",
          "gitIgnore": "string",
          "gitLicense": "string",
          "importFrom": "string",
          "vcsType": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
