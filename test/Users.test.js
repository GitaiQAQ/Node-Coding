(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Users', function() {
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
    describe('doActivate()', function() {
      return it('账户激活', function(done) {
        return coding.users.doActivate({
          "email": "string",
          "key": "string",
          "password": "string",
          "confirm_password": "string",
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('generateActivatePhoneCode()', function() {
      return it('获取激活账号的手机验证码', function(done) {
        return coding.users.generateActivatePhoneCode({
          "phone": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('activatePhone()', function() {
      return it('激活用手机注册的用户', function(done) {
        return coding.users.activatePhone({
          "phone": "string",
          "code": "string",
          "global_key": "string",
          "email": "string",
          "password": "string",
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getAvatar()', function() {
      return it('获取头像', function(done) {
        return coding.users.getAvatar({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('captcha()', function() {
      return it('检查是否需要验证码', function(done) {
        return coding.users.captcha(action, {
          "realRemoteAddress": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('changeNotificationSetting()', function() {
      return it('修改通知设置', function(done) {
        return coding.users.changeNotificationSetting({
          "settingType": "string",
          "settingContent": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('check()', function() {
      return it('检查email是否没有被注册过', function(done) {
        return coding.users.check({
          "key": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('checkPhone()', function() {
      return it('检查手机是否没有被注册过', function(done) {
        return coding.users.checkPhone({
          "phone": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('checkTwoFactorAuthCode()', function() {
      return it('登录时的两步验证', function(done) {
        return coding.users.checkTwoFactorAuthCode({
          "code": "integer",
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('currentUser()', function() {
      return it('获取当前登录用户信息', function(done) {
        return coding.users.currentUser({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('userEmail()', function() {
      return it('获取当前用户的email', function(done) {
        return coding.users.userEmail({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getNotificationSettings()', function() {
      return it('获取通知设置', function(done) {
        return coding.users.getNotificationSettings({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getGravatar()', function() {
      return it('获取Gravatar头像', function(done) {
        return coding.users.getGravatar({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getUserByGlobalKey()', function() {
      return it('通过个性后缀获取用户信息', function(done) {
        return coding.users.getUserByGlobalKey(global_key, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('doLogin()', function() {
      return it('登录', function(done) {
        return coding.users.doLogin({
          "email": "string",
          "password": "string",
          "j_captcha": "string",
          "remember_me": "string",
          "sid": "string",
          "realRemoteAddress": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('generateLoginPhoneCode()', function() {
      return it('获取登录的手机验证码', function(done) {
        return coding.users.generateLoginPhoneCode({
          "phone": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('doPhoneLogin()', function() {
      return it('使用绑定过的手机号码登录', function(done) {
        return coding.users.doPhoneLogin({
          "phone": "string",
          "code": "string",
          "j_captcha": "string",
          "remember_me": "boolean",
          "realRemoteAddress": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('doLogout()', function() {
      return it('注销登录', function(done) {
        return coding.users.doLogout({
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getUserByName()', function() {
      return it('通过昵称获取用户信息', function(done) {
        return coding.users.getUserByName(name, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('doRegister()', function() {
      return it('注册', function(done) {
        return coding.users.doRegister({
          "email": "string",
          "global_key": "string",
          "j_captcha": "string",
          "realRemoteAddress": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('generateRegisterPhoneCode()', function() {
      return it('获取注册的手机验证码', function(done) {
        return coding.users.generateRegisterPhoneCode({
          "phone": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('doPhoneRegister()', function() {
      return it('使用手机注册', function(done) {
        return coding.users.doPhoneRegister({
          "phone": "string",
          "code": "string",
          "realRemoteAddress": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateInfo()', function() {
      return it('更新用户信息', function(done) {
        return coding.users.updateInfo({
          "tags": "string",
          "name": "string",
          "sex": "string",
          "phone": "string",
          "birthday": "string",
          "location": "string",
          "company": "string",
          "slogan": "string",
          "introduction": "string",
          "job": "string",
          "code": "string",
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updatePassword()', function() {
      return it('修改用户密码', function(done) {
        return coding.users.updatePassword({
          "current_password": "string",
          "password": "string",
          "confirm_password": "string",
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('updateAvatar()', function() {
      return it('更新头像', function(done) {
        return coding.users.updateAvatar({
          "avatar": "string",
          "sid": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('follow()', function() {
      return it('关注用户', function(done) {
        return coding.users.follow({
          "users": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('followers_1()', function() {
      return it('关注我的用户', function(done) {
        return coding.users.followers_1({
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('followers()', function() {
      return it('获取关注默认的用户', function(done) {
        return coding.users.followers(global_key, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('friends_1()', function() {
      return it('我关注的用户列表', function(done) {
        return coding.users.friends_1({
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('friends()', function() {
      return it('指定用户的关注列表', function(done) {
        return coding.users.friends(global_key, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('relationship()', function() {
      return it('是否关注了该用户', function(done) {
        return coding.users.relationship(global_key, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getRelationship()', function() {
      return it('获取我关注和关注我的用户列表', function(done) {
        return coding.users.getRelationship({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getRelationshipWithProjectMember()', function() {
      return it('获取我关注和关注我的用户列表包含成员列表', function(done) {
        return coding.users.getRelationshipWithProjectMember({
          "project_id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('search()', function() {
      return it('搜索用户', function(done) {
        return coding.users.search({
          "key": "string",
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('unfollow()', function() {
      return it('取消关注', function(done) {
        return coding.users.unfollow({
          "users": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('unreadCount()', function() {
      return it('未读消息通知', function(done) {
        return coding.users.unreadCount({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
