assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'OAuth', ->
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

	describe 'clean()', ->
		it '清理 OAuth', (done) ->
			data=coding.storage.load 'access_token'
			should.exist data
			should.exist data['access_token']

			coding.oauth.clean()

			data=coding.storage.load 'access_token'
			should.not.exist data
			done()

	describe 'authorize()', ->
		it 'OAuth 授权', (done) ->
			@timeout 60000
			coding.oauth.authorize realId,realSecret,null,null,(result)->
				should.exist result
				should.exist result['access_token']
				done()
