(function() {
  var ApiBaseHTTP, debug,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  debug = require('debug')('coding:Api');

  ApiBaseHTTP = require('./ApiBaseHTTP').ApiBaseHTTP;

  module.exports.Api = (function(superClass) {
    extend(Api, superClass);

    function Api() {
      this.handleOptions = bind(this.handleOptions, this);
      return Api.__super__.constructor.apply(this, arguments);
    }

    Api.prototype.handleOptions = function() {
      Api.__super__.handleOptions.apply(this, arguments);
      this.options.base_url = 'api';
      return debug("handleOptions()");
    };

    return Api;

  })(ApiBaseHTTP);

}).call(this);
