(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Project_topics', function() {
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
    describe('projectTopicList()', function() {
      return it('项目讨论列表', function(done) {
        return coding.projectTopics.projectTopicList(user, project, {
          "orderBy": "integer",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('topicCount()', function() {
      return it('所有讨论的个数和我的讨论的个数', function(done) {
        return coding.projectTopics.topicCount(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getProjectTopicByLabel()', function() {
      return it('通过标签获得讨论列表', function(done) {
        return coding.projectTopics.getProjectTopicByLabel(user, project, id, {
          "orderBy": "integer",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getMyLabelByProject()', function() {
      return it('所有讨论的个数和我的讨论的个数', function(done) {
        return coding.projectTopics.getMyLabelByProject(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('myProjectTopicList()', function() {
      return it('我的讨论', function(done) {
        return coding.projectTopics.myProjectTopicList(user, project, {
          "orderBy": "integer",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('myWatchingProjectTopics()', function() {
      return it('获取我关注的讨论列表', function(done) {
        return coding.projectTopics.myWatchingProjectTopics(user, project, {
          "orderBy": "integer",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('projectTopicDetail()', function() {
      return it('讨论详情', function(done) {
        return coding.projectTopics.projectTopicDetail(user, project, id, {
          "type": "integer",
          "toc": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('projectTopicComments()', function() {
      return it('讨论评论列表', function(done) {
        return coding.projectTopics.projectTopicComments(user, project, id, {
          "page": "integer",
          "pageSize": "integer",
          "type": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('addTopicLabel()', function() {
      return it('讨论添加标签', function(done) {
        return coding.projectTopics.addTopicLabel(user, project, id, labelId, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('operateTopicLabels()', function() {
      return it('批量操作讨论标签', function(done) {
        return coding.projectTopics.operateTopicLabels(user, project, id, {
          "label_id": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('watch_1()', function() {
      return it('关注讨论', function(done) {
        return coding.projectTopics.watch_1(user, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('getTopicWatchers()', function() {
      return it('获取关注该讨论的用户', function(done) {
        return coding.projectTopics.getTopicWatchers(user, project, id, {
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
