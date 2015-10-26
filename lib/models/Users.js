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
      this.unreadCount = bind(this.unreadCount, this);
      this.unfollow = bind(this.unfollow, this);
      this.search = bind(this.search, this);
      this.getRelationshipWithProjectMember = bind(this.getRelationshipWithProjectMember, this);
      this.getRelationship = bind(this.getRelationship, this);
      this.relationship = bind(this.relationship, this);
      this.friends = bind(this.friends, this);
      this.friends_1 = bind(this.friends_1, this);
      this.followers = bind(this.followers, this);
      this.followers_1 = bind(this.followers_1, this);
      this.follow = bind(this.follow, this);
      this.updateAvatar = bind(this.updateAvatar, this);
      this.updatePassword = bind(this.updatePassword, this);
      this.updateInfo = bind(this.updateInfo, this);
      this.doPhoneRegister = bind(this.doPhoneRegister, this);
      this.generateRegisterPhoneCode = bind(this.generateRegisterPhoneCode, this);
      this.doRegister = bind(this.doRegister, this);
      this.getUserByName = bind(this.getUserByName, this);
      this.doLogout = bind(this.doLogout, this);
      this.doPhoneLogin = bind(this.doPhoneLogin, this);
      this.generateLoginPhoneCode = bind(this.generateLoginPhoneCode, this);
      this.doLogin = bind(this.doLogin, this);
      this.getUserByGlobalKey = bind(this.getUserByGlobalKey, this);
      this.getGravatar = bind(this.getGravatar, this);
      this.getNotificationSettings = bind(this.getNotificationSettings, this);
      this.userEmail = bind(this.userEmail, this);
      this.currentUser = bind(this.currentUser, this);
      this.checkTwoFactorAuthCode = bind(this.checkTwoFactorAuthCode, this);
      this.checkPhone = bind(this.checkPhone, this);
      this.check = bind(this.check, this);
      this.changeNotificationSetting = bind(this.changeNotificationSetting, this);
      this.captcha = bind(this.captcha, this);
      this.getAvatar = bind(this.getAvatar, this);
      this.activatePhone = bind(this.activatePhone, this);
      this.generateActivatePhoneCode = bind(this.generateActivatePhoneCode, this);
      this.doActivate = bind(this.doActivate, this);
      return Users.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: post
     operationId	: doActivate
     description	: 账户激活
     path			: 
     query		: email(string),key(string),password(string),confirm_password(string)
     body			: sid(string)
     */

    Users.prototype.doActivate = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doActivate()");
      return this.post("account/activate", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: generateActivatePhoneCode
     description	: 获取激活账号的手机验证码
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype.generateActivatePhoneCode = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::generateActivatePhoneCode()");
      return this.post("account/activate/generate_phone_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: activatePhone
     description	: 激活用手机注册的用户
     path			: 
     query		: phone(string),code(string),global_key(string),email(string),password(string)
     body			: sid(string)
     */

    Users.prototype.activatePhone = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::activatePhone()");
      return this.post("account/activate/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getAvatar
     description	: 获取头像
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getAvatar = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getAvatar()");
      return this.get("account/avatar", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: captcha
     description	: 检查是否需要验证码
     path			: action
     query		: 
     body			: realRemoteAddress(string)
     */

    Users.prototype.captcha = function(action, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::captcha()");
      return this.get(util.format("account/captcha/%s", action), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: changeNotificationSetting
     description	: 修改通知设置
     path			: 
     query		: settingType(string),settingContent(string)
     body			:
     */

    Users.prototype.changeNotificationSetting = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::changeNotificationSetting()");
      return this.get("account/change_notice_setting", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: check
     description	: 检查email是否没有被注册过
     path			: 
     query		: key(string)
     body			:
     */

    Users.prototype.check = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::check()");
      return this.get("account/check", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: checkPhone
     description	: 检查手机是否没有被注册过
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype.checkPhone = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::checkPhone()");
      return this.get("account/check/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: checkTwoFactorAuthCode
     description	: 登录时的两步验证
     path			: 
     query		: code(integer)
     body			: sid(string)
     */

    Users.prototype.checkTwoFactorAuthCode = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::checkTwoFactorAuthCode()");
      return this.post("account/check_two_factor_auth_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: currentUser
     description	: 获取当前登录用户信息
     path			: 
     query		: 
     body			:
     */

    Users.prototype.currentUser = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::currentUser()");
      return this.get("account/current_user", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: userEmail
     description	: 获取当前用户的email
     path			: 
     query		: 
     body			:
     */

    Users.prototype.userEmail = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::userEmail()");
      return this.get("account/email", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getNotificationSettings
     description	: 获取通知设置
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getNotificationSettings = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getNotificationSettings()");
      return this.get("account/get_notice_settings", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getGravatar
     description	: 获取Gravatar头像
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getGravatar = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getGravatar()");
      return this.get("account/gravatar", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getUserByGlobalKey
     description	: 通过个性后缀获取用户信息
     path			: global_key
     query		: 
     body			:
     */

    Users.prototype.getUserByGlobalKey = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getUserByGlobalKey()");
      return this.get(util.format("account/key/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doLogin
     description	: 登录
     path			: 
     query		: email(string),password(string),j_captcha(string),remember_me(string)
     body			: sid(string),realRemoteAddress(string)
     */

    Users.prototype.doLogin = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doLogin()");
      return this.post("account/login", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: generateLoginPhoneCode
     description	: 获取登录的手机验证码
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype.generateLoginPhoneCode = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::generateLoginPhoneCode()");
      return this.post("account/login/generate_phone_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doPhoneLogin
     description	: 使用绑定过的手机号码登录
     path			: 
     query		: phone(string),code(string),j_captcha(string),remember_me(boolean)
     body			: realRemoteAddress(string)
     */

    Users.prototype.doPhoneLogin = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doPhoneLogin()");
      return this.post("account/login/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doLogout
     description	: 注销登录
     path			: 
     query		: 
     body			: sid(string)
     */

    Users.prototype.doLogout = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doLogout()");
      return this.post("account/logout", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getUserByName
     description	: 通过昵称获取用户信息
     path			: name
     query		: 
     body			:
     */

    Users.prototype.getUserByName = function(name, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getUserByName()");
      return this.get(util.format("account/name/%s", name), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doRegister
     description	: 注册
     path			: 
     query		: email(string),global_key(string),j_captcha(string)
     body			: realRemoteAddress(string)
     */

    Users.prototype.doRegister = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doRegister()");
      return this.post("account/register", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: generateRegisterPhoneCode
     description	: 获取注册的手机验证码
     path			: 
     query		: phone(string)
     body			:
     */

    Users.prototype.generateRegisterPhoneCode = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::generateRegisterPhoneCode()");
      return this.post("account/register/generate_phone_code", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: doPhoneRegister
     description	: 使用手机注册
     path			: 
     query		: phone(string),code(string)
     body			: realRemoteAddress(string)
     */

    Users.prototype.doPhoneRegister = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::doPhoneRegister()");
      return this.post("account/register/phone", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updateInfo
     description	: 更新用户信息
     path			: 
     query		: tags(string),name(string),sex(string),phone(string),birthday(string),location(string),company(string),slogan(string),introduction(string),job(string),code(string)
     body			: sid(string)
     */

    Users.prototype.updateInfo = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::updateInfo()");
      return this.post("account/update_info", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updatePassword
     description	: 修改用户密码
     path			: 
     query		: current_password(string),password(string),confirm_password(string)
     body			: sid(string)
     */

    Users.prototype.updatePassword = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::updatePassword()");
      return this.post("account/update_pwd", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: updateAvatar
     description	: 更新头像
     path			: 
     query		: avatar(string)
     body			: sid(string)
     */

    Users.prototype.updateAvatar = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::updateAvatar()");
      return this.post("account/updateavatar", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: follow
     description	: 关注用户
     path			: 
     query		: users(string)
     body			:
     */

    Users.prototype.follow = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::follow()");
      return this.post("social/follow", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: followers_1
     description	: 关注我的用户
     path			: 
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.followers_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::followers_1()");
      return this.get("social/followers", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: followers
     description	: 获取关注默认的用户
     path			: global_key
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.followers = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::followers()");
      return this.get(util.format("social/followers/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: friends_1
     description	: 我关注的用户列表
     path			: 
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.friends_1 = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::friends_1()");
      return this.get("social/friends", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: friends
     description	: 指定用户的关注列表
     path			: global_key
     query		: page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.friends = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::friends()");
      return this.get(util.format("social/friends/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: relationship
     description	: 是否关注了该用户
     path			: global_key
     query		: 
     body			:
     */

    Users.prototype.relationship = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::relationship()");
      return this.get(util.format("social/relationship/%s", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getRelationship
     description	: 获取我关注和关注我的用户列表
     path			: 
     query		: 
     body			:
     */

    Users.prototype.getRelationship = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getRelationship()");
      return this.get("social/relationships", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: getRelationshipWithProjectMember
     description	: 获取我关注和关注我的用户列表包含成员列表
     path			: 
     query		: project_id(integer)
     body			:
     */

    Users.prototype.getRelationshipWithProjectMember = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::getRelationshipWithProjectMember()");
      return this.get("social/relationships/all", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: search
     description	: 搜索用户
     path			: 
     query		: key(string),page(integer),pageSize(integer)
     body			:
     */

    Users.prototype.search = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::search()");
      return this.get("social/search", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unfollow
     description	: 取消关注
     path			: 
     query		: users(string)
     body			:
     */

    Users.prototype.unfollow = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::unfollow()");
      return this.post("social/unfollow", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: unreadCount
     description	: 未读消息通知
     path			: 
     query		: 
     body			:
     */

    Users.prototype.unreadCount = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Users::unreadCount()");
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
