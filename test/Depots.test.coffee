assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Depots', ->
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

	describe 'index()', ->
		it '获取仓库信息', (done) ->
			coding.depots.index user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'fork()', ->
		it 'fork', (done) ->
			coding.depots.fork user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'forks()', ->
		it '项目被fork的列表', (done) ->
			coding.depots.forks user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'createWebHook()', ->
		it '创建 webhook', (done) ->
			coding.depots.createWebHook user,project,{"hook_url":"string","token":"string","type_push":"boolean","type_mr_pr":"boolean","type_topic":"boolean","type_member":"boolean","type_comment":"boolean","type_document":"boolean","type_watch":"boolean","type_star":"boolean","type_task":"boolean"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getWebHook()', ->
		it '获取 webhook', (done) ->
			coding.depots.getWebHook user,project,id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listWebHook()', ->
		it '列出项目设置的 webhook', (done) ->
			coding.depots.listWebHook user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'importRepo()', ->
		it '导入仓库', (done) ->
			coding.depots.importRepo user,project,{"origin_url":"string","vcs_type":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'initDepot()', ->
		it '初始化仓库', (done) ->
			coding.depots.initDepot user,project,{"type":"string","gitReadmeEnabled":"string","gitIgnore":"string","gitLicense":"string","importFrom":"string","vcsType":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



