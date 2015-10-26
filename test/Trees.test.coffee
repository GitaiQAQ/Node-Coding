assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Trees', ->
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

	describe 'tree()', ->
		it '目录', (done) ->
			coding.trees.tree user,project,tree,{"ref":"string","path":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



