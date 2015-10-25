//Generation

//https://coding.net/api/api-docs
//node makeApi.js > api.json

var _ = require('lodash')
var util = require('util')
var fs  = require('fs')

var apiDoc = require('./apiDoc')

var api = {};
var special = {};

var tmpmodel = `BaseModel = require '../BaseModel'
util = require 'util'

class %s extends BaseModel
%s
module.exports = (client) -> new %s client












`

var tmpfunc = `
  ###

   method		: %s
   operationId	: %s
   description	: %s
   path			: %s
   query		: %s
   body			: %s

  ###

  %s: (%s params = {}, fn = null) =>
    @debug "%s::%s()"
    @%s %s, params, (data) ->fn data if fn
`

for(key in apiDoc){
	if (!_.startsWith(key,"/api")) {
		special[key] = apiDoc[key];
	}else{
		var n1 = apiDoc[key];
		var method = n1["get"]?"get":n1["post"]?"post":n1["put"]?"put":n1["delete"]?"delete":"I don`t know";
		var obj = n1[method];
		if (obj && obj["tags"] && obj["tags"].length > 0) {
			var tag = obj["tags"][0];
			if(!api[tag]){
				api[tag] = {};
			}

			obj.url = key.replace(/\/api\//, '');
			obj.method = method;
			api[tag][obj["operationId"]] = obj;
		};
	};
}

var models = []

for(moduleName in api){
	var funcs = []
	var modules = api[moduleName];
	moduleName = _.capitalize(moduleName)+"s";

	for(funcName in modules){
		var func = modules[funcName];
		if (func) {
			var querys = {};
			var bodys = {};

			for (parameName in func.parameters) {
				var parame = func.parameters[parameName]
				if (parame.in === "query") {
					querys[parame.name]=parame.type?parame.type:parame.schema.type;
				};
				if (parame.in === "body") {
					bodys[parame.name]=parame.type?parame.type:parame.schema.type;
				};
			};

			var querysKey = _.keys(_.mapKeys(querys, function(value, key) {
				return key + '(' + value + ')';
			}));
			var querysStr = _.keys(querys);
			if (_.size(querys)!=0) {
				querysStr=querysStr+","
			};

			var bodysKey = _.keys(_.mapKeys(bodys, function(value, key) {
				return key + '(' + value + ')';
			}));
			var bodysStr = _.keys(querys);
			if (_.size(querys)!=0) {
				bodysStr=bodysStr+","
			};

			var url_generation = "";

			var url_raw = func.url;
			var url_replace = url_raw.replace(/(\{\w[-\w.+]*\}|\*)/g,"%s").replace(/%s%s/g,"%s");

			var url_a = url_raw.match(/(\{\w[-\w.+]*\}|\w[-\w.+]*\/\*)/g);

			var url_b = [];
			for(k in url_a){
				var m = url_a[k].match(/\w[-\w.+]*/g);
				for(k1 in m){
					url_b.push(m[k1])
				}
			}
			var url_bStr = url_b.join(",");
			if (_.size(url_b) > 0) {
				url_generation = util.format("util.format(\"%s\",%s)",url_replace,url_bStr)
				url_bStr = url_bStr + ","
			}else{
				url_generation = '"' + url_replace + '"';
			};

			funcs.push(util.format(tmpfunc,
				func.method,
				funcName,
				func.description,
				url_b.join(","),
				querysKey,
				bodysKey,
				funcName,
				url_bStr,
				moduleName,
				funcName,
				func.method,
				url_generation
				));
		};
	}

	fs.writeFile("../src/models/"+moduleName+".coffee", util.format(tmpmodel,
		moduleName,
		funcs.join(""),
		moduleName
		), function (error) {
		if (error) {
			console.error(error)
		}
	});
}