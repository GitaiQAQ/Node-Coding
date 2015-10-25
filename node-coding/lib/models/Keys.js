(function() {
  var BaseModel, Keys, util,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  util = require('util');

  Keys = (function(superClass) {
    extend(Keys, superClass);

    function Keys() {
      this.unBindDeployKeyUsingPOST = bind(this.unBindDeployKeyUsingPOST, this);
      this.listDeployKeysUsingGET = bind(this.listDeployKeysUsingGET, this);
      this.saveDeployKeyUsingPOST = bind(this.saveDeployKeyUsingPOST, this);
      this.bindDeployKeyUsingPOST = bind(this.bindDeployKeyUsingPOST, this);
      this.listUsingGET_1 = bind(this.listUsingGET_1, this);
      this.showUsingGET_1 = bind(this.showUsingGET_1, this);
      return Keys.__super__.constructor.apply(this, arguments);
    }


    /*
    
     method		: get
     operationId	: showUsingGET_1
     description	: 通过KeyId获取个人公钥
     path			: global_key,keyId
     query		: 
     body			:
     */

    Keys.prototype.showUsingGET_1 = function(global_key, keyId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Keys::showUsingGET_1()");
      return this.get(util.format("user/%s/key/%s", global_key, keyId), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listUsingGET_1
     description	: 列出个人公钥
     path			: global_key
     query		: withIDEKey(boolean)
     body			:
     */

    Keys.prototype.listUsingGET_1 = function(global_key, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Keys::listUsingGET_1()");
      return this.get(util.format("user/%s/keys", global_key), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: bindDeployKeyUsingPOST
     description	: 绑定部署公钥
     path			: global_key,project,id
     query		: 
     body			:
     */

    Keys.prototype.bindDeployKeyUsingPOST = function(global_key, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Keys::bindDeployKeyUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/bind_deploy_key/%s", global_key, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: saveDeployKeyUsingPOST
     description	: 新建部署公钥
     path			: global_key,project
     query		: title(string),content(string)
     body			:
     */

    Keys.prototype.saveDeployKeyUsingPOST = function(global_key, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Keys::saveDeployKeyUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/deploy_key", global_key, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: get
     operationId	: listDeployKeysUsingGET
     description	: 列出部署公钥
     path			: global_key,project
     query		: 
     body			:
     */

    Keys.prototype.listDeployKeysUsingGET = function(global_key, project, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Keys::listDeployKeysUsingGET()");
      return this.get(util.format("user/%s/project/%s/git/deploy_keys", global_key, project), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };


    /*
    
     method		: post
     operationId	: unBindDeployKeyUsingPOST
     description	: 解绑部署公钥
     path			: global_key,project,id
     query		: 
     body			:
     */

    Keys.prototype.unBindDeployKeyUsingPOST = function(global_key, project, id, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Keys::unBindDeployKeyUsingPOST()");
      return this.post(util.format("user/%s/project/%s/git/unbind_deploy_key/%s", global_key, project, id), params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    return Keys;

  })(BaseModel);

  module.exports = function(client) {
    return new Keys(client);
  };

}).call(this);
