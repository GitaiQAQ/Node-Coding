BaseModel = require '../BaseModel'
util = require 'util'

class Tweets extends BaseModel

  ###

   method		: post
   operationId	: createUsingPOST_1
   description	: 发送冒泡
   path			: 
   query		: device(string),location(string),coord(string),address(string),content(string)
   body			: 

  ###

  createUsingPOST_1: ( params = {}, fn = null) =>
    @debug "Tweets::createUsingPOST_1()"
    @post "social/tweet", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: bestUserUsingGET
   description	: 热门用户
   path			: 
   query		: 
   body			: 

  ###

  bestUserUsingGET: ( params = {}, fn = null) =>
    @debug "Tweets::bestUserUsingGET()"
    @get "social/tweet/best_user", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: query_a_commentUsingGET
   description	: 获取某个评论
   path			: id
   query		: 
   body			: 

  ###

  query_a_commentUsingGET: (id, params = {}, fn = null) =>
    @debug "Tweets::query_a_commentUsingGET()"
    @get util.format("social/tweet/comment/%s",id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: insert_imageUsingPOST
   description	: 冒泡插入图片
   path			: 
   query		: 
   body			: 

  ###

  insert_imageUsingPOST: ( params = {}, fn = null) =>
    @debug "Tweets::insert_imageUsingPOST()"
    @post "social/tweet/insert_image", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: lastTweetUsingGET
   description	: 查询last_id以后的最新冒泡
   path			: 
   query		: default_like_count(integer),last_id(integer)
   body			: 

  ###

  lastTweetUsingGET: ( params = {}, fn = null) =>
    @debug "Tweets::lastTweetUsingGET()"
    @get "social/tweet/last", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: public_tweetsUsingGET
   description	: 冒泡列表
   path			: 
   query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
   body			: 

  ###

  public_tweetsUsingGET: ( params = {}, fn = null) =>
    @debug "Tweets::public_tweetsUsingGET()"
    @get "social/tweet/public_tweets", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: user_publicUsingGET
   description	: 用户冒泡列表
   path			: 
   query		: last_id(integer),user_id(integer),global_key(string),type(string),default_like_count(integer)
   body			: 

  ###

  user_publicUsingGET: ( params = {}, fn = null) =>
    @debug "Tweets::user_publicUsingGET()"
    @get "social/tweet/user_public", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: detailUsingGET
   description	: 获取冒泡详情
   path			: global_key,tweet_id
   query		: default_like_count(integer)
   body			: 

  ###

  detailUsingGET: (global_key,tweet_id, params = {}, fn = null) =>
    @debug "Tweets::detailUsingGET()"
    @get util.format("social/tweet/%s/%s",global_key,tweet_id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: commentUsingPOST
   description	: 冒泡评论
   path			: id
   query		: content(string),afterFilter(string)
   body			: 

  ###

  commentUsingPOST: (id, params = {}, fn = null) =>
    @debug "Tweets::commentUsingPOST()"
    @post util.format("social/tweet/%s/comment",id), params, (data) ->fn data if fn

  ###

   method		: delete
   operationId	: delete_commentUsingDELETE
   description	: 删除冒泡评论
   path			: id,comment_id
   query		: 
   body			: 

  ###

  delete_commentUsingDELETE: (id,comment_id, params = {}, fn = null) =>
    @debug "Tweets::delete_commentUsingDELETE()"
    @delete util.format("social/tweet/%s/comment/%s",id,comment_id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: query_commentUsingGET
   description	: 获取冒泡评论列表
   path			: id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  query_commentUsingGET: (id, params = {}, fn = null) =>
    @debug "Tweets::query_commentUsingGET()"
    @get util.format("social/tweet/%s/comments",id), params, (data) ->fn data if fn

  ###

   method		: delete
   operationId	: deleteTweetUsingDELETE
   description	: 删除冒泡
   path			: tweet_id
   query		: 
   body			: 

  ###

  deleteTweetUsingDELETE: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::deleteTweetUsingDELETE()"
    @delete util.format("social/tweet/%s",tweet_id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: like_tweetUsingPOST
   description	: 冒泡点赞
   path			: tweet_id
   query		: 
   body			: 

  ###

  like_tweetUsingPOST: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::like_tweetUsingPOST()"
    @post util.format("social/tweet/%s/like",tweet_id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getTweetLikeUsingGET
   description	: 赞过的冒泡列表
   path			: tweet_id
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  getTweetLikeUsingGET: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::getTweetLikeUsingGET()"
    @get util.format("social/tweet/%s/tweetlike",tweet_id), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: unlike_tweetUsingPOST
   description	: 冒泡取消点赞
   path			: tweet_id
   query		: 
   body			: 

  ###

  unlike_tweetUsingPOST: (tweet_id, params = {}, fn = null) =>
    @debug "Tweets::unlike_tweetUsingPOST()"
    @post util.format("social/tweet/%s/unlike",tweet_id), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: _public_tweetsUsingGET
   description	: 冒泡广场列表
   path			: 
   query		: sort(string),last_id(integer),default_like_count(integer),filter(boolean)
   body			: 

  ###

  _public_tweetsUsingGET: ( params = {}, fn = null) =>
    @debug "Tweets::_public_tweetsUsingGET()"
    @get "tweet/public_tweets", params, (data) ->fn data if fn

module.exports = (client) -> new Tweets client












