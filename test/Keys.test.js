(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Keys', function() {
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
    describe('show_1()', function() {
      return it('通过KeyId获取个人公钥', function(done) {
        return coding.keys.show_1(global_key, keyId, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('list_1()', function() {
      return it('列出个人公钥', function(done) {
        return coding.keys.list_1(global_key, {
          "withIDEKey": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('bindDeployKey()', function() {
      return it('绑定部署公钥', function(done) {
        return coding.keys.bindDeployKey(global_key, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('saveDeployKey()', function() {
      return it('新建部署公钥', function(done) {
        return coding.keys.saveDeployKey(global_key, project, {
          "title": "string",
          "content": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('listDeployKeys()', function() {
      return it('列出部署公钥', function(done) {
        return coding.keys.listDeployKeys(global_key, project, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('unBindDeployKey()', function() {
      return it('解绑部署公钥', function(done) {
        return coding.keys.unBindDeployKey(global_key, project, id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
