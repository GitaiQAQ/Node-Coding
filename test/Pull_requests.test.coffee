assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Pull_requests', ->
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

	describe 'create()', ->
		it '创建 PullRequest', (done) ->
			coding.pullRequests.create user,project,{"src_branch":"string","des_user_name":"string","des_project_name":"string","des_branch":"string","diff":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'show_3()', ->
		it '获取某个 PullRequest', (done) ->
			coding.pullRequests.show_3 user,project,iid,{"diff":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'cancel_1()', ->
		it '取消 PullRequest', (done) ->
			coding.pullRequests.cancel_1 user,project,iid,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'comments()', ->
		it 'PullRequest 评论列表', (done) ->
			coding.pullRequests.comments user,project,iid,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'showCommits()', ->
		it '获取某个 PullRequest 的评论', (done) ->
			coding.pullRequests.showCommits user,project,iid,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'merge_1()', ->
		it '合并 PullRequest', (done) ->
			coding.pullRequests.merge_1 user,project,iid,{"message":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'refuse_1()', ->
		it '拒绝 PullRequest', (done) ->
			coding.pullRequests.refuse_1 user,project,iid,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list_3()', ->
		it 'PullRequest 列表', (done) ->
			coding.pullRequests.list_3 user,project,status,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



