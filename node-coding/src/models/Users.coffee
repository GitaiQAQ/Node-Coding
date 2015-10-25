BaseModel = require '../BaseModel'
util = require 'util'

class Users extends BaseModel

  ###

   method		: post
   operationId	: doActivateUsingPOST
   description	: 账户激活
   path			: 
   query		: email(string),key(string),password(string),confirm_password(string)
   body			: sid(string)

  ###

  doActivateUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::doActivateUsingPOST()"
    @post "account/activate", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: _generateActivatePhoneCodeUsingPOST
   description	: 获取激活账号的手机验证码
   path			: 
   query		: phone(string)
   body			: 

  ###

  _generateActivatePhoneCodeUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::_generateActivatePhoneCodeUsingPOST()"
    @post "account/activate/generate_phone_code", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: _activatePhoneUsingPOST
   description	: 激活用手机注册的用户
   path			: 
   query		: phone(string),code(string),global_key(string),email(string),password(string)
   body			: sid(string)

  ###

  _activatePhoneUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::_activatePhoneUsingPOST()"
    @post "account/activate/phone", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getAvatarUsingGET
   description	: 获取头像
   path			: 
   query		: 
   body			: 

  ###

  getAvatarUsingGET: ( params = {}, fn = null) =>
    @debug "Users::getAvatarUsingGET()"
    @get "account/avatar", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: captchaUsingGET
   description	: 检查是否需要验证码
   path			: action
   query		: 
   body			: realRemoteAddress(string)

  ###

  captchaUsingGET: (action, params = {}, fn = null) =>
    @debug "Users::captchaUsingGET()"
    @get util.format("account/captcha/%s",action), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: changeNotificationSettingUsingGET
   description	: 修改通知设置
   path			: 
   query		: settingType(string),settingContent(string)
   body			: 

  ###

  changeNotificationSettingUsingGET: ( params = {}, fn = null) =>
    @debug "Users::changeNotificationSettingUsingGET()"
    @get "account/change_notice_setting", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: checkUsingGET
   description	: 检查email是否没有被注册过
   path			: 
   query		: key(string)
   body			: 

  ###

  checkUsingGET: ( params = {}, fn = null) =>
    @debug "Users::checkUsingGET()"
    @get "account/check", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: _checkPhoneUsingGET
   description	: 检查手机是否没有被注册过
   path			: 
   query		: phone(string)
   body			: 

  ###

  _checkPhoneUsingGET: ( params = {}, fn = null) =>
    @debug "Users::_checkPhoneUsingGET()"
    @get "account/check/phone", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: checkTwoFactorAuthCodeUsingPOST
   description	: 登录时的两步验证
   path			: 
   query		: code(integer)
   body			: sid(string)

  ###

  checkTwoFactorAuthCodeUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::checkTwoFactorAuthCodeUsingPOST()"
    @post "account/check_two_factor_auth_code", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: currentUserUsingGET
   description	: 获取当前登录用户信息
   path			: 
   query		: 
   body			: 

  ###

  currentUserUsingGET: ( params = {}, fn = null) =>
    @debug "Users::currentUserUsingGET()"
    @get "account/current_user", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: userEmailUsingGET
   description	: 获取当前用户的email
   path			: 
   query		: 
   body			: 

  ###

  userEmailUsingGET: ( params = {}, fn = null) =>
    @debug "Users::userEmailUsingGET()"
    @get "account/email", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getNotificationSettingsUsingGET
   description	: 获取通知设置
   path			: 
   query		: 
   body			: 

  ###

  getNotificationSettingsUsingGET: ( params = {}, fn = null) =>
    @debug "Users::getNotificationSettingsUsingGET()"
    @get "account/get_notice_settings", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getGravatarUsingGET
   description	: 获取Gravatar头像
   path			: 
   query		: 
   body			: 

  ###

  getGravatarUsingGET: ( params = {}, fn = null) =>
    @debug "Users::getGravatarUsingGET()"
    @get "account/gravatar", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getUserByGlobalKeyUsingGET
   description	: 通过个性后缀获取用户信息
   path			: global_key
   query		: 
   body			: 

  ###

  getUserByGlobalKeyUsingGET: (global_key, params = {}, fn = null) =>
    @debug "Users::getUserByGlobalKeyUsingGET()"
    @get util.format("account/key/%s",global_key), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: doLoginUsingPOST
   description	: 登录
   path			: 
   query		: email(string),password(string),j_captcha(string),remember_me(string)
   body			: sid(string),realRemoteAddress(string)

  ###

  doLoginUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::doLoginUsingPOST()"
    @post "account/login", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: _generateLoginPhoneCodeUsingPOST
   description	: 获取登录的手机验证码
   path			: 
   query		: phone(string)
   body			: 

  ###

  _generateLoginPhoneCodeUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::_generateLoginPhoneCodeUsingPOST()"
    @post "account/login/generate_phone_code", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: _doPhoneLoginUsingPOST
   description	: 使用绑定过的手机号码登录
   path			: 
   query		: phone(string),code(string),j_captcha(string),remember_me(boolean)
   body			: realRemoteAddress(string)

  ###

  _doPhoneLoginUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::_doPhoneLoginUsingPOST()"
    @post "account/login/phone", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: doLogoutUsingPOST
   description	: 注销登录
   path			: 
   query		: 
   body			: sid(string)

  ###

  doLogoutUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::doLogoutUsingPOST()"
    @post "account/logout", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getUserByNameUsingGET
   description	: 通过昵称获取用户信息
   path			: name
   query		: 
   body			: 

  ###

  getUserByNameUsingGET: (name, params = {}, fn = null) =>
    @debug "Users::getUserByNameUsingGET()"
    @get util.format("account/name/%s",name), params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: doRegisterUsingPOST
   description	: 注册
   path			: 
   query		: email(string),global_key(string),j_captcha(string)
   body			: realRemoteAddress(string)

  ###

  doRegisterUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::doRegisterUsingPOST()"
    @post "account/register", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: _generateRegisterPhoneCodeUsingPOST
   description	: 获取注册的手机验证码
   path			: 
   query		: phone(string)
   body			: 

  ###

  _generateRegisterPhoneCodeUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::_generateRegisterPhoneCodeUsingPOST()"
    @post "account/register/generate_phone_code", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: _doPhoneRegisterUsingPOST
   description	: 使用手机注册
   path			: 
   query		: phone(string),code(string)
   body			: realRemoteAddress(string)

  ###

  _doPhoneRegisterUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::_doPhoneRegisterUsingPOST()"
    @post "account/register/phone", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: updateInfoUsingPOST
   description	: 更新用户信息
   path			: 
   query		: tags(string),name(string),sex(string),phone(string),birthday(string),location(string),company(string),slogan(string),introduction(string),job(string),code(string)
   body			: sid(string)

  ###

  updateInfoUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::updateInfoUsingPOST()"
    @post "account/update_info", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: updatePasswordUsingPOST
   description	: 修改用户密码
   path			: 
   query		: current_password(string),password(string),confirm_password(string)
   body			: sid(string)

  ###

  updatePasswordUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::updatePasswordUsingPOST()"
    @post "account/update_pwd", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: updateAvatarUsingPOST
   description	: 更新头像
   path			: 
   query		: avatar(string)
   body			: sid(string)

  ###

  updateAvatarUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::updateAvatarUsingPOST()"
    @post "account/updateavatar", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: followUsingPOST
   description	: 关注用户
   path			: 
   query		: users(string)
   body			: 

  ###

  followUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::followUsingPOST()"
    @post "social/follow", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: followersUsingGET_1
   description	: 关注我的用户
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  followersUsingGET_1: ( params = {}, fn = null) =>
    @debug "Users::followersUsingGET_1()"
    @get "social/followers", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: followersUsingGET
   description	: 获取关注默认的用户
   path			: global_key
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  followersUsingGET: (global_key, params = {}, fn = null) =>
    @debug "Users::followersUsingGET()"
    @get util.format("social/followers/%s",global_key), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: friendsUsingGET_1
   description	: 我关注的用户列表
   path			: 
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  friendsUsingGET_1: ( params = {}, fn = null) =>
    @debug "Users::friendsUsingGET_1()"
    @get "social/friends", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: friendsUsingGET
   description	: 指定用户的关注列表
   path			: global_key
   query		: page(integer),pageSize(integer)
   body			: 

  ###

  friendsUsingGET: (global_key, params = {}, fn = null) =>
    @debug "Users::friendsUsingGET()"
    @get util.format("social/friends/%s",global_key), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: relationshipUsingGET
   description	: 是否关注了该用户
   path			: global_key
   query		: 
   body			: 

  ###

  relationshipUsingGET: (global_key, params = {}, fn = null) =>
    @debug "Users::relationshipUsingGET()"
    @get util.format("social/relationship/%s",global_key), params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getRelationshipUsingGET
   description	: 获取我关注和关注我的用户列表
   path			: 
   query		: 
   body			: 

  ###

  getRelationshipUsingGET: ( params = {}, fn = null) =>
    @debug "Users::getRelationshipUsingGET()"
    @get "social/relationships", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: getRelationshipWithProjectMemberUsingGET
   description	: 获取我关注和关注我的用户列表包含成员列表
   path			: 
   query		: project_id(integer)
   body			: 

  ###

  getRelationshipWithProjectMemberUsingGET: ( params = {}, fn = null) =>
    @debug "Users::getRelationshipWithProjectMemberUsingGET()"
    @get "social/relationships/all", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: searchUsingGET
   description	: 搜索用户
   path			: 
   query		: key(string),page(integer),pageSize(integer)
   body			: 

  ###

  searchUsingGET: ( params = {}, fn = null) =>
    @debug "Users::searchUsingGET()"
    @get "social/search", params, (data) ->fn data if fn

  ###

   method		: post
   operationId	: unfollowUsingPOST
   description	: 取消关注
   path			: 
   query		: users(string)
   body			: 

  ###

  unfollowUsingPOST: ( params = {}, fn = null) =>
    @debug "Users::unfollowUsingPOST()"
    @post "social/unfollow", params, (data) ->fn data if fn

  ###

   method		: get
   operationId	: unreadCountUsingGET
   description	: 未读消息通知
   path			: 
   query		: 
   body			: 

  ###

  unreadCountUsingGET: ( params = {}, fn = null) =>
    @debug "Users::unreadCountUsingGET()"
    @get "social/unread_count", params, (data) ->fn data if fn

module.exports = (client) -> new Users client












