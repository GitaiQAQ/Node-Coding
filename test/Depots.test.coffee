assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Depots', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	id = null

	test_user = "dphdjy"

	hook_url = faker.internet.avatar()
	token = faker.internet.password()

	origin_url = "https://git.coding.net/linkin/mybatis-Mapper-generator.git"

	vcs_type = "git"

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

	describe 'index()', ->
		it '获取仓库信息', (done) ->
			coding.depots.index user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'fork()', ->
		it 'fork', (done) ->
			coding.depots.fork user,project,{},(result)->
				should.exist result["msg"]
				result.code.should.not.equal 0
				done()

	describe 'forks()', ->
		it '项目被fork的列表', (done) ->
			coding.depots.forks user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'createWebHook()', ->
		it '创建 webhook', (done) ->
			coding.depots.createWebHook user,project,{"hook_url":hook_url,"token":token,"type_push":true,"type_mr_pr":true,"type_topic":true,"type_member":true,"type_comment":true,"type_document":true,"type_watch":true,"type_star":true,"type_task":true},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()

	describe 'listWebHook()', ->
		it '列出项目设置的 webhook', (done) ->
			@timeout 5000
			coding.depots.listWebHook user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				id = result["data"][0]["id"]
				done()

	describe 'getWebHook()', ->
		it '获取 webhook', (done) ->
			coding.depots.getWebHook user,project,id,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				done()


	describe 'importRepo()', ->
		it '导入仓库', (done) ->
			throw "未设定参数"
			###
			coding.depots.importRepo user,project,{"origin_url":origin_url,"vcs_type":vcs_type},(result)->
				@timeout 60000
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()
			###

	describe 'initDepot()', ->
		it '初始化仓库', (done) ->
			throw "未设定参数"
			###
			coding.depots.initDepot user,project,{"type":"string","gitReadmeEnabled":"string","gitIgnore":"string","gitLicense":"string","importFrom":origin_url,"vcsType":vcs_type},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()
			###



