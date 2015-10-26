(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Projects', function() {
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
    describe('getPinProjects()', function() {
      return it('获取常用项目列表', function(done) {
        return coding.projects.getPinProjects({
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateUsingPUT_1()', function() {
      return it('更新项目信息', function(done) {
        return coding.projects.updateUsingPUT_1({
          "id": "string",
          "name": "string",
          "description": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('recommendedList()', function() {
      return it('推荐项目list', function(done) {
        return coding.projects.recommendedList({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('publicProject()', function() {
      return it('公有项目列表', function(done) {
        return coding.projects.publicProject({
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('queryByName()', function() {
      return it('通过名称查询', function(done) {
        return coding.projects.queryByName(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('setProjectIcon()', function() {
      return it('设置项目图标', function(done) {
        return coding.projects.setProjectIcon(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('star()', function() {
      return it('收藏项目', function(done) {
        return coding.projects.star(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('stared()', function() {
      return it('项目是否被收藏', function(done) {
        return coding.projects.stared(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('unstar()', function() {
      return it('项目取消收藏', function(done) {
        return coding.projects.unstar(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('unwatch()', function() {
      return it('项目取消关注', function(done) {
        return coding.projects.unwatch(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('visitProject()', function() {
      return it('更新项目阅读时间', function(done) {
        return coding.projects.visitProject(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('watch()', function() {
      return it('关注项目', function(done) {
        return coding.projects.watch(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('watched()', function() {
      return it('项目是否被关注', function(done) {
        return coding.projects.watched(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('watchers()', function() {
      return it('项目关注者', function(done) {
        return coding.projects.watchers(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('project_list()', function() {
      return it('我的项目列表', function(done) {
        return coding.projects.project_list({
          "type": "string",
          "sort": "string",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('private_projects()', function() {
      return it('私有项目列表', function(done) {
        return coding.projects.private_projects({
          "type": "string",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('createProject()', function() {
      return it('创建项目', function(done) {
        return coding.projects.createProject(global_key, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('public_projects()', function() {
      return it('公有项目列表', function(done) {
        return coding.projects.public_projects(global_key, {
          "type": "string",
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
