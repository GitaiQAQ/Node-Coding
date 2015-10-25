(function() {
  var Coding, assert, coding, global_key, id, port, project, secret, user;

  assert = require('assert');

  Coding = require('..');

  coding = new Coding({
    url: "https://coding.net",
    cache: "./temp"
  });

  id = "2deaa488ed11bf3d1c7f37bdfd58ec54";

  secret = "37124c46b1105ce9f0495259e5c08e0465a045d5";

  port = 8001;

  project = "Coding-Cli-nodejs";

  user = "dphdjy";

  global_key = "wangfeiping";

  describe('OAuth', function() {
    return describe('authorize()', function() {
      return it('OAuth 授权', function(done) {
        this.timeout(10000);
        coding.oauth.authorize(id, secret, null, null, function(result) {});
        return done();
      });
    });
  });

  describe('Users', function() {
    describe('doActivateUsingPOST()', function() {
      return it('账户激活', function(done) {
        return done();
      });
    });
    describe('_generateActivatePhoneCodeUsingPOST()', function() {
      return it('获取激活账号的手机验证码', function(done) {
        return done();
      });
    });
    describe('_activatePhoneUsingPOST()', function() {
      return it('激活用手机注册的用户', function(done) {
        return done();
      });
    });
    describe('getAvatarUsingGET()', function() {
      return it('获取头像', function(done) {
        coding.users.getAvatarUsingGET(function(result) {});
        return done();
      });
    });
    describe('captchaUsingGET()', function() {
      return it('检查是否需要验证码', function(done) {
        coding.users.captchaUsingGET(function(result) {});
        return done();
      });
    });
    describe('changeNotificationSettingUsingGET()', function() {
      return it('修改通知设置', function(done) {
        coding.users.changeNotificationSettingUsingGET(function(result) {});
        return done();
      });
    });
    describe('checkUsingGET()', function() {
      return it('检查email是否没有被注册过', function(done) {
        coding.users.checkUsingGET(function(result) {});
        return done();
      });
    });
    describe('_checkPhoneUsingGET()', function() {
      return it('检查手机是否没有被注册过', function(done) {
        coding.users._checkPhoneUsingGET(function(result) {});
        return done();
      });
    });
    describe('checkTwoFactorAuthCodeUsingPOST()', function() {
      return it('登录时的两步验证', function(done) {
        coding.users.checkTwoFactorAuthCodeUsingPOST(function(result) {});
        return done();
      });
    });
    return describe('checkTwoFactorAuthCodeUsingPOST()', function() {
      return it('获取当前登录用户信息', function(done) {
        coding.users.checkTwoFactorAuthCodeUsingPOST(function(result) {});
        return done();
      });
    });
  });

}).call(this);
