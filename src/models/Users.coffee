BaseModel = require '../BaseModel'
util = require 'util'

class Users extends BaseModel

  ###

   method		: post
   operationId	: doActivate
   description	: 账户激活
   path			: 
   query		: email(string),key(string),password(string),confirm_password(string)
   body			: sid(string)

  ###

  doActivate: ( params = {}, fn = null) =>
    @debug "Users::doActivate()"
    @post "account/activate", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: generateActivatePhoneCode
   description	: 获取激活账号的手机验证码
   path			: 
   query		: phone(string)
   body			: 

  ###

  generateActivatePhoneCode: ( params = {}, fn = null) =>
    @debug "Users::generateActivatePhoneCode()"
    @post "account/activate/generate_phone_code", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: activatePhone
   description	: 激活用手机注册的用户
   path			: 
   query		: phone(string),code(string),global_key(string),email(string),password(string)
   body			: sid(string)

  ###

  activatePhone: ( params = {}, fn = null) =>
    @debug "Users::activatePhone()"
    @post "account/activate/phone", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getAvatar
   description	: 获取头像
   path			: 
   query		: 
   body			: 

  ###

  getAvatar: ( params = {}, fn = null) =>
    @debug "Users::getAvatar()"
    @get "account/avatar", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: captcha
   description	: 检查是否需要验证码
   path			: action
   query		: 
   body			: realRemoteAddress(string)

  ###

  captcha: (action, params = {}, fn = null) =>
    @debug "Users::captcha()"
    @get util.format("account/captcha/%s",action), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: changeNotificationSetting
   description	: 修改通知设置
   path			: 
   query		: settingType(string),settingContent(string)
   body			: 

  ###

  changeNotificationSetting: ( params = {}, fn = null) =>
    @debug "Users::changeNotificationSetting()"
    @get "account/change_notice_setting", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: check
   description	: 检查email是否没有被注册过
   path			: 
   query		: key(string)
   body			: 

  ###

  check: ( params = {}, fn = null) =>
    @debug "Users::check()"
    @get "account/check", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: checkPhone
   description	: 检查手机是否没有被注册过
   path			: 
   query		: phone(string)
   body			: 

  ###

  checkPhone: ( params = {}, fn = null) =>
    @debug "Users::checkPhone()"
    @get "account/check/phone", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: checkTwoFactorAuthCode
   description	: 登录时的两步验证
   path			: 
   query		: code(integer)
   body			: sid(string)

  ###

  checkTwoFactorAuthCode: ( params = {}, fn = null) =>
    @debug "Users::checkTwoFactorAuthCode()"
    @post "account/check_two_factor_auth_code", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: currentUser
   description	: 获取当前登录用户信息
   path			: 
   query		: 
   body			: 

  ###

  currentUser: ( params = {}, fn = null) =>
    @debug "Users::currentUser()"
    @get "account/current_user", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: userEmail
   description	: 获取当前用户的email
   path			: 
   query		: 
   body			: 

  ###

  userEmail: ( params = {}, fn = null) =>
    @debug "Users::userEmail()"
    @get "account/email", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getNotificationSettings
   description	: 获取通知设置
   path			: 
   query		: 
   body			: 

  ###

  getNotificationSettings: ( params = {}, fn = null) =>
    @debug "Users::getNotificationSettings()"
    @get "account/get_notice_settings", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getGravatar
   description	: 获取Gravatar头像
   path			: 
   query		: 
   body			: 

  ###

  getGravatar: ( params = {}, fn = null) =>
    @debug "Users::getGravatar()"
    @get "account/gravatar", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getUserByGlobalKey
   description	: 通过个性后缀获取用户信息
   path			: global_key
   query		: 
   body			: 

  ###

  getUserByGlobalKey: (global_key, params = {}, fn = null) =>
    @debug "Users::getUserByGlobalKey()"
    @get util.format("account/key/%s",global_key), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: doLogin
   description	: 登录
   path			: 
   query		: email(string),password(string),j_captcha(string),remember_me(string)
   body			: sid(string),realRemoteAddress(string)

  ###

  doLogin: ( params = {}, fn = null) =>
    @debug "Users::doLogin()"
    @post "account/login", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: generateLoginPhoneCode
   description	: 获取登录的手机验证码
   path			: 
   query		: phone(string)
   body			: 

  ###

  generateLoginPhoneCode: ( params = {}, fn = null) =>
    @debug "Users::generateLoginPhoneCode()"
    @post "account/login/generate_phone_code", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: doPhoneLogin
   description	: 使用绑定过的手机号码登录
   path			: 
   query		: phone(string),code(string),j_captcha(string),remember_me(boolean)
   body			: realRemoteAddress(string)

  ###

  doPhoneLogin: ( params = {}, fn = null) =>
    @debug "Users::doPhoneLogin()"
    @post "account/login/phone", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: doLogout
   description	: 注销登录
   path			: 
   query		: 
   body			: sid(string)

  ###

  doLogout: ( params = {}, fn = null) =>
    @debug "Users::doLogout()"
    @post "account/logout", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getUserByName
   description	: 通过昵称获取用户信息
   path			: name
   query		: 
   body			: 

  ###

  getUserByName: (name, params = {}, fn = null) =>
    @debug "Users::getUserByName()"
    @get util.format("account/name/%s",name), params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: doRegister
   description	: 注册
   path			: 
   query		: email(string),global_key(string),j_captcha(string)
   body			: realRemoteAddress(string)

  ###

  doRegister: ( params = {}, fn = null) =>
    @debug "Users::doRegister()"
    @post "account/register", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: generateRegisterPhoneCode
   description	: 获取注册的手机验证码
   path			: 
   query		: phone(string)
   body			: 

  ###

  generateRegisterPhoneCode: ( params = {}, fn = null) =>
    @debug "Users::generateRegisterPhoneCode()"
    @post "account/register/generate_phone_code", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: doPhoneRegister
   description	: 使用手机注册
   path			: 
   query		: phone(string),code(string)
   body			: realRemoteAddress(string)

  ###

  doPhoneRegister: ( params = {}, fn = null) =>
    @debug "Users::doPhoneRegister()"
    @post "account/register/phone", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: updateInfo
   description	: 更新用户信息
   path			: 
   query		: tags(string),name(string),sex(string),phone(string),birthday(string),location(string),company(string),slogan(string),introduction(string),job(string),code(string)
   body			: sid(string)

  ###

  updateInfo: ( params = {}, fn = null) =>
    @debug "Users::updateInfo()"
    @post "account/update_info", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: updatePassword
   description	: 修改用户密码
   path			: 
   query		: current_password(string),password(string),confirm_password(string)
   body			: sid(string)

  ###

  updatePassword: ( params = {}, fn = null) =>
    @debug "Users::updatePassword()"
    @post "account/update_pwd", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: updateAvatar
   description	: 更新头像
   path			: 
   query		: avatar(string)
   body			: sid(string)

  ###

  updateAvatar: ( params = {}, fn = null) =>
    @debug "Users::updateAvatar()"
    @post "account/updateavatar", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: follow
   description	: 关注用户
   path			: 
   query		: users(string)
   body			: 

  ###

  follow: ( params = {}, fn = null) =>
    @debug "Users::follow()"
    @post "social/follow", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: followers_1
   description	: 关注我的用户
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  followers_1: ( params = {}, fn = null) =>
    @debug "Users::followers_1()"
    @get "social/followers", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: followers
   description	: 获取关注默认的用户
   path			: global_key
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  followers: (global_key, params = {}, fn = null) =>
    @debug "Users::followers()"
    @get util.format("social/followers/%s",global_key), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: friends_1
   description	: 我关注的用户列表
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  friends_1: ( params = {}, fn = null) =>
    @debug "Users::friends_1()"
    @get "social/friends", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: friends
   description	: 指定用户的关注列表
   path			: global_key
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  friends: (global_key, params = {}, fn = null) =>
    @debug "Users::friends()"
    @get util.format("social/friends/%s",global_key), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: relationship
   description	: 是否关注了该用户
   path			: global_key
   query		: 
   body			: 

  ###

  relationship: (global_key, params = {}, fn = null) =>
    @debug "Users::relationship()"
    @get util.format("social/relationship/%s",global_key), params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getRelationship
   description	: 获取我关注和关注我的用户列表
   path			: 
   query		: 
   body			: 

  ###

  getRelationship: ( params = {}, fn = null) =>
    @debug "Users::getRelationship()"
    @get "social/relationships", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: getRelationshipWithProjectMember
   description	: 获取我关注和关注我的用户列表包含成员列表
   path			: 
   query		: project_id(integer)
   body			: 

  ###

  getRelationshipWithProjectMember: ( params = {}, fn = null) =>
    @debug "Users::getRelationshipWithProjectMember()"
    @get "social/relationships/all", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: search
   description	: 搜索用户
   path			: 
   query		: key(string),page(integer),pageSize(integer)
   body			: 

  ###

  search: ( params = {}, fn = null) =>
    @debug "Users::search()"
    @get "social/search", params, (data) ->
      fn data if fn

  ###

   method		: post
   operationId	: unfollow
   description	: 取消关注
   path			: 
   query		: users(string)
   body			: 

  ###

  unfollow: ( params = {}, fn = null) =>
    @debug "Users::unfollow()"
    @post "social/unfollow", params, (data) ->
      fn data if fn

  ###

   method		: get
   operationId	: unreadCount
   description	: 未读消息通知
   path			: 
   query		: 
   body			: 

  ###

  unreadCount: ( params = {}, fn = null) =>
    @debug "Users::unreadCount()"
    @get "social/unread_count", params, (data) ->
      fn data if fn

module.exports = (client) -> new Users client

