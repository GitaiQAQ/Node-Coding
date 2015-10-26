assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Merge_requests', ->
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

	describe 'do_create()', ->
		it '创建 MergeRequest', (done) ->
			coding.mergeRequests.do_create user,project,{"srcBranch":"string","desBranch":"string","title":"string","content":"string","reviewers":"string","tasks":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'show_2()', ->
		it '显示某个 MergeRequest', (done) ->
			coding.mergeRequests.show_2 user,project,iid,{"diff":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'cancel()', ->
		it '取消 MergeRequest', (done) ->
			coding.mergeRequests.cancel user,project,iid,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'merge()', ->
		it '合并某个 MergeRequest', (done) ->
			coding.mergeRequests.merge user,project,iid,{"message":"string","del_source_branch":"boolean"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'refuse()', ->
		it '拒绝某个 MergeRequest', (done) ->
			coding.mergeRequests.refuse user,project,iid,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list_2()', ->
		it 'MergeRequest 列表', (done) ->
			coding.mergeRequests.list_2 user,project,status,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



