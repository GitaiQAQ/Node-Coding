assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Historys', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"

	commits = "fbc6353d89dc972bce2a7601b8160ce4c10257a1"
	path = "./README.md"

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

	describe 'history()', ->
		it '获取代码的历史', (done) ->
			coding.historys.history user,project,commits,{
				"page":1,
				"pageSize":10,
				"path":path},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()



