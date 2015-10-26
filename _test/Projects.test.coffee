assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Projects', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	global_key = "gitai"

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


	describe 'project_list()', ->
		it '我的项目列表', (done) ->
			coding.projects.project_list {"type":"string","sort":"string","page":"integer","pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'private_projects()', ->
		it '私有项目列表', (done) ->
			coding.projects.private_projects {"type":"string","page":"integer","pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'createProject()', ->
		it '创建项目', (done) ->
			coding.projects.createProject global_key,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'public_projects()', ->
		it '公有项目列表', (done) ->
			coding.projects.public_projects global_key,{"type":"string","page":"integer","pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getPinProjects()', ->
		it '获取常用项目列表', (done) ->
			coding.projects.getPinProjects {"page":1,"pageSize":10},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'update_1()', ->
		it '更新项目信息', (done) ->
			coding.projects.update_1 {"id":"string","name":"string","description":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'recommendedList()', ->
		it '推荐项目list', (done) ->
			coding.projects.recommendedList {},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'publicProject()', ->
		it '公有项目列表', (done) ->
			coding.projects.publicProject {"page":"integer","pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'queryByName()', ->
		it '通过名称查询', (done) ->
			coding.projects.queryByName user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'setProjectIcon()', ->
		it '设置项目图标', (done) ->
			coding.projects.setProjectIcon user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'star()', ->
		it '收藏项目', (done) ->
			coding.projects.star user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'stared()', ->
		it '项目是否被收藏', (done) ->
			coding.projects.stared user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unstar()', ->
		it '项目取消收藏', (done) ->
			coding.projects.unstar user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watch()', ->
		it '关注项目', (done) ->
			coding.projects.watch user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watchers()', ->
		it '项目关注者', (done) ->
			coding.projects.watchers user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watched()', ->
		it '项目是否被关注', (done) ->
			coding.projects.watched user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unwatch()', ->
		it '项目取消关注', (done) ->
			coding.projects.unwatch user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'visitProject()', ->
		it '更新项目阅读时间', (done) ->
			coding.projects.visitProject user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()




