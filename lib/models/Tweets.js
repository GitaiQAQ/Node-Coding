(function() {
  var BaseModel, Tweets, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Tweets = (function(superClass) {
    extend(Tweets, superClass);

    function Tweets() {
      this.public_tweets = bind(this.public_tweets, this);
      this.unlike_tweet = bind(this.unlike_tweet, this);
      this.getTweetLike = bind(this.getTweetLike, this);
      this.like_tweet = bind(this.like_tweet, this);
      this.deleteTweetUsingDELETE = bind(this.deleteTweetUsingDELETE, this);
      this.query_comment = bind(this.query_comment, this);
      this.delete_commentUsingDELETE = bind(this.delete_commentUsingDELETE, this);
      this.comment = bind(this.comment, this);
      this.detail = bind(this.detail, this);
      this.user_public = bind(this.user_public, this);
      this.public_tweets = bind(this.public_tweets, this);
      this.lastTweet = bind(this.lastTweet, this);
      this.insert_image = bind(this.insert_image, this);
      this.query_a_comment = bind(this.query_a_comment, this);
      this.bestUser = bind(this.bestUser, this);
      this.create_1 = bind(this.create_1, this);
      return Tweets.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: create_1
     description	: 发送冒泡
     path			: 
     query		: device(string),location(string),coord(string),address(string),content(string)
     body			:
     */

    Tweets.prototype.create_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::create_1()");
      return this.post("social/tweet", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: bestUser
     description	: 热门用户
     path			: 
     query		: 
     body			:
     */

    Tweets.prototype.bestUser = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::bestUser()");
      return this.get("social/tweet/best_user", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: query_a_comment
     description	: 获取某个评论
     path			: id
     query		: 
     body			:
     */

    Tweets.prototype.query_a_comment = function(id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::query_a_comment()");
      return this.get(util.format("social/tweet/comment/%s", id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: insert_image
     description	: 冒泡插入图片
     path			: 
     query		: 
     body			:
     */

    Tweets.prototype.insert_image = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::insert_image()");
      return this.post("social/tweet/insert_image", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: lastTweet
     description	: 查询last_id以后的最新冒泡
     path			: 
     query		: default_like_count(integer),last_id(integer)
     body			:
     */

    Tweets.prototype.lastTweet = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::lastTweet()");
      return this.get("social/tweet/last", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: public_tweets
     description	: 冒泡列表
     path			: 
     query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
     body			:
     */

    Tweets.prototype.public_tweets = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::public_tweets()");
      return this.get("social/tweet/public_tweets", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: user_public
     description	: 用户冒泡列表
     path			: 
     query		: last_id(integer),user_id(integer),global_key(string),type(string),default_like_count(integer)
     body			:
     */

    Tweets.prototype.user_public = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::user_public()");
      return this.get("social/tweet/user_public", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: detail
     description	: 获取冒泡详情
     path			: global_key,tweet_id
     query		: default_like_count(integer)
     body			:
     */

    Tweets.prototype.detail = function(global_key, tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::detail()");
      return this.get(util.format("social/tweet/%s/%s", global_key, tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: comment
     description	: 冒泡评论
     path			: id
     query		: content(string),afterFilter(string)
     body			:
     */

    Tweets.prototype.comment = function(id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::comment()");
      return this.post(util.format("social/tweet/%s/comment", id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: delete
     operationId	: delete_commentUsingDELETE
     description	: 删除冒泡评论
     path			: id,comment_id
     query		: 
     body			:
     */

    Tweets.prototype.delete_commentUsingDELETE = function(id, comment_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::delete_commentUsingDELETE()");
      return this["delete"](util.format("social/tweet/%s/comment/%s", id, comment_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: query_comment
     description	: 获取冒泡评论列表
     path			: id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tweets.prototype.query_comment = function(id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::query_comment()");
      return this.get(util.format("social/tweet/%s/comments", id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: delete
     operationId	: deleteTweetUsingDELETE
     description	: 删除冒泡
     path			: tweet_id
     query		: 
     body			:
     */

    Tweets.prototype.deleteTweetUsingDELETE = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::deleteTweetUsingDELETE()");
      return this["delete"](util.format("social/tweet/%s", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: like_tweet
     description	: 冒泡点赞
     path			: tweet_id
     query		: 
     body			:
     */

    Tweets.prototype.like_tweet = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::like_tweet()");
      return this.post(util.format("social/tweet/%s/like", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTweetLike
     description	: 赞过的冒泡列表
     path			: tweet_id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tweets.prototype.getTweetLike = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::getTweetLike()");
      return this.get(util.format("social/tweet/%s/tweetlike", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unlike_tweet
     description	: 冒泡取消点赞
     path			: tweet_id
     query		: 
     body			:
     */

    Tweets.prototype.unlike_tweet = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::unlike_tweet()");
      return this.post(util.format("social/tweet/%s/unlike", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: public_tweets
     description	: 冒泡广场列表
     path			: 
     query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
     body			:
     */

    Tweets.prototype.public_tweets = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::public_tweets()");
      return this.get("tweet/public_tweets", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Tweets;

  })(BaseModel);

  module.exports = function(client) {
    return new Tweets(client);
  };

}).call(this);
