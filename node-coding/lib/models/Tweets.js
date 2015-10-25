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
      this._public_tweetsUsingGET = bind(this._public_tweetsUsingGET, this);
      this.unlike_tweetUsingPOST = bind(this.unlike_tweetUsingPOST, this);
      this.getTweetLikeUsingGET = bind(this.getTweetLikeUsingGET, this);
      this.like_tweetUsingPOST = bind(this.like_tweetUsingPOST, this);
      this.deleteTweetUsingDELETE = bind(this.deleteTweetUsingDELETE, this);
      this.query_commentUsingGET = bind(this.query_commentUsingGET, this);
      this.delete_commentUsingDELETE = bind(this.delete_commentUsingDELETE, this);
      this.commentUsingPOST = bind(this.commentUsingPOST, this);
      this.detailUsingGET = bind(this.detailUsingGET, this);
      this.user_publicUsingGET = bind(this.user_publicUsingGET, this);
      this.public_tweetsUsingGET = bind(this.public_tweetsUsingGET, this);
      this.lastTweetUsingGET = bind(this.lastTweetUsingGET, this);
      this.insert_imageUsingPOST = bind(this.insert_imageUsingPOST, this);
      this.query_a_commentUsingGET = bind(this.query_a_commentUsingGET, this);
      this.bestUserUsingGET = bind(this.bestUserUsingGET, this);
      this.createUsingPOST_1 = bind(this.createUsingPOST_1, this);
      return Tweets.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: createUsingPOST_1
     description	: 发送冒泡
     path			: 
     query		: device(string),location(string),coord(string),address(string),content(string)
     body			:
     */

    Tweets.prototype.createUsingPOST_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::createUsingPOST_1()");
      return this.post("social/tweet", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: bestUserUsingGET
     description	: 热门用户
     path			: 
     query		: 
     body			:
     */

    Tweets.prototype.bestUserUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::bestUserUsingGET()");
      return this.get("social/tweet/best_user", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: query_a_commentUsingGET
     description	: 获取某个评论
     path			: id
     query		: 
     body			:
     */

    Tweets.prototype.query_a_commentUsingGET = function(id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::query_a_commentUsingGET()");
      return this.get(util.format("social/tweet/comment/%s", id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: insert_imageUsingPOST
     description	: 冒泡插入图片
     path			: 
     query		: 
     body			:
     */

    Tweets.prototype.insert_imageUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::insert_imageUsingPOST()");
      return this.post("social/tweet/insert_image", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: lastTweetUsingGET
     description	: 查询last_id以后的最新冒泡
     path			: 
     query		: default_like_count(integer),last_id(integer)
     body			:
     */

    Tweets.prototype.lastTweetUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::lastTweetUsingGET()");
      return this.get("social/tweet/last", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: public_tweetsUsingGET
     description	: 冒泡列表
     path			: 
     query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
     body			:
     */

    Tweets.prototype.public_tweetsUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::public_tweetsUsingGET()");
      return this.get("social/tweet/public_tweets", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: user_publicUsingGET
     description	: 用户冒泡列表
     path			: 
     query		: last_id(integer),user_id(integer),global_key(string),type(string),default_like_count(integer)
     body			:
     */

    Tweets.prototype.user_publicUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::user_publicUsingGET()");
      return this.get("social/tweet/user_public", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: detailUsingGET
     description	: 获取冒泡详情
     path			: global_key,tweet_id
     query		: default_like_count(integer)
     body			:
     */

    Tweets.prototype.detailUsingGET = function(global_key, tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::detailUsingGET()");
      return this.get(util.format("social/tweet/%s/%s", global_key, tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: commentUsingPOST
     description	: 冒泡评论
     path			: id
     query		: content(string),afterFilter(string)
     body			:
     */

    Tweets.prototype.commentUsingPOST = function(id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::commentUsingPOST()");
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
     operationId	: query_commentUsingGET
     description	: 获取冒泡评论列表
     path			: id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tweets.prototype.query_commentUsingGET = function(id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::query_commentUsingGET()");
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
     operationId	: like_tweetUsingPOST
     description	: 冒泡点赞
     path			: tweet_id
     query		: 
     body			:
     */

    Tweets.prototype.like_tweetUsingPOST = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::like_tweetUsingPOST()");
      return this.post(util.format("social/tweet/%s/like", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getTweetLikeUsingGET
     description	: 赞过的冒泡列表
     path			: tweet_id
     query		: page(integer),pageSize(integer)
     body			:
     */

    Tweets.prototype.getTweetLikeUsingGET = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::getTweetLikeUsingGET()");
      return this.get(util.format("social/tweet/%s/tweetlike", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unlike_tweetUsingPOST
     description	: 冒泡取消点赞
     path			: tweet_id
     query		: 
     body			:
     */

    Tweets.prototype.unlike_tweetUsingPOST = function(tweet_id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::unlike_tweetUsingPOST()");
      return this.post(util.format("social/tweet/%s/unlike", tweet_id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: _public_tweetsUsingGET
     description	: 冒泡广场列表
     path			: 
     query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
     body			:
     */

    Tweets.prototype._public_tweetsUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Tweets::_public_tweetsUsingGET()");
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
