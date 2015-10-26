assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Tweets', ->
	coding = null
	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"
	projectName = "Node-Coding"
	userName = "gitai"
	testName = "dphdjy"

	before ->
		coding = new require('..')
		  url:     "https://coding.net"
		  cache:   "./temp"

	beforeEach ->

	describe 'create_1()', ->
		it '发送冒泡', (done) ->
			coding.tweets.create_1 {"device":"string","location":"string","coord":"string","address":"string","content":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'bestUser()', ->
		it '热门用户', (done) ->
			coding.tweets.bestUser {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'query_a_comment()', ->
		it '获取某个评论', (done) ->
			coding.tweets.query_a_comment id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'insert_image()', ->
		it '冒泡插入图片', (done) ->
			coding.tweets.insert_image {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'lastTweet()', ->
		it '查询last_id以后的最新冒泡', (done) ->
			coding.tweets.lastTweet {"default_like_count":"integer","last_id":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'public_tweets()', ->
		it '冒泡列表', (done) ->
			coding.tweets.public_tweets {"sort":"string","last_id":"integer","default_like_count":"integer","filter":"boolean"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'user_public()', ->
		it '用户冒泡列表', (done) ->
			coding.tweets.user_public {"last_id":"integer","user_id":"integer","global_key":"string","type":"string","default_like_count":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'detail()', ->
		it '获取冒泡详情', (done) ->
			coding.tweets.detail global_key,tweet_id,{"default_like_count":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'comment()', ->
		it '冒泡评论', (done) ->
			coding.tweets.comment id,{"content":"string","afterFilter":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'delete_commentUsingDELETE()', ->
		it '删除冒泡评论', (done) ->
			coding.tweets.delete_commentUsingDELETE id,comment_id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'query_comment()', ->
		it '获取冒泡评论列表', (done) ->
			coding.tweets.query_comment id,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'deleteTweetUsingDELETE()', ->
		it '删除冒泡', (done) ->
			coding.tweets.deleteTweetUsingDELETE tweet_id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'like_tweet()', ->
		it '冒泡点赞', (done) ->
			coding.tweets.like_tweet tweet_id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getTweetLike()', ->
		it '赞过的冒泡列表', (done) ->
			coding.tweets.getTweetLike tweet_id,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unlike_tweet()', ->
		it '冒泡取消点赞', (done) ->
			coding.tweets.unlike_tweet tweet_id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'public_tweets()', ->
		it '冒泡广场列表', (done) ->
			coding.tweets.public_tweets {"sort":"string","last_id":"integer","default_like_count":"integer","filter":"boolean"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()


