assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Projects', ->
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

	describe 'getPinProjects()', ->
		it '获取常用项目列表', (done) ->
			coding.projects.getPinProjects {"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateUsingPUT_1()', ->
		it '更新项目信息', (done) ->
			coding.projects.updateUsingPUT_1 {"id":"string","name":"string","description":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'recommendedList()', ->
		it '推荐项目list', (done) ->
			coding.projects.recommendedList {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'publicProject()', ->
		it '公有项目列表', (done) ->
			coding.projects.publicProject {"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'queryByName()', ->
		it '通过名称查询', (done) ->
			coding.projects.queryByName user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'setProjectIcon()', ->
		it '设置项目图标', (done) ->
			coding.projects.setProjectIcon user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'star()', ->
		it '收藏项目', (done) ->
			coding.projects.star user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'stared()', ->
		it '项目是否被收藏', (done) ->
			coding.projects.stared user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unstar()', ->
		it '项目取消收藏', (done) ->
			coding.projects.unstar user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unwatch()', ->
		it '项目取消关注', (done) ->
			coding.projects.unwatch user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'visitProject()', ->
		it '更新项目阅读时间', (done) ->
			coding.projects.visitProject user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watch()', ->
		it '关注项目', (done) ->
			coding.projects.watch user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watched()', ->
		it '项目是否被关注', (done) ->
			coding.projects.watched user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watchers()', ->
		it '项目关注者', (done) ->
			coding.projects.watchers user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'project_list()', ->
		it '我的项目列表', (done) ->
			coding.projects.project_list {"type":"string","sort":"string","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'private_projects()', ->
		it '私有项目列表', (done) ->
			coding.projects.private_projects {"type":"string","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'createProject()', ->
		it '创建项目', (done) ->
			coding.projects.createProject global_key,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'public_projects()', ->
		it '公有项目列表', (done) ->
			coding.projects.public_projects global_key,{"type":"string","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



