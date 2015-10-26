(function() {
  var Api;

  Api = require('./Api').Api;

  module.exports = function(options) {
    return new Api(options);
  };

  module.exports.Api = Api;

}).call(this);
