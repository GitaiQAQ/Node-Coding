(function() {
  var assert, should;

  assert = require('assert');

  should = require('should');

  describe('Tweets', function() {
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
    describe('create_1()', function() {
      return it('发送冒泡', function(done) {
        return coding.tweets.create_1({
          "device": "string",
          "location": "string",
          "coord": "string",
          "address": "string",
          "content": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('bestUser()', function() {
      return it('热门用户', function(done) {
        return coding.tweets.bestUser({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('query_a_comment()', function() {
      return it('获取某个评论', function(done) {
        return coding.tweets.query_a_comment(id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('insert_image()', function() {
      return it('冒泡插入图片', function(done) {
        return coding.tweets.insert_image({}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('lastTweet()', function() {
      return it('查询last_id以后的最新冒泡', function(done) {
        return coding.tweets.lastTweet({
          "default_like_count": "integer",
          "last_id": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('public_tweets()', function() {
      return it('冒泡列表', function(done) {
        return coding.tweets.public_tweets({
          "sort": "string",
          "last_id": "integer",
          "default_like_count": "integer",
          "filter": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('user_public()', function() {
      return it('用户冒泡列表', function(done) {
        return coding.tweets.user_public({
          "last_id": "integer",
          "user_id": "integer",
          "global_key": "string",
          "type": "string",
          "default_like_count": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('detail()', function() {
      return it('获取冒泡详情', function(done) {
        return coding.tweets.detail(global_key, tweet_id, {
          "default_like_count": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('comment()', function() {
      return it('冒泡评论', function(done) {
        return coding.tweets.comment(id, {
          "content": "string",
          "afterFilter": "string"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('delete_commentUsingDELETE()', function() {
      return it('删除冒泡评论', function(done) {
        return coding.tweets.delete_commentUsingDELETE(id, comment_id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('query_comment()', function() {
      return it('获取冒泡评论列表', function(done) {
        return coding.tweets.query_comment(id, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('deleteTweetUsingDELETE()', function() {
      return it('删除冒泡', function(done) {
        return coding.tweets.deleteTweetUsingDELETE(tweet_id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('like_tweet()', function() {
      return it('冒泡点赞', function(done) {
        return coding.tweets.like_tweet(tweet_id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('getTweetLike()', function() {
      return it('赞过的冒泡列表', function(done) {
        return coding.tweets.getTweetLike(tweet_id, {
          "page": "integer",
          "pageSize": "integer"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    describe('unlike_tweet()', function() {
      return it('冒泡取消点赞', function(done) {
        return coding.tweets.unlike_tweet(tweet_id, {}, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
    return describe('public_tweets()', function() {
      return it('冒泡广场列表', function(done) {
        return coding.tweets.public_tweets({
          "sort": "string",
          "last_id": "integer",
          "default_like_count": "integer",
          "filter": "boolean"
        }, function(result) {
          result.code.should.equal(0);
          should.exist(result["data"]);
          return done();
        });
      });
    });
  });

}).call(this);
