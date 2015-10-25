(function() {
  var debug,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  debug = require('debug')('coding:ApiBase');

  module.exports.ApiBase = (function() {
    function ApiBase(options) {
      this.options = options;
      this.init = bind(this.init, this);
      this.handleOptions = bind(this.handleOptions, this);
      this.handleOptions();
      this.init();
      debug("constructor()");
    }

    ApiBase.prototype.handleOptions = function() {
      var base;
      if ((base = this.options).verbose == null) {
        base.verbose = false;
      }
      return debug("handleOptions()");
    };

    ApiBase.prototype.init = function() {
      this.client = this;
      debug("init()");
      this.oauth = require('./models/OAuth')(this.client);
      this.users = require('./models/Users')(this.client);
      this.projects = require('./models/Projects')(this.client);
      this.project_topics = require('./models/Project_topics')(this.client);
      this.commits = require('./models/Commits')(this.client);
      this.branchs = require('./models/Branchs')(this.client);
      this.trees = require('./models/Trees')(this.client);
      this.merge_requests = require('./models/Merge_requests')(this.client);
      this.pull_requests = require('./models/Pull_requests')(this.client);
      this.repo_files = require('./models/Repo_files')(this.client);
      this.tasks = require('./models/Tasks')(this.client);
      this.blobs = require('./models/Blobs')(this.client);
      this.depots = require('./models/Depots')(this.client);
      this.files = require('./models/Files')(this.client);
      this.historys = require('./models/Historys')(this.client);
      this.keys = require('./models/Keys')(this.client);
      this.tags = require('./models/Tags')(this.client);
      return this.tweets = require('./models/Tweets')(this.client);
    };

    return ApiBase;

  })();

}).call(this);
