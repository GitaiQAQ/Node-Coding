(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Tasks', function() {
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
      return it('创建任务', function(done) {
        return coding.tasks.create(project, {
          "owner_id": "string",
          "priority": "integer",
          "deadline": "string",
          "description": "string",
          "content": "string",
          "labels": "string",
          "watchers": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getTask()', function() {
      return it('创建任务', function(done) {
        return coding.tasks.getTask(project, id, {
          "parseDescription": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listOfOwner()', function() {
      return it('列出某人的任务列表', function(done) {
        return coding.tasks.listOfOwner(project, owner, status, {
          "page": "integer",
          "pageSize": "integer",
          "key": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('taskCreating()', function() {
      return it('全局任务创建', function(done) {
        return coding.tasks.taskCreating({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('taskCountByUser()', function() {
      return it('任务统计信息', function(done) {
        return coding.tasks.taskCountByUser(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('update4clientUsingPUT()', function() {
      return it('修改任务', function(done) {
        return coding.tasks.update4clientUsingPUT(user, project, id, {
          "status": "integer",
          "priority": "integer",
          "id": "integer",
          "owner_id": "integer",
          "deadline": "string",
          "description": "string",
          "content": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('pubComment()', function() {
      return it('创建任务评论', function(done) {
        return coding.tasks.pubComment(user, project, id, {
          "content": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('deleteCommentUsingDELETE()', function() {
      return it('删除任务评论', function(done) {
        return coding.tasks.deleteCommentUsingDELETE(user, project, id, commentId, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getComments()', function() {
      return it('获取任务评论', function(done) {
        return coding.tasks.getComments(user, project, id, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateContentUsingPUT()', function() {
      return it('修改任务内容', function(done) {
        return coding.tasks.updateContentUsingPUT(user, project, id, {
          "content": "string",
          "id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateDeadlineUsingPUT()', function() {
      return it('修改任务截止日期', function(done) {
        return coding.tasks.updateDeadlineUsingPUT(user, project, id, {
          "deadline": "string",
          "id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getDescription()', function() {
      return it('获取任务描述', function(done) {
        return coding.tasks.getDescription(user, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('addTaskLabel()', function() {
      return it('添加任务标签', function(done) {
        return coding.tasks.addTaskLabel(user, project, id, labelId, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('operateTaskLabels()', function() {
      return it('批量操作任务标签', function(done) {
        return coding.tasks.operateTaskLabels(user, project, id, {
          "label_id": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateOwnerUsingPUT()', function() {
      return it('修改任务执行者', function(done) {
        return coding.tasks.updateOwnerUsingPUT(user, project, id, {
          "owner_id": "integer",
          "id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updatePriorityUsingPUT()', function() {
      return it('修改任务优先级', function(done) {
        return coding.tasks.updatePriorityUsingPUT(user, project, id, {
          "priority": "integer",
          "id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateStatusUsingPUT()', function() {
      return it('修改任务状态', function(done) {
        return coding.tasks.updateStatusUsingPUT(user, project, id, {
          "status": "integer",
          "id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('watch_2()', function() {
      return it('关注任务', function(done) {
        return coding.tasks.watch_2(user, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('pageTaskWatchers()', function() {
      return it('关注该任务的用户', function(done) {
        return coding.tasks.pageTaskWatchers(user, project, id, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('userTasksCount()', function() {
      return it(' 获取当前用户项目的已完成、正在进行的、关注的数值', function(done) {
        return coding.tasks.userTasksCount(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('userTasksCountInProject()', function() {
      return it('统计所有 已完成 和 正在处理 的任务数', function(done) {
        return coding.tasks.userTasksCountInProject(user, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getTaskByLabel()', function() {
      return it('查询标签下的任务列表', function(done) {
        return coding.tasks.getTaskByLabel(user, project, id, {
          "page": "integer",
          "pageSize": "integer",
          "global_key": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('userTasksOfProject()', function() {
      return it('列出当前用户某项目某状态的任务列表', function(done) {
        return coding.tasks.userTasksOfProject(user, project, status, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('list_5()', function() {
      return it('任务列表', function(done) {
        return coding.tasks.list_5(user, project, status, {
          "page": "integer",
          "pageSize": "integer",
          "key": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('userTasks()', function() {
      return it('当前用户某状态的任务列表', function(done) {
        return coding.tasks.userTasks(user, status, {
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
