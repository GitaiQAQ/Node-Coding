BaseModel = require '../BaseModel'
util = require 'util'

class Tweets extends BaseModel

  ###

   method		: post
   operationId	: create_1
   description	: 发送冒泡
   path			: 
   query		: device(string),location(string),coord(string),address(string),content(string)
   body			: 

  ###

  create_1: ( params = {}, fn = null) =>
    @debug "Tweets::create_1()"
    @post "social/tweet", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: bestUser
   description	: 热门用户
   path			: 
   query		: 
   body			: 

  ###

  bestUser: ( params = {}, fn = null) =>
    @debug "Tweets::bestUser()"
    @get "social/tweet/best_user", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: query_a_comment
   description	: 获取某个评论
   path			: id
   query		: 
   body			: 

  ###

  query_a_comment: (id, params = {}, fn = null) =>
    @debug "Tweets::query_a_comment()"
    @get util.format("social/tweet/comment/%s",id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: insert_image
   description	: 冒泡插入图片
   path			: 
   query		: 
   body			: 

  ###

  insert_image: ( params = {}, fn = null) =>
    @debug "Tweets::insert_image()"
    @post "social/tweet/insert_image", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: lastTweet
   description	: 查询last_id以后的最新冒泡
   path			: 
   query		: default_like_count(integer),last_id(integer)
   body			: 

  ###

  lastTweet: ( params = {}, fn = null) =>
    @debug "Tweets::lastTweet()"
    @get "social/tweet/last", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: public_tweets
   description	: 冒泡列表
   path			: 
   query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
   body			: 

  ###

  public_tweets: ( params = {}, fn = null) =>
    @debug "Tweets::public_tweets()"
    @get "social/tweet/public_tweets", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: user_public
   description	: 用户冒泡列表
   path			: 
   query		: last_id(integer),user_id(integer),global_key(string),type(string),default_like_count(integer)
   body			: 

  ###

  user_public: ( params = {}, fn = null) =>
    @debug "Tweets::user_public()"
    @get "social/tweet/user_public", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: detail
   description	: 获取冒泡详情
   path			: global_key,tweet_id
   query		: default_like_count(integer)
   body			: 

  ###

  detail: (global_key,tweet_id, params = {}, fn = null) =>
    @debug "Tweets::detail()"
    @get util.format("social/tweet/%s/%s",global_key,tweet_id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: comment
   description	: 冒泡评论
   path			: id
   query		: content(string),afterFilter(string)
   body			: 

  ###

  comment: (id, params = {}, fn = null) =>
    @debug "Tweets::comment()"
    @post util.format("social/tweet/%s/comment",id), params, (data) ->
      fn data if fn

  ###

   method		: delete
   operationId	: delete_comment
   description	: 删除冒泡评论
   path			: id,comment_id
   query		: 
   body			: 

  ###

  delete_comment: (id,comment_id, params = {}, fn = null) =>
    @debug "Tweets::delete_comment()"
    @delete util.format("social/tweet/%s/comment/%s",id,comment_id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: query_comment
   description	: 获取冒泡评论列表
   path			: id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  query_comment: (id, params = {}, fn = null) =>
    @debug "Tweets::query_comment()"
    @get util.format("social/tweet/%s/comments",id), params, (data) ->
      fn data if fn

  ###

   method		: delete
   operationId	: deleteTweet
   description	: 删除冒泡
   path			: tweet_id
   query		: 
   body			: 

  ###

  deleteTweet: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::deleteTweet()"
    @delete util.format("social/tweet/%s",tweet_id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: like_tweet
   description	: 冒泡点赞
   path			: tweet_id
   query		: 
   body			: 

  ###

  like_tweet: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::like_tweet()"
    @post util.format("social/tweet/%s/like",tweet_id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getTweetLike
   description	: 赞过的冒泡列表
   path			: tweet_id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getTweetLike: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::getTweetLike()"
    @get util.format("social/tweet/%s/tweetlike",tweet_id), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: unlike_tweet
   description	: 冒泡取消点赞
   path			: tweet_id
   query		: 
   body			: 

  ###

  unlike_tweet: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::unlike_tweet()"
    @post util.format("social/tweet/%s/unlike",tweet_id), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: public_tweets
   description	: 冒泡广场列表
   path			: 
   query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
   body			: 

  ###

  public_tweets: ( params = {}, fn = null) =>
    @debug "Tweets::public_tweets()"
    @get "tweet/public_tweets", params, (data) ->
      fn data if fn

module.exports = (client) -> new Tweets client

