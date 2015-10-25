assert = require 'assert'

Coding = require('..')

coding = new Coding
  url:     "https://coding.net"
  cache:   "./temp"

id = "2deaa488ed11bf3d1c7f37bdfd58ec54"
secret = "37124c46b1105ce9f0495259e5c08e0465a045d5"
port = 8001
project = "Coding-Cli-nodejs"
user = "dphdjy"
global_key = "wangfeiping"


describe 'OAuth', ->
	describe 'authorize()', ->
		it 'OAuth 授权', (done) ->
			@timeout 10000
			coding.oauth.authorize id,secret,null,null,(result)->
			done()

describe 'Users', ->
	describe 'doActivateUsingPOST()', ->
		it '账户激活', (done) ->
			#coding.users.doActivateUsingPOST (result)->
			done()
	describe '_generateActivatePhoneCodeUsingPOST()', ->
		it '获取激活账号的手机验证码', (done) ->
			#coding.users._generateActivatePhoneCodeUsingPOST (result)->
			done()
	describe '_activatePhoneUsingPOST()', ->
		it '激活用手机注册的用户', (done) ->
			#coding.users._activatePhoneUsingPOST (result)->
			done()
	describe 'getAvatarUsingGET()', ->
		it '获取头像', (done) ->
			coding.users.getAvatarUsingGET (result)->
			done()
	describe 'captchaUsingGET()', ->
		it '检查是否需要验证码', (done) ->
			coding.users.captchaUsingGET (result)->
			done()
	describe 'changeNotificationSettingUsingGET()', ->
		it '修改通知设置', (done) ->
			coding.users.changeNotificationSettingUsingGET (result)->
			done()
	describe 'checkUsingGET()', ->
		it '检查email是否没有被注册过', (done) ->
			coding.users.checkUsingGET (result)->
			done()
	describe '_checkPhoneUsingGET()', ->
		it '检查手机是否没有被注册过', (done) ->
			coding.users._checkPhoneUsingGET (result)->
			done()
	describe 'checkTwoFactorAuthCodeUsingPOST()', ->
		it '登录时的两步验证', (done) ->
			coding.users.checkTwoFactorAuthCodeUsingPOST (result)->
			done()
	describe 'checkTwoFactorAuthCodeUsingPOST()', ->
		it '获取当前登录用户信息', (done) ->
			coding.users.checkTwoFactorAuthCodeUsingPOST (result)->
			done()