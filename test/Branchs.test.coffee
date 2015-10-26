assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Branchs', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"

	test_user = "dphdjy"

	branch = faker.name.firstName()

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

	describe 'createBranch()', ->
		it '新建分支', (done) ->
			coding.branchs.createBranch user,project,{"branch_name":branch,"start_point":"master"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'setDefaultBranch()', ->
		it '设置默认分支', (done) ->
			coding.branchs.setDefaultBranch user,project,{"default_branch":branch},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'list()', ->
		it '分页显示分支列表', (done) ->
			coding.branchs.list user,project,{"page":0,"pageSize":10},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'enableProtectedBranch()', ->
		it '设置保护分支', (done) ->
			coding.branchs.enableProtectedBranch user,project,{"branch_name":branch},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'disableProtectedBranch()', ->
		it '取消保护分支', (done) ->
			coding.branchs.disableProtectedBranch user,project,{"branch_name":branch},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'addProtectedBranchMember()', ->
		it '添加保护分支成员', (done) ->
			coding.branchs.addProtectedBranchMember user,project,{"branch_name":branch,"target_global_key":test_user},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'listProtectedBranchMember()', ->
		it '列出保护分支中的成员', (done) ->
			coding.branchs.listProtectedBranchMember user,project,{"branch_name":branch},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'removeProtectedBranchMember()', ->
		it '删除保护分支成员', (done) ->
			coding.branchs.removeProtectedBranchMember user,project,{"branch_name":branch,"target_global_key":test_user},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'setDefaultBranch()', ->
		it '设置默认分支', (done) ->
			coding.branchs.setDefaultBranch user,project,{"default_branch":"master"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'deleteBranch()', ->
		it '删除分支', (done) ->
			coding.branchs.deleteBranch user,project,{"branch_name":branch},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()


