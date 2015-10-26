assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Project_topics', ->
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

	describe 'projectTopicList()', ->
		it '项目讨论列表', (done) ->
			coding.projectTopics.projectTopicList user,project,{"orderBy":"integer","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'topicCount()', ->
		it '所有讨论的个数和我的讨论的个数', (done) ->
			coding.projectTopics.topicCount user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getProjectTopicByLabel()', ->
		it '通过标签获得讨论列表', (done) ->
			coding.projectTopics.getProjectTopicByLabel user,project,id,{"orderBy":"integer","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getMyLabelByProject()', ->
		it '所有讨论的个数和我的讨论的个数', (done) ->
			coding.projectTopics.getMyLabelByProject user,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'myProjectTopicList()', ->
		it '我的讨论', (done) ->
			coding.projectTopics.myProjectTopicList user,project,{"orderBy":"integer","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'myWatchingProjectTopics()', ->
		it '获取我关注的讨论列表', (done) ->
			coding.projectTopics.myWatchingProjectTopics user,project,{"orderBy":"integer","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'projectTopicDetail()', ->
		it '讨论详情', (done) ->
			coding.projectTopics.projectTopicDetail user,project,id,{"type":"integer","toc":"boolean"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'projectTopicComments()', ->
		it '讨论评论列表', (done) ->
			coding.projectTopics.projectTopicComments user,project,id,{"page":"integer","pageSize":"integer","type":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'addTopicLabel()', ->
		it '讨论添加标签', (done) ->
			coding.projectTopics.addTopicLabel user,project,id,labelId,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'operateTopicLabels()', ->
		it '批量操作讨论标签', (done) ->
			coding.projectTopics.operateTopicLabels user,project,id,{"label_id":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'watch_1()', ->
		it '关注讨论', (done) ->
			coding.projectTopics.watch_1 user,project,id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getTopicWatchers()', ->
		it '获取关注该讨论的用户', (done) ->
			coding.projectTopics.getTopicWatchers user,project,id,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



