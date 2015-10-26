assert = require 'assert'
should = require 'should'
#faker = require 'faker'

describe 'Users', ->
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

	describe 'doActivate()', ->
		it '账户激活', (done) ->
			coding.users.doActivate {"email":"string","key":"string","password":"string","confirm_password":"string","sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'generateActivatePhoneCode()', ->
		it '获取激活账号的手机验证码', (done) ->
			coding.users.generateActivatePhoneCode {"phone":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'activatePhone()', ->
		it '激活用手机注册的用户', (done) ->
			coding.users.activatePhone {"phone":"string","code":"string","global_key":"string","email":"string","password":"string","sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getAvatar()', ->
		it '获取头像', (done) ->
			coding.users.getAvatar {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'captcha()', ->
		it '检查是否需要验证码', (done) ->
			coding.users.captcha action,{"realRemoteAddress":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'changeNotificationSetting()', ->
		it '修改通知设置', (done) ->
			coding.users.changeNotificationSetting {"settingType":"string","settingContent":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'check()', ->
		it '检查email是否没有被注册过', (done) ->
			coding.users.check {"key":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'checkPhone()', ->
		it '检查手机是否没有被注册过', (done) ->
			coding.users.checkPhone {"phone":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'checkTwoFactorAuthCode()', ->
		it '登录时的两步验证', (done) ->
			coding.users.checkTwoFactorAuthCode {"code":"integer","sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'currentUser()', ->
		it '获取当前登录用户信息', (done) ->
			coding.users.currentUser {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'userEmail()', ->
		it '获取当前用户的email', (done) ->
			coding.users.userEmail {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getNotificationSettings()', ->
		it '获取通知设置', (done) ->
			coding.users.getNotificationSettings {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getGravatar()', ->
		it '获取Gravatar头像', (done) ->
			coding.users.getGravatar {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getUserByGlobalKey()', ->
		it '通过个性后缀获取用户信息', (done) ->
			coding.users.getUserByGlobalKey global_key,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'doLogin()', ->
		it '登录', (done) ->
			coding.users.doLogin {"email":"string","password":"string","j_captcha":"string","remember_me":"string","sid":"string","realRemoteAddress":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'generateLoginPhoneCode()', ->
		it '获取登录的手机验证码', (done) ->
			coding.users.generateLoginPhoneCode {"phone":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'doPhoneLogin()', ->
		it '使用绑定过的手机号码登录', (done) ->
			coding.users.doPhoneLogin {"phone":"string","code":"string","j_captcha":"string","remember_me":"boolean","realRemoteAddress":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'doLogout()', ->
		it '注销登录', (done) ->
			coding.users.doLogout {"sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getUserByName()', ->
		it '通过昵称获取用户信息', (done) ->
			coding.users.getUserByName name,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'doRegister()', ->
		it '注册', (done) ->
			coding.users.doRegister {"email":"string","global_key":"string","j_captcha":"string","realRemoteAddress":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'generateRegisterPhoneCode()', ->
		it '获取注册的手机验证码', (done) ->
			coding.users.generateRegisterPhoneCode {"phone":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'doPhoneRegister()', ->
		it '使用手机注册', (done) ->
			coding.users.doPhoneRegister {"phone":"string","code":"string","realRemoteAddress":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateInfo()', ->
		it '更新用户信息', (done) ->
			coding.users.updateInfo {"tags":"string","name":"string","sex":"string","phone":"string","birthday":"string","location":"string","company":"string","slogan":"string","introduction":"string","job":"string","code":"string","sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updatePassword()', ->
		it '修改用户密码', (done) ->
			coding.users.updatePassword {"current_password":"string","password":"string","confirm_password":"string","sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'updateAvatar()', ->
		it '更新头像', (done) ->
			coding.users.updateAvatar {"avatar":"string","sid":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'follow()', ->
		it '关注用户', (done) ->
			coding.users.follow {"users":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'followers_1()', ->
		it '关注我的用户', (done) ->
			coding.users.followers_1 {"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'followers()', ->
		it '获取关注默认的用户', (done) ->
			coding.users.followers global_key,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'friends_1()', ->
		it '我关注的用户列表', (done) ->
			coding.users.friends_1 {"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'friends()', ->
		it '指定用户的关注列表', (done) ->
			coding.users.friends global_key,{"page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'relationship()', ->
		it '是否关注了该用户', (done) ->
			coding.users.relationship global_key,{},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getRelationship()', ->
		it '获取我关注和关注我的用户列表', (done) ->
			coding.users.getRelationship {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'getRelationshipWithProjectMember()', ->
		it '获取我关注和关注我的用户列表包含成员列表', (done) ->
			coding.users.getRelationshipWithProjectMember {"project_id":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'search()', ->
		it '搜索用户', (done) ->
			coding.users.search {"key":"string","page":"integer","pageSize":"integer"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unfollow()', ->
		it '取消关注', (done) ->
			coding.users.unfollow {"users":"string"},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()

	describe 'unreadCount()', ->
		it '未读消息通知', (done) ->
			coding.users.unreadCount {},(result)->
				result.code.should.equal 0
				should.exist result["data"]
				done()



