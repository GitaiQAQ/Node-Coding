assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Tasks', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	status,status,labelId

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
		it '创建任务', (done) ->
			coding.tasks.create project,{
				"owner_id":"string",
				"priority":"integer",
				"deadline":"string",
				"description":"string",
				"content":"string",
				"labels":"string",
				"watchers":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getTask()', ->
		it '创建任务', (done) ->
			coding.tasks.getTask project,id,{
				"parseDescription":"boolean"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listOfOwner()', ->
		it '列出某人的任务列表', (done) ->
			coding.tasks.listOfOwner project,owner,status,{
				"page":"integer",
				"pageSize":"integer"
				,"key":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'taskCreating()', ->
		it '全局任务创建', (done) ->
			coding.tasks.taskCreating {},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'taskCountByUser()', ->
		it '任务统计信息', (done) ->
			coding.tasks.taskCountByUser user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'update4client()', ->
		it '修改任务', (done) ->
			coding.tasks.update4client user,project,id,{
				"status":"integer",
				"priority":"integer",
				"id":"integer",
				"owner_id":"integer",
				"deadline":"string",
				"description":"string",
				"content":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'pubComment()', ->
		it '创建任务评论', (done) ->
			coding.tasks.pubComment user,project,id,{
				"content":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'deleteComment()', ->
		it '删除任务评论', (done) ->
			coding.tasks.deleteComment user,project,id,commentId,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getComments()', ->
		it '获取任务评论', (done) ->
			coding.tasks.getComments user,project,id,{
				"page":"integer",
				"pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateContent()', ->
		it '修改任务内容', (done) ->
			coding.tasks.updateContent user,project,id,{
				"content":"string",
				"id":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateDeadline()', ->
		it '修改任务截止日期', (done) ->
			coding.tasks.updateDeadline user,project,id,{
				"deadline":"string",
				"id":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getDescription()', ->
		it '获取任务描述', (done) ->
			coding.tasks.getDescription user,project,id,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'addTaskLabel()', ->
		it '添加任务标签', (done) ->
			coding.tasks.addTaskLabel user,project,id,labelId,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'operateTaskLabels()', ->
		it '批量操作任务标签', (done) ->
			coding.tasks.operateTaskLabels user,project,id,{
				"label_id":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateOwner()', ->
		it '修改任务执行者', (done) ->
			coding.tasks.updateOwner user,project,id,{
				"owner_id":"integer",
				"id":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updatePriority()', ->
		it '修改任务优先级', (done) ->
			coding.tasks.updatePriority user,project,id,{
				"priority":"integer",
				"id":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateStatus()', ->
		it '修改任务状态', (done) ->
			coding.tasks.updateStatus user,project,id,{
				"status":"integer",
				"id":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watch_2()', ->
		it '关注任务', (done) ->
			coding.tasks.watch_2 user,project,id,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'pageTaskWatchers()', ->
		it '关注该任务的用户', (done) ->
			coding.tasks.pageTaskWatchers user,project,id,{
				"page":"integer",
				"pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'userTasksCount()', ->
		it ' 获取当前用户项目的已完成、正在进行的、关注的数值', (done) ->
			coding.tasks.userTasksCount user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'userTasksCountInProject()', ->
		it '统计所有 已完成 和 正在处理 的任务数', (done) ->
			coding.tasks.userTasksCountInProject user,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getTaskByLabel()', ->
		it '查询标签下的任务列表', (done) ->
			coding.tasks.getTaskByLabel user,project,id,{
				"page":"integer",
				"pageSize":"integer",
				"global_key":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'userTasksOfProject()', ->
		it '列出当前用户某项目某状态的任务列表', (done) ->
			coding.tasks.userTasksOfProject user,project,status,{
				"page":"integer",
				"pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list_5()', ->
		it '任务列表', (done) ->
			coding.tasks.list_5 user,project,status,{
				"page":"integer",
				"pageSize":"integer",
				"key":"string"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'userTasks()', ->
		it '当前用户某状态的任务列表', (done) ->
			coding.tasks.userTasks user,status,{
				"page":"integer",
				"pageSize":"integer"},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()



