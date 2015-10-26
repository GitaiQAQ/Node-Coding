assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Pull_requests', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	status

	test_user = "dphdjy"

	branch = faker.helpers.randomize()

	before (done)->
		@timeout 60000
		coding = new require('..')
		  url:     "https://coding.net"
		  cache:   "./temp"
		data=coding.storage.load 'access_token'

		unless data? and data['access_token']?
			coding.oauth.authorize realId,realSecret,null,null,(result)->
				done()
		else
			done()

	beforeEach ->

	describe 'create()', ->
		it '创建 PullRequest', (done) ->
			coding.pullRequests.create user,project,{"src_branch":"string","des_user_name":"string","des_project_name":"string","des_branch":"string","diff":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'show_3()', ->
		it '获取某个 PullRequest', (done) ->
			coding.pullRequests.show_3 user,project,iid,{"diff":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'cancel_1()', ->
		it '取消 PullRequest', (done) ->
			coding.pullRequests.cancel_1 user,project,iid,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'comments()', ->
		it 'PullRequest 评论列表', (done) ->
			coding.pullRequests.comments user,project,iid,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'showCommits()', ->
		it '获取某个 PullRequest 的评论', (done) ->
			coding.pullRequests.showCommits user,project,iid,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'merge_1()', ->
		it '合并 PullRequest', (done) ->
			coding.pullRequests.merge_1 user,project,iid,{"message":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'refuse_1()', ->
		it '拒绝 PullRequest', (done) ->
			coding.pullRequests.refuse_1 user,project,iid,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list_3()', ->
		it 'PullRequest 列表', (done) ->
			coding.pullRequests.list_3 user,project,status,{"page":"integer","pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()



