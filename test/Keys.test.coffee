assert = require 'assert'
should = require 'should'
faker = require 'faker'

describe 'Keys', ->
	coding = null

	realId = "1ef6d9c909016bc8c3cdaa344d114262"
	realSecret = "4ba7a08053578fc0fd19eb86f0ff7fbf4e5d0512"

	project = "test_project"
	user = "gitai"
	global_key = "gitai"
	id = null

	keyId = null

	test_user = "dphdjy"

	content = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDHI6/Zs8DVJduqR0DHO8s5JDT4SpnXS+jvLJkABYTdtjfvMx6i6ei6Lxv3MMecogYyujhIx/k9111+8ZqFpJAywNTfNuw/JiLaH989QLdM7F2NaJi3OHV8484Z6KKvBXyO99HIG/oCNYDYp/78kd0kz8b0ghlXG3M8YRHd5udV6VErKS5qQHH9WTsEaF2VZjrEPalYULHXJ7pikuKmwZ8CVlyqhPxCbHG4wdKprATpdpiax1i5mmH/+pt0vzK01RgZ/ibhVkFaAmxOCWxTSNstqAlYd+z01/688IUIIWqfbzMe7FSp4CLezlIn8UIowb8xw+yRcYMl2Lqon coding@MBP'

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

	describe 'list_1()', ->
		it '列出个人公钥', (done) ->
			coding.keys.list_1 global_key,{"withIDEKey":true},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				keyId = result["data"][0]["id"]
				done()

	describe 'show_1()', ->
		it '通过KeyId获取个人公钥', (done) ->
			coding.keys.show_1 global_key,keyId,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'saveDeployKey()', ->
		it '新建部署公钥', (done) ->
			@timeout 10000
			coding.keys.saveDeployKey global_key,project,{
				"key":content},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'listDeployKeys()', ->
		it '列出部署公钥', (done) ->
			coding.keys.listDeployKeys global_key,project,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				id = result["data"]["project"][0]["id"]
				done()

	describe 'bindDeployKey()', ->
		it '绑定部署公钥', (done) ->
			coding.keys.bindDeployKey global_key,project,id,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unBindDeployKey()', ->
		it '解绑部署公钥', (done) ->
			coding.keys.unBindDeployKey global_key,project,id,{},(result)->
				should.not.exist result["msg"]
				result.code.should.equal 0
				should.exist result["data"]
				done()



