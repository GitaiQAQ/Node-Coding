assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Merge_requests', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	iid = null
	status="open"

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

	describe 'do_create()', ->
		it '创建 MergeRequest', (done) ->
			@timeout 5000
			coding.mergeRequests.do_create user,project,{
				"srcBranch":"e",
				"desBranch":"master",
				"title":"string",
				"content":"string",
				"reviewers":"string",
				"tasks":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				iid = result["data"]["merge_request"]["iid"]
				done()

	describe 'show_2()', ->
		it '显示某个 MergeRequest', (done) ->
			@timeout 5000
			coding.mergeRequests.show_2 user,project,iid,{
				"diff":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list_2()', ->
		it 'MergeRequest 列表', (done) ->
			@timeout 5000
			coding.mergeRequests.list_2 user,project,status,{
				"page":0,
				"pageSize":10},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'merge()', ->
		it '合并某个 MergeRequest', (done) ->
			throw "和楼下无法共存"
			###
			coding.mergeRequests.merge user,project,iid,{
				"message":"string",
				"del_source_branch":"master"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()
			###

	describe 'refuse()', ->
		it '拒绝某个 MergeRequest', (done) ->
			coding.mergeRequests.refuse user,project,iid,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'cancel()', ->
		it '取消 MergeRequest', (done) ->
			coding.mergeRequests.cancel user,project,iid,{},(result)->
				should.not.exist result["msg"]
				console.log(result)
				result.code.should.equal 0
				should.exist result["data"]
				done()

