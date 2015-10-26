assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Keys', ->
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

	describe 'show_1()', ->
		it '通过KeyId获取个人公钥', (done) ->
			coding.keys.show_1 global_key,keyId,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'list_1()', ->
		it '列出个人公钥', (done) ->
			coding.keys.list_1 global_key,{"withIDEKey":"boolean"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'bindDeployKey()', ->
		it '绑定部署公钥', (done) ->
			coding.keys.bindDeployKey global_key,project,id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'saveDeployKey()', ->
		it '新建部署公钥', (done) ->
			coding.keys.saveDeployKey global_key,project,{"title":"string","content":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listDeployKeys()', ->
		it '列出部署公钥', (done) ->
			coding.keys.listDeployKeys global_key,project,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unBindDeployKey()', ->
		it '解绑部署公钥', (done) ->
			coding.keys.unBindDeployKey global_key,project,id,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



