assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Branchs', ->
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

	describe 'setDefaultBranch()', ->
		it '设置默认分支', (done) ->
			coding.branchs.setDefaultBranch user,project,{"default_branch":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list()', ->
		it '分页显示分支列表', (done) ->
			coding.branchs.list user,project,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'createBranch()', ->
		it '新建分支', (done) ->
			coding.branchs.createBranch user,project,{"branch_name":"string","start_point":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'deleteBranch()', ->
		it '删除分支', (done) ->
			coding.branchs.deleteBranch user,project,{"branch_name":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'addProtectedBranchMember()', ->
		it '添加保护分支成员', (done) ->
			coding.branchs.addProtectedBranchMember user,project,{"branch_name":"string","target_global_key":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'disableProtectedBranch()', ->
		it '取消保护分支', (done) ->
			coding.branchs.disableProtectedBranch user,project,{"branch_name":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'enableProtectedBranch()', ->
		it '设置保护分支', (done) ->
			coding.branchs.enableProtectedBranch user,project,{"branch_name":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listProtectedBranchMember()', ->
		it '列出保护分支中的成员', (done) ->
			coding.branchs.listProtectedBranchMember user,project,{"branch_name":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'removeProtectedBranchMember()', ->
		it '删除保护分支成员', (done) ->
			coding.branchs.removeProtectedBranchMember user,project,{"branch_name":"string","target_global_key":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



