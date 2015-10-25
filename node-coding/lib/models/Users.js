(function() {
  var BaseModel, Users, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Users = (function(superClass) {
    extend(Users, superClass);

    function Users() {
      this.unreadCountUsingGET = bind(this.unreadCountUsingGET, this);
      this.unfollowUsingPOST = bind(this.unfollowUsingPOST, this);
      this.searchUsingGET = bind(this.searchUsingGET, this);
      this.getRelationshipWithProjectMemberUsingGET = bind(this.getRelationshipWithProjectMemberUsingGET, this);
      this.getRelationshipUsingGET = bind(this.getRelationshipUsingGET, this);
      this.relationshipUsingGET = bind(this.relationshipUsingGET, this);
      this.friendsUsingGET = bind(this.friendsUsingGET, this);
      this.friendsUsingGET_1 = bind(this.friendsUsingGET_1, this);
      this.followersUsingGET = bind(this.followersUsingGET, this);
      this.followersUsingGET_1 = bind(this.followersUsingGET_1, this);
      this.followUsingPOST = bind(this.followUsingPOST, this);
      this.updateAvatarUsingPOST = bind(this.updateAvatarUsingPOST, this);
      this.updatePasswordUsingPOST = bind(this.updatePasswordUsingPOST, this);
      this.updateInfoUsingPOST = bind(this.updateInfoUsingPOST, this);
      this._doPhoneRegisterUsingPOST = bind(this._doPhoneRegisterUsingPOST, this);
      this._generateRegisterPhoneCodeUsingPOST = bind(this._generateRegisterPhoneCodeUsingPOST, this);
      this.doRegisterUsingPOST = bind(this.doRegisterUsingPOST, this);
      this.getUserByNameUsingGET = bind(this.getUserByNameUsingGET, this);
      this.doLogoutUsingPOST = bind(this.doLogoutUsingPOST, this);
      this._doPhoneLoginUsingPOST = bind(this._doPhoneLoginUsingPOST, this);
      this._generateLoginPhoneCodeUsingPOST = bind(this._generateLoginPhoneCodeUsingPOST, this);
      this.doLoginUsingPOST = bind(this.doLoginUsingPOST, this);
      this.getUserByGlobalKeyUsingGET = bind(this.getUserByGlobalKeyUsingGET, this);
      this.getGravatarUsingGET = bind(this.getGravatarUsingGET, this);
      this.getNotificationSettingsUsingGET = bind(this.getNotificationSettingsUsingGET, this);
      this.userEmailUsingGET = bind(this.userEmailUsingGET, this);
      this.currentUserUsingGET = bind(this.currentUserUsingGET, this);
      this.checkTwoFactorAuthCodeUsingPOST = bind(this.checkTwoFactorAuthCodeUsingPOST, this);
      this._checkPhoneUsingGET = bind(this._checkPhoneUsingGET, this);
      this.checkUsingGET = bind(this.checkUsingGET, this);
      this.changeNotificationSettingUsingGET = bind(this.changeNotificationSettingUsingGET, this);
      this.captchaUsingGET = bind(this.captchaUsingGET, this);
      this.getAvatarUsingGET = bind(this.getAvatarUsingGET, this);
      this._activatePhoneUsingPOST = bind(this._activatePhoneUsingPOST, this);
      this._generateActivatePhoneCodeUsingPOST = bind(this._generateActivatePhoneCodeUsingPOST, this);
      this.doActivateUsingPOST = bind(this.doActivateUsingPOST, this);
      return Users.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: doActivateUsingPOST
     description	: 账户激活
     path			: 
     query		: email(string),key(string),password(string),confirm_password(string)
     body			: sid(string)
     */

    Users.prototype.doActivateUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doActivateUsingPOST()");
      return this.post("account/activate", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: _generateActivatePhoneCodeUsingPOST
     description	: 获取激活账号的手机验证码
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype._generateActivatePhoneCodeUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_generateActivatePhoneCodeUsingPOST()");
      return this.post("account/activate/generate_phone_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: _activatePhoneUsingPOST
     description	: 激活用手机注册的用户
     path			: 
     query		: phone(string),code(string),global_key(string),email(string),password(string)
     body			: sid(string)
     */

    Users.prototype._activatePhoneUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_activatePhoneUsingPOST()");
      return this.post("account/activate/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getAvatarUsingGET
     description	: 获取头像
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getAvatarUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getAvatarUsingGET()");
      return this.get("account/avatar", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: captchaUsingGET
     description	: 检查是否需要验证码
     path			: action
     query		: 
     body			: realRemoteAddress(string)
     */

    Users.prototype.captchaUsingGET = function(action, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::captchaUsingGET()");
      return this.get(util.format("account/captcha/%s", action), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: changeNotificationSettingUsingGET
     description	: 修改通知设置
     path			: 
     query		: settingType(string),settingContent(string)
     body			:
     */

    Users.prototype.changeNotificationSettingUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::changeNotificationSettingUsingGET()");
      return this.get("account/change_notice_setting", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: checkUsingGET
     description	: 检查email是否没有被注册过
     path			: 
     query		: key(string)
     body			:
     */

    Users.prototype.checkUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::checkUsingGET()");
      return this.get("account/check", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: _checkPhoneUsingGET
     description	: 检查手机是否没有被注册过
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype._checkPhoneUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_checkPhoneUsingGET()");
      return this.get("account/check/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: checkTwoFactorAuthCodeUsingPOST
     description	: 登录时的两步验证
     path			: 
     query		: code(integer)
     body			: sid(string)
     */

    Users.prototype.checkTwoFactorAuthCodeUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::checkTwoFactorAuthCodeUsingPOST()");
      return this.post("account/check_two_factor_auth_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: currentUserUsingGET
     description	: 获取当前登录用户信息
     path			: 
     query		: 
     body			:
     */

    Users.prototype.currentUserUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::currentUserUsingGET()");
      return this.get("account/current_user", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userEmailUsingGET
     description	: 获取当前用户的email
     path			: 
     query		: 
     body			:
     */

    Users.prototype.userEmailUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::userEmailUsingGET()");
      return this.get("account/email", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getNotificationSettingsUsingGET
     description	: 获取通知设置
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getNotificationSettingsUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getNotificationSettingsUsingGET()");
      return this.get("account/get_notice_settings", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getGravatarUsingGET
     description	: 获取Gravatar头像
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getGravatarUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getGravatarUsingGET()");
      return this.get("account/gravatar", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getUserByGlobalKeyUsingGET
     description	: 通过个性后缀获取用户信息
     path			: global_key
     query		: 
     body			:
     */

    Users.prototype.getUserByGlobalKeyUsingGET = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getUserByGlobalKeyUsingGET()");
      return this.get(util.format("account/key/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doLoginUsingPOST
     description	: 登录
     path			: 
     query		: email(string),password(string),j_captcha(string),remember_me(string)
     body			: sid(string),realRemoteAddress(string)
     */

    Users.prototype.doLoginUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doLoginUsingPOST()");
      return this.post("account/login", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: _generateLoginPhoneCodeUsingPOST
     description	: 获取登录的手机验证码
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype._generateLoginPhoneCodeUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_generateLoginPhoneCodeUsingPOST()");
      return this.post("account/login/generate_phone_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: _doPhoneLoginUsingPOST
     description	: 使用绑定过的手机号码登录
     path			: 
     query		: phone(string),code(string),j_captcha(string),remember_me(boolean)
     body			: realRemoteAddress(string)
     */

    Users.prototype._doPhoneLoginUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_doPhoneLoginUsingPOST()");
      return this.post("account/login/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doLogoutUsingPOST
     description	: 注销登录
     path			: 
     query		: 
     body			: sid(string)
     */

    Users.prototype.doLogoutUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doLogoutUsingPOST()");
      return this.post("account/logout", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getUserByNameUsingGET
     description	: 通过昵称获取用户信息
     path			: name
     query		: 
     body			:
     */

    Users.prototype.getUserByNameUsingGET = function(name, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getUserByNameUsingGET()");
      return this.get(util.format("account/name/%s", name), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doRegisterUsingPOST
     description	: 注册
     path			: 
     query		: email(string),global_key(string),j_captcha(string)
     body			: realRemoteAddress(string)
     */

    Users.prototype.doRegisterUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doRegisterUsingPOST()");
      return this.post("account/register", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: _generateRegisterPhoneCodeUsingPOST
     description	: 获取注册的手机验证码
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype._generateRegisterPhoneCodeUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_generateRegisterPhoneCodeUsingPOST()");
      return this.post("account/register/generate_phone_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: _doPhoneRegisterUsingPOST
     description	: 使用手机注册
     path			: 
     query		: phone(string),code(string)
     body			: realRemoteAddress(string)
     */

    Users.prototype._doPhoneRegisterUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::_doPhoneRegisterUsingPOST()");
      return this.post("account/register/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updateInfoUsingPOST
     description	: 更新用户信息
     path			: 
     query		: tags(string),name(string),sex(string),phone(string),birthday(string),location(string),company(string),slogan(string),introduction(string),job(string),code(string)
     body			: sid(string)
     */

    Users.prototype.updateInfoUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::updateInfoUsingPOST()");
      return this.post("account/update_info", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updatePasswordUsingPOST
     description	: 修改用户密码
     path			: 
     query		: current_password(string),password(string),confirm_password(string)
     body			: sid(string)
     */

    Users.prototype.updatePasswordUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::updatePasswordUsingPOST()");
      return this.post("account/update_pwd", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updateAvatarUsingPOST
     description	: 更新头像
     path			: 
     query		: avatar(string)
     body			: sid(string)
     */

    Users.prototype.updateAvatarUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::updateAvatarUsingPOST()");
      return this.post("account/updateavatar", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: followUsingPOST
     description	: 关注用户
     path			: 
     query		: users(string)
     body			:
     */

    Users.prototype.followUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::followUsingPOST()");
      return this.post("social/follow", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: followersUsingGET_1
     description	: 关注我的用户
     path			: 
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.followersUsingGET_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::followersUsingGET_1()");
      return this.get("social/followers", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: followersUsingGET
     description	: 获取关注默认的用户
     path			: global_key
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.followersUsingGET = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::followersUsingGET()");
      return this.get(util.format("social/followers/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: friendsUsingGET_1
     description	: 我关注的用户列表
     path			: 
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.friendsUsingGET_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::friendsUsingGET_1()");
      return this.get("social/friends", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: friendsUsingGET
     description	: 指定用户的关注列表
     path			: global_key
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.friendsUsingGET = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::friendsUsingGET()");
      return this.get(util.format("social/friends/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: relationshipUsingGET
     description	: 是否关注了该用户
     path			: global_key
     query		: 
     body			:
     */

    Users.prototype.relationshipUsingGET = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::relationshipUsingGET()");
      return this.get(util.format("social/relationship/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getRelationshipUsingGET
     description	: 获取我关注和关注我的用户列表
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getRelationshipUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getRelationshipUsingGET()");
      return this.get("social/relationships", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getRelationshipWithProjectMemberUsingGET
     description	: 获取我关注和关注我的用户列表包含成员列表
     path			: 
     query		: project_id(integer)
     body			:
     */

    Users.prototype.getRelationshipWithProjectMemberUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getRelationshipWithProjectMemberUsingGET()");
      return this.get("social/relationships/all", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: searchUsingGET
     description	: 搜索用户
     path			: 
     query		: key(string),page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.searchUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::searchUsingGET()");
      return this.get("social/search", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unfollowUsingPOST
     description	: 取消关注
     path			: 
     query		: users(string)
     body			:
     */

    Users.prototype.unfollowUsingPOST = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::unfollowUsingPOST()");
      return this.post("social/unfollow", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: unreadCountUsingGET
     description	: 未读消息通知
     path			: 
     query		: 
     body			:
     */

    Users.prototype.unreadCountUsingGET = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::unreadCountUsingGET()");
      return this.get("social/unread_count", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Users;

  })(BaseModel);

  module.exports = function(client) {
    return new Users(client);
  };

}).call(this);
