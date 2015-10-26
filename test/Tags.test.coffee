assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Tags', ->
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

	describe 'list_4()', ->
		it '标签列表', (done) ->
			coding.tags.list_4 user,project,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'createTag()', ->
		it '创建标签', (done) ->
			coding.tags.createTag user,project,{"tag_name":"string","tag_point":"string","message":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'deleteTag()', ->
		it '删除标签', (done) ->
			coding.tags.deleteTag user,project,{"tag_name":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



