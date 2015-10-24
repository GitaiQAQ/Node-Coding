//https://coding.net/api/api-docs
//node makeApi.js > api.json

var baseUrl = "https://coding.net"

var apiDoc = {
    "/*/*/git/raw/**": {
        "get": {
            "tags": ["raw"],
            "summary": "get",
            "description": "显示文件的原始数据",
            "operationId": "getUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK"
                }
            }
        }
    },
    "/api/account/activate": {
        "post": {
            "tags": ["user"],
            "summary": "activate",
            "description": "账户激活",
            "operationId": "doActivateUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "email",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "key",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "password",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "confirm_password",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/activate/generate_phone_code": {
        "post": {
            "tags": ["user"],
            "summary": "generate_activate_phone_code",
            "description": "获取激活账号的手机验证码",
            "operationId": "_generateActivatePhoneCodeUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/account/activate/phone": {
        "post": {
            "tags": ["user"],
            "summary": "activate_phone",
            "description": "激活用手机注册的用户",
            "operationId": "_activatePhoneUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }, {
                "name": "code",
                "in": "query",
                "description": "code",
                "required": true,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "query",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "email",
                "in": "query",
                "description": "email",
                "required": true,
                "type": "string"
            }, {
                "name": "password",
                "in": "query",
                "description": "password",
                "required": true,
                "type": "string"
            }, {
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/avatar": {
        "get": {
            "tags": ["user"],
            "summary": "avatar",
            "description": "获取头像",
            "operationId": "getAvatarUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        },
        "post": {
            "tags": ["user"],
            "summary": "avatar",
            "description": "上传设置头像",
            "operationId": "setAvatarUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/account/captcha/{action}": {
        "get": {
            "tags": ["user"],
            "summary": "captcha",
            "description": "检查是否需要验证码",
            "operationId": "captchaUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "realRemoteAddress",
                "description": "realRemoteAddress",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "action",
                "in": "path",
                "description": "action",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/change_notice_setting": {
        "get": {
            "tags": ["user"],
            "summary": "change_notice_setting",
            "description": "修改通知设置",
            "operationId": "changeNotificationSettingUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "settingType",
                "in": "query",
                "description": "settingType",
                "required": true,
                "type": "string"
            }, {
                "name": "settingContent",
                "in": "query",
                "description": "settingContent",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/check": {
        "get": {
            "tags": ["user"],
            "summary": "check_email",
            "description": "检查email是否没有被注册过",
            "operationId": "checkUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "key",
                "in": "query",
                "description": "key",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/check/phone": {
        "get": {
            "tags": ["user"],
            "summary": "check_phone",
            "description": "检查手机是否没有被注册过",
            "operationId": "_checkPhoneUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/check_two_factor_auth_code": {
        "post": {
            "tags": ["user"],
            "summary": "check_two_factor_auth_code",
            "description": "登录时的两步验证",
            "operationId": "checkTwoFactorAuthCodeUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "code",
                "in": "query",
                "description": "code",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/current_user": {
        "get": {
            "tags": ["user"],
            "summary": "current_user",
            "description": "获取当前登录用户信息",
            "operationId": "currentUserUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/email": {
        "get": {
            "tags": ["user"],
            "summary": "email",
            "description": "获取当前用户的email",
            "operationId": "userEmailUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/account/get_notice_settings": {
        "get": {
            "tags": ["user"],
            "summary": "change_notice_setting",
            "description": "获取通知设置",
            "operationId": "getNotificationSettingsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserSettingGroupDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/account/gravatar": {
        "get": {
            "tags": ["user"],
            "summary": "gravatar",
            "description": "获取Gravatar头像",
            "operationId": "getGravatarUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/account/key/{global_key}": {
        "get": {
            "tags": ["user"],
            "summary": "get_user_by_global_key",
            "description": "通过个性后缀获取用户信息",
            "operationId": "getUserByGlobalKeyUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/login": {
        "post": {
            "tags": ["user"],
            "summary": "login",
            "description": "登录",
            "operationId": "doLoginUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "email",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "password",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "j_captcha",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "remember_me",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "realRemoteAddress",
                "description": "realRemoteAddress",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/login/generate_phone_code": {
        "post": {
            "tags": ["user"],
            "summary": "generate_login_phone_code",
            "description": "获取登录的手机验证码",
            "operationId": "_generateLoginPhoneCodeUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/account/login/phone": {
        "post": {
            "tags": ["user"],
            "summary": "login_by_phone",
            "description": "使用绑定过的手机号码登录",
            "operationId": "_doPhoneLoginUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }, {
                "name": "code",
                "in": "query",
                "description": "code",
                "required": true,
                "type": "string"
            }, {
                "name": "j_captcha",
                "in": "query",
                "description": "j_captcha",
                "required": false,
                "type": "string"
            }, {
                "name": "remember_me",
                "in": "query",
                "description": "remember_me",
                "required": false,
                "type": "boolean"
            }, {
                "in": "body",
                "name": "realRemoteAddress",
                "description": "realRemoteAddress",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/logout": {
        "post": {
            "tags": ["user"],
            "summary": "logout",
            "description": "注销登录",
            "operationId": "doLogoutUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/name/{name}": {
        "get": {
            "tags": ["user"],
            "summary": "get_user_by_name",
            "description": "通过昵称获取用户信息",
            "operationId": "getUserByNameUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "name",
                "in": "path",
                "description": "nameStr",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/projects/pin": {
        "get": {
            "tags": ["project"],
            "summary": "pin_project",
            "description": "获取常用项目列表",
            "operationId": "getPinProjectsUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "post": {
            "tags": ["project"],
            "summary": "pin_project",
            "description": "设置常用项目",
            "operationId": "pinProjectUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "in": "body",
                "name": "ids",
                "description": "ids",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        },
        "delete": {
            "tags": ["project"],
            "summary": "pin_project",
            "description": "取消常用项目",
            "operationId": "cancelPinProjectUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "in": "body",
                "name": "ids",
                "description": "ids",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/register": {
        "post": {
            "tags": ["user"],
            "summary": "register",
            "description": "注册",
            "operationId": "doRegisterUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "email",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "j_captcha",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "realRemoteAddress",
                "description": "realRemoteAddress",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/register/generate_phone_code": {
        "post": {
            "tags": ["user"],
            "summary": "generate_register_phone_code",
            "description": "获取注册的手机验证码",
            "operationId": "_generateRegisterPhoneCodeUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/account/register/phone": {
        "post": {
            "tags": ["user"],
            "summary": "phone_register",
            "description": "使用手机注册",
            "operationId": "_doPhoneRegisterUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "phone",
                "in": "query",
                "description": "phone",
                "required": true,
                "type": "string"
            }, {
                "name": "code",
                "in": "query",
                "description": "code",
                "required": true,
                "type": "string"
            }, {
                "in": "body",
                "name": "realRemoteAddress",
                "description": "realRemoteAddress",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/update_info": {
        "post": {
            "tags": ["user"],
            "summary": "avatar",
            "description": "更新用户信息",
            "operationId": "updateInfoUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "tags",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "sex",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "phone",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "birthday",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "location",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "company",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "slogan",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "introduction",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "job",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "code",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/account/update_pwd": {
        "post": {
            "tags": ["user"],
            "summary": "update_pwd",
            "description": "修改用户密码",
            "operationId": "updatePasswordUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "current_password",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "password",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "confirm_password",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/account/updateavatar": {
        "post": {
            "tags": ["user"],
            "summary": "avatar",
            "description": "更新头像",
            "operationId": "updateAvatarUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "sid",
                "description": "sid",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "avatar",
                "in": "query",
                "description": "avatar",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/UserDTO"
                    }
                }
            }
        }
    },
    "/api/project": {
        "put": {
            "tags": ["project"],
            "summary": "update",
            "description": "更新项目信息",
            "operationId": "updateUsingPUT_1",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "description",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ProjectDTO"
                    }
                }
            }
        }
    },
    "/api/project/*/task": {
        "post": {
            "tags": ["task"],
            "summary": "create",
            "description": "创建任务",
            "operationId": "createUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "owner_id",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "priority",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "deadline",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "description",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "labels",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "watchers",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TaskDTO"
                    }
                }
            }
        }
    },
    "/api/project/*/task/{id}": {
        "get": {
            "tags": ["task"],
            "summary": "create",
            "description": "创建任务",
            "operationId": "getTaskUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "parseDescription",
                "in": "query",
                "description": "parseDescription",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TaskDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["task"],
            "summary": "delete",
            "description": "删除任务",
            "operationId": "deleteUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/project/*/tasks/user/{owner}/{status}": {
        "get": {
            "tags": ["task"],
            "summary": "list",
            "description": "列出某人的任务列表",
            "operationId": "listOfOwnerUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "owner",
                "in": "path",
                "description": "user_global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "status",
                "in": "path",
                "description": "status",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }, {
                "in": "body",
                "name": "key",
                "description": "key",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTaskDTO"
                    }
                }
            }
        }
    },
    "/api/projects/recommended": {
        "get": {
            "tags": ["project"],
            "summary": "recommended_list",
            "description": "推荐项目list",
            "operationId": "recommendedListUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/ProjectDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/public/all": {
        "get": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "publicProjectUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPage"
                    }
                }
            }
        }
    },
    "/api/social/follow": {
        "post": {
            "tags": ["user"],
            "summary": "follow",
            "description": "关注用户",
            "operationId": "followUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "users",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/followers": {
        "get": {
            "tags": ["user"],
            "summary": "follower",
            "description": "关注我的用户",
            "operationId": "followersUsingGET_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfUserDTO"
                    }
                }
            }
        }
    },
    "/api/social/followers/{global_key}": {
        "get": {
            "tags": ["user"],
            "summary": "follower",
            "description": "获取关注默认的用户",
            "operationId": "followersUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfUserDTO"
                    }
                }
            }
        }
    },
    "/api/social/friends": {
        "get": {
            "tags": ["user"],
            "summary": "friends",
            "description": "我关注的用户列表",
            "operationId": "friendsUsingGET_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfUserDTO"
                    }
                }
            }
        }
    },
    "/api/social/friends/{global_key}": {
        "get": {
            "tags": ["user"],
            "summary": "friends",
            "description": "指定用户的关注列表",
            "operationId": "friendsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfUserDTO"
                    }
                }
            }
        }
    },
    "/api/social/relationship/{global_key}": {
        "get": {
            "tags": ["user"],
            "summary": "relationship",
            "description": "是否关注了该用户",
            "operationId": "relationshipUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/relationships": {
        "get": {
            "tags": ["user"],
            "summary": "change_notice_setting",
            "description": "获取我关注和关注我的用户列表",
            "operationId": "getRelationshipUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserFollowDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/relationships/all": {
        "get": {
            "tags": ["user"],
            "summary": "change_notice_setting",
            "description": "获取我关注和关注我的用户列表包含成员列表",
            "operationId": "getRelationshipWithProjectMemberUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "project_id",
                "in": "query",
                "description": "project_id",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/search": {
        "get": {
            "tags": ["user"],
            "summary": "search",
            "description": "搜索用户",
            "operationId": "searchUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "key",
                "in": "query",
                "description": "key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/tweet": {
        "post": {
            "tags": ["tweet"],
            "summary": "create",
            "description": "发送冒泡",
            "operationId": "createUsingPOST_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "device",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "location",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "coord",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "address",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TweetDTO"
                    }
                }
            }
        }
    },
    "/api/social/tweet/best_user": {
        "get": {
            "tags": ["tweet"],
            "summary": "best_user",
            "description": "热门用户",
            "operationId": "bestUserUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/tweet/comment/{id}": {
        "get": {
            "tags": ["tweet"],
            "summary": "comment",
            "description": "获取某个评论",
            "operationId": "query_a_commentUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TweetCommentDTO"
                    }
                }
            }
        }
    },
    "/api/social/tweet/insert_image": {
        "post": {
            "tags": ["tweet"],
            "summary": "image",
            "description": "冒泡插入图片",
            "operationId": "insert_imageUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/social/tweet/last": {
        "get": {
            "tags": ["tweet"],
            "summary": "last_tweet_list",
            "description": "查询last_id以后的最新冒泡",
            "operationId": "lastTweetUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "default_like_count",
                "in": "query",
                "description": "default_like_count",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "last_id",
                "in": "query",
                "description": "last_id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TweetDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/tweet/public_tweets": {
        "get": {
            "tags": ["tweet"],
            "summary": "list",
            "description": "冒泡列表",
            "operationId": "public_tweetsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "sort",
                "in": "query",
                "description": "sort",
                "required": false,
                "type": "string"
            }, {
                "name": "last_id",
                "in": "query",
                "description": "last_id",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "default_like_count",
                "in": "query",
                "description": "default_like_count",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "filter",
                "in": "query",
                "description": "filter",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TweetDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/tweet/user_public": {
        "get": {
            "tags": ["tweet"],
            "summary": "user_public",
            "description": "用户冒泡列表",
            "operationId": "user_publicUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "last_id",
                "in": "query",
                "description": "last_id",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "user_id",
                "in": "query",
                "description": "user_id",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "global_key",
                "in": "query",
                "description": "global_key",
                "required": false,
                "type": "string"
            }, {
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "default_like_count",
                "in": "query",
                "description": "default_like_count",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TweetDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/social/tweet/{global_key}/{tweet_id}": {
        "get": {
            "tags": ["tweet"],
            "summary": "detail",
            "description": "获取冒泡详情",
            "operationId": "detailUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tweet_id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "default_like_count",
                "in": "query",
                "description": "default_like_count",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TweetDTO"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{id}/comment": {
        "post": {
            "tags": ["tweet"],
            "summary": "comment",
            "description": "冒泡评论",
            "operationId": "commentUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "tweetId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "afterFilter",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TweetCommentDTO"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{id}/comment/{comment_id}": {
        "delete": {
            "tags": ["tweet"],
            "summary": "comment",
            "description": "删除冒泡评论",
            "operationId": "delete_commentUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "comment",
                "in": "path",
                "description": "commentId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{id}/comments": {
        "get": {
            "tags": ["tweet"],
            "summary": "comment",
            "description": "获取冒泡评论列表",
            "operationId": "query_commentUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "tweetId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTweetCommentDTO"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{tweet_id}": {
        "delete": {
            "tags": ["tweet"],
            "summary": "delete",
            "description": "删除冒泡",
            "operationId": "deleteTweetUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tweet_id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{tweet_id}/like": {
        "post": {
            "tags": ["tweet"],
            "summary": "like",
            "description": "冒泡点赞",
            "operationId": "like_tweetUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tweet_id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{tweet_id}/tweetlike": {
        "get": {
            "tags": ["tweet"],
            "summary": "like_tweet_list",
            "description": "赞过的冒泡列表",
            "operationId": "getTweetLikeUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tweet_id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTweetLike"
                    }
                }
            }
        }
    },
    "/api/social/tweet/{tweet_id}/unlike": {
        "post": {
            "tags": ["tweet"],
            "summary": "unlike",
            "description": "冒泡取消点赞",
            "operationId": "unlike_tweetUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tweet_id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/unfollow": {
        "post": {
            "tags": ["user"],
            "summary": "unfollow",
            "description": "取消关注",
            "operationId": "unfollowUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "users",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/social/unread_count": {
        "get": {
            "tags": ["user"],
            "summary": "unread_count",
            "description": "未读消息通知",
            "operationId": "unreadCountUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/Number"
                        }
                    }
                }
            }
        }
    },
    "/api/task/creating": {
        "get": {
            "tags": ["task"],
            "summary": "create",
            "description": "全局任务创建",
            "operationId": "taskCreatingUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/tweet/public_tweets": {
        "get": {
            "tags": ["tweet"],
            "summary": "public_tweets",
            "description": "冒泡广场列表",
            "operationId": "_public_tweetsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "sort",
                "in": "query",
                "description": "sort",
                "required": false,
                "type": "string"
            }, {
                "name": "last_id",
                "in": "query",
                "description": "last_id",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "default_like_count",
                "in": "query",
                "description": "default_like_count",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "filter",
                "in": "query",
                "description": "filter",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/TweetDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*": {
        "get": {
            "tags": ["project"],
            "summary": "query_by_name",
            "description": "通过名称查询",
            "operationId": "queryByNameUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ProjectDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["project"],
            "summary": "delete_project",
            "description": "删除项目",
            "operationId": "deleteProjectUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/dir/{dir}/files/existed": {
        "get": {
            "tags": ["file"],
            "summary": "check_existed",
            "description": "检查目录下是否有同名的文件",
            "operationId": "checkExistedUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "dir",
                "in": "path",
                "description": "folderId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "in": "body",
                "name": "names",
                "description": "names",
                "required": false,
                "schema": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/file/history/upload": {
        "post": {
            "tags": ["file"],
            "summary": "upload_new_version",
            "description": "上传文件新版本",
            "operationId": "uploadFileHistoryUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files": {
        "delete": {
            "tags": ["file"],
            "summary": "view",
            "description": "删除文件",
            "operationId": "deleteFilesUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "in": "body",
                "name": "fileIds",
                "description": "fileIds",
                "required": false,
                "schema": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/histories/{id}": {
        "delete": {
            "tags": ["file"],
            "summary": "history",
            "description": "删除文件历史",
            "operationId": "deleteFileHistoryUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/histories/{id}/download": {
        "get": {
            "tags": ["file"],
            "summary": "download",
            "description": "下载历史文件版本",
            "operationId": "downloadHistoryUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "historyId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/upload": {
        "post": {
            "tags": ["file"],
            "summary": "upload",
            "description": "上传私有项目的图片",
            "operationId": "uploadFileUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/FileDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{fileId}/download": {
        "get": {
            "tags": ["file"],
            "summary": "download",
            "description": "文件下载",
            "operationId": "downloadFileUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "fileId",
                "in": "path",
                "description": "fileId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{fileId}/download/url": {
        "get": {
            "tags": ["file"],
            "summary": "download",
            "description": "文件下载URL",
            "operationId": "downloadURLUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "fileId",
                "in": "path",
                "description": "fileId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{fileId}/edit": {
        "post": {
            "tags": ["file"],
            "summary": "edit",
            "description": "编辑文件",
            "operationId": "editFileUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "fileId",
                "in": "path",
                "description": "fileId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "fileId",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{fileId}/view": {
        "get": {
            "tags": ["file"],
            "summary": "view",
            "description": "查看文件",
            "operationId": "viewFileUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "width",
                "in": "query",
                "description": "width",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "height",
                "in": "query",
                "description": "height",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "fileId",
                "in": "path",
                "description": "fileId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "flag",
                "in": "query",
                "description": "flag",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{fileId}/view/image": {
        "get": {
            "tags": ["file"],
            "summary": "preview",
            "description": "图片预览",
            "operationId": "imagePreviewUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "width",
                "in": "query",
                "description": "width",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "height",
                "in": "query",
                "description": "height",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "fileId",
                "in": "path",
                "description": "fileId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{file_id}/histories/{history_id}/remark": {
        "post": {
            "tags": ["file"],
            "summary": "update_file_remark",
            "description": "修改历史版本备注",
            "operationId": "updateFileHistoryRemarkUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "remark",
                "in": "query",
                "description": "remark",
                "required": true,
                "type": "string"
            }, {
                "name": "history_id",
                "in": "path",
                "description": "historyId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "file_id",
                "in": "path",
                "description": "file_id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{folderId}/files": {
        "post": {
            "tags": ["file"],
            "summary": "create",
            "description": "创建文件",
            "operationId": "createFileUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "folderId",
                "in": "path",
                "description": "folderId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "projectFile.deleted_at",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "projectFile.projects_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "projectFile.files_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "projectFile.comments",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "projectFile.id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "folder.owner_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "folder.parent_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "folder.created_at",
                "in": "query",
                "required": false,
                "type": "ref"
            }, {
                "name": "folder.updated_at",
                "in": "query",
                "required": false,
                "type": "ref"
            }, {
                "name": "folder.type",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "folder.size",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "folder.name",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "folder.storage_type",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "folder.storage_key",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "folder.history_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "folder.id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "folderId",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/files/{id}/histories": {
        "get": {
            "tags": ["file"],
            "summary": "history",
            "description": "文件历史",
            "operationId": "listFileHistoryUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "width",
                "in": "query",
                "description": "width",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "height",
                "in": "query",
                "description": "height",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/FileHistoryDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folder": {
        "post": {
            "tags": ["file"],
            "summary": "mkdir",
            "description": "创建文件夹",
            "operationId": "mkdirUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "parentId",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/DirDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["file"],
            "summary": "mkdir",
            "description": "删除文件夹",
            "operationId": "rmdirUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "dir",
                "in": "path",
                "description": "folderId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folder/{dirId}/move": {
        "put": {
            "tags": ["file"],
            "summary": "move",
            "description": "移动文件",
            "operationId": "moveUsingPUT",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "dirId",
                "in": "path",
                "description": "dirId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "fileId",
                "in": "query",
                "required": false,
                "type": "ref"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folder/{dir}": {
        "put": {
            "tags": ["file"],
            "summary": "rename_folder",
            "description": "重命名文件夹",
            "operationId": "renameFolderUsingPUT",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "dir",
                "in": "path",
                "description": "folderId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "name",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folder/{dir}/files": {
        "get": {
            "tags": ["file"],
            "summary": "files",
            "description": "列出某目录下的文件",
            "operationId": "listFileUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "dir",
                "in": "path",
                "description": "folderId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "width",
                "in": "query",
                "description": "width",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "height",
                "in": "query",
                "description": "height",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfFileDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folders": {
        "get": {
            "tags": ["file"],
            "summary": "folders",
            "description": "列出所有一级目录",
            "operationId": "listFolderUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfDirDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folders/all": {
        "get": {
            "tags": ["file"],
            "summary": "folders",
            "description": "列出所有目录",
            "operationId": "listAllFolderUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfDirDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/folders/file_count/all": {
        "get": {
            "tags": ["file"],
            "summary": "count",
            "description": "获取文件夹的文件数",
            "operationId": "allFolderFileCountUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/FolderFileCount"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git": {
        "get": {
            "tags": ["depot"],
            "summary": "get",
            "description": "获取仓库信息",
            "operationId": "indexUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/DepotDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/blob/**": {
        "get": {
            "tags": ["blob"],
            "summary": "get",
            "description": "获取 blob",
            "operationId": "blobUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "User-Agent",
                "in": "header",
                "description": "userAgent",
                "required": false,
                "type": "string"
            }, {
                "name": "Accept",
                "in": "header",
                "description": "accept",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "currentApp",
                "description": "currentApp",
                "required": false,
                "schema": {
                    "$ref": "#/definitions/CustomerPlatform"
                }
            }, {
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/Serializable"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branch/default": {
        "post": {
            "tags": ["branch"],
            "summary": "default",
            "description": "设置默认分支",
            "operationId": "setDefaultBranchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "default_branch",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches": {
        "get": {
            "tags": ["branch"],
            "summary": "list_branches",
            "description": "分页显示分支列表",
            "operationId": "listUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPage"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/create": {
        "post": {
            "tags": ["branch"],
            "summary": "create",
            "description": "新建分支",
            "operationId": "createBranchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }, {
                "name": "start_point",
                "in": "query",
                "description": "start_point",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/delete": {
        "post": {
            "tags": ["branch"],
            "summary": "delete",
            "description": "删除分支",
            "operationId": "deleteBranchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/protected_branch/add_member": {
        "post": {
            "tags": ["branch"],
            "summary": "add_member",
            "description": "添加保护分支成员",
            "operationId": "addProtectedBranchMemberUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }, {
                "name": "target_global_key",
                "in": "query",
                "description": "target_global_key",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/protected_branch/disable": {
        "post": {
            "tags": ["branch"],
            "summary": "protected_branch",
            "description": "取消保护分支",
            "operationId": "disableProtectedBranchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/protected_branch/enable": {
        "post": {
            "tags": ["branch"],
            "summary": "protected_branch",
            "description": "设置保护分支",
            "operationId": "enableProtectedBranchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/protected_branch/members": {
        "get": {
            "tags": ["branch"],
            "summary": "members",
            "description": "列出保护分支中的成员",
            "operationId": "listProtectedBranchMemberUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/branches/protected_branch/remove_member": {
        "post": {
            "tags": ["branch"],
            "summary": "delete_member",
            "description": "删除保护分支成员",
            "operationId": "removeProtectedBranchMemberUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "branch_name",
                "in": "query",
                "description": "branch_name",
                "required": true,
                "type": "string"
            }, {
                "name": "target_global_key",
                "in": "query",
                "description": "target_global_key",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/commit/**": {
        "get": {
            "tags": ["commit"],
            "summary": "show",
            "description": "commit 列表",
            "operationId": "showUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "User-Agent",
                "in": "header",
                "description": "userAgent",
                "required": false,
                "type": "string"
            }, {
                "name": "Accept",
                "in": "header",
                "description": "accept",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "currentApp",
                "description": "currentApp",
                "required": false,
                "schema": {
                    "$ref": "#/definitions/CustomerPlatform"
                }
            }, {
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "diff",
                "in": "query",
                "description": "diff",
                "required": false,
                "type": "string"
            }, {
                "name": "w",
                "in": "query",
                "description": "w",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/commits/**": {
        "get": {
            "tags": ["history"],
            "summary": "get",
            "description": "获取代码的历史",
            "operationId": "historyUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "User-Agent",
                "in": "header",
                "description": "userAgent",
                "required": false,
                "type": "string"
            }, {
                "name": "Accept",
                "in": "header",
                "description": "accept",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "currentApp",
                "description": "currentApp",
                "required": false,
                "schema": {
                    "$ref": "#/definitions/CustomerPlatform"
                }
            }, {
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/Serializable"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/delete/**": {
        "get": {
            "tags": ["repo_file"],
            "summary": "delete",
            "description": "删除文件",
            "operationId": "delete_fileUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json;charset=utf-8"],
            "parameters": [{
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/Serializable"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/edit/**": {
        "get": {
            "tags": ["repo_file"],
            "summary": "update",
            "description": "更新文件",
            "operationId": "edit_fileUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json;charset=utf-8"],
            "parameters": [{
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "$ref": "#/definitions/Serializable"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/fork": {
        "post": {
            "tags": ["depot"],
            "summary": "fork",
            "description": "fork",
            "operationId": "forkUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/DepotDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/forks": {
        "get": {
            "tags": ["depot"],
            "summary": "fork_list",
            "description": "项目被fork的列表",
            "operationId": "forksUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/DepotDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/hook": {
        "post": {
            "tags": ["depot"],
            "summary": "create_webhook",
            "description": "创建 webhook",
            "operationId": "createWebHookUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "hook_url",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "token",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "type_push",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_mr_pr",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_topic",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_member",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_comment",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_document",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_watch",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_star",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_task",
                "in": "query",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/hook/{id}": {
        "get": {
            "tags": ["depot"],
            "summary": "get_webhook",
            "description": "获取 webhook",
            "operationId": "getWebHookUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/WebHook"
                    }
                }
            }
        },
        "put": {
            "tags": ["depot"],
            "summary": "update_webhook",
            "description": "编辑 webhook",
            "operationId": "editWebHookUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "string"
            }, {
                "name": "hook_url",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "token",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "type_push",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_mr_pr",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_topic",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_member",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_comment",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_document",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_watch",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_star",
                "in": "query",
                "required": false,
                "type": "boolean"
            }, {
                "name": "type_task",
                "in": "query",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        },
        "delete": {
            "tags": ["depot"],
            "summary": "delete_webhook",
            "description": "删除 webhook",
            "operationId": "deleteWebHookUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/hooks": {
        "get": {
            "tags": ["depot"],
            "summary": "list",
            "description": "列出项目设置的 webhook",
            "operationId": "listWebHookUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/WebHook"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/import": {
        "get": {
            "tags": ["depot"],
            "summary": "import_repo",
            "description": "导入仓库",
            "operationId": "importRepoUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "origin_url",
                "in": "query",
                "description": "origin_url",
                "required": true,
                "type": "string"
            }, {
                "name": "vcs_type",
                "in": "query",
                "description": "vcs_type",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        },
        "post": {
            "tags": ["depot"],
            "summary": "import_repo",
            "description": "导入仓库",
            "operationId": "importRepoUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "origin_url",
                "in": "query",
                "description": "origin_url",
                "required": true,
                "type": "string"
            }, {
                "name": "vcs_type",
                "in": "query",
                "description": "vcs_type",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/init": {
        "post": {
            "tags": ["depot"],
            "summary": "init_depot",
            "description": "初始化仓库",
            "operationId": "initDepotUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "gitReadmeEnabled",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "gitIgnore",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "gitLicense",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "importFrom",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "vcsType",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/merge": {
        "post": {
            "tags": ["merge_request"],
            "summary": "create",
            "description": "创建 MergeRequest",
            "operationId": "do_createUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "srcBranch",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "desBranch",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "title",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "reviewers",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "tasks",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/merge/{iid}": {
        "get": {
            "tags": ["merge_request"],
            "summary": "get",
            "description": "显示某个 MergeRequest",
            "operationId": "showUsingGET_2",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "diff",
                "in": "query",
                "description": "diff",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        },
        "put": {
            "tags": ["merge_request"],
            "summary": "update",
            "description": "更新某个 MergeRequest",
            "operationId": "updateUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "srcBranch",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "desBranch",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "title",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "reviewers",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "tasks",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/merge/{iid}/cancel": {
        "post": {
            "tags": ["merge_request"],
            "summary": "cancel",
            "description": "取消 MergeRequest",
            "operationId": "cancelUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/merge/{iid}/merge": {
        "post": {
            "tags": ["merge_request"],
            "summary": "merge",
            "description": "合并某个 MergeRequest",
            "operationId": "mergeUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "message",
                "in": "query",
                "description": "message",
                "required": false,
                "type": "string"
            }, {
                "name": "del_source_branch",
                "in": "query",
                "description": "del_source_branch",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/MergeRequestDetailDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/merge/{iid}/refuse": {
        "post": {
            "tags": ["merge_request"],
            "summary": "refuse",
            "description": "拒绝某个 MergeRequest",
            "operationId": "refuseUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/MergeRequestDetailDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/merges/{status}": {
        "get": {
            "tags": ["merge_request"],
            "summary": "list",
            "description": "MergeRequest 列表",
            "operationId": "listUsingGET_2",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "status",
                "in": "path",
                "description": "filter",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfMergeRequestDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/new/**": {
        "get": {
            "tags": ["repo_file"],
            "summary": "create",
            "description": "新建文件",
            "operationId": "create_fileUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json;charset=utf-8"],
            "parameters": [{
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/create": {
        "get": {
            "tags": ["pull_request"],
            "summary": "create",
            "description": "创建 PullRequest",
            "operationId": "createUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "src_branch",
                "in": "query",
                "description": "src_branch",
                "required": false,
                "type": "string"
            }, {
                "name": "des_user_name",
                "in": "query",
                "description": "des_user_name",
                "required": false,
                "type": "string"
            }, {
                "name": "des_project_name",
                "in": "query",
                "description": "des_project_name",
                "required": false,
                "type": "string"
            }, {
                "name": "des_branch",
                "in": "query",
                "description": "des_branch",
                "required": false,
                "type": "string"
            }, {
                "name": "diff",
                "in": "query",
                "description": "diff",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/{iid}": {
        "get": {
            "tags": ["pull_request"],
            "summary": "get",
            "description": "获取某个 PullRequest",
            "operationId": "showUsingGET_3",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "diff",
                "in": "query",
                "description": "diff",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/{iid}/cancel": {
        "post": {
            "tags": ["pull_request"],
            "summary": "cancle",
            "description": "取消 PullRequest",
            "operationId": "cancelUsingPOST_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/{iid}/comments": {
        "get": {
            "tags": ["pull_request"],
            "summary": "comments",
            "description": "PullRequest 评论列表",
            "operationId": "commentsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/{iid}/commits": {
        "get": {
            "tags": ["pull_request"],
            "summary": "commits",
            "description": "获取某个 PullRequest 的评论",
            "operationId": "showCommitsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/CommitDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/{iid}/merge": {
        "post": {
            "tags": ["pull_request"],
            "summary": "merge",
            "description": "合并 PullRequest",
            "operationId": "mergeUsingPOST_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "message",
                "in": "query",
                "description": "message",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/PullRequestDetailDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pull/{iid}/refuse": {
        "post": {
            "tags": ["pull_request"],
            "summary": "refuse",
            "description": "拒绝 PullRequest",
            "operationId": "refuseUsingPOST_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "iid",
                "in": "path",
                "description": "iid",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/PullRequestDetailDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/pulls/{status}": {
        "get": {
            "tags": ["pull_request"],
            "summary": "list",
            "description": "PullRequest 列表",
            "operationId": "listUsingGET_3",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "status",
                "in": "path",
                "description": "filter",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfPullRequestDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/tags": {
        "get": {
            "tags": ["tag"],
            "summary": "list",
            "description": "标签列表",
            "operationId": "listUsingGET_4",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfRefDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/tags/create": {
        "post": {
            "tags": ["tag"],
            "summary": "create",
            "description": "创建标签",
            "operationId": "createTagUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tag_name",
                "in": "query",
                "description": "tag_name",
                "required": true,
                "type": "string"
            }, {
                "name": "tag_point",
                "in": "query",
                "description": "tag_point",
                "required": false,
                "type": "string"
            }, {
                "name": "message",
                "in": "query",
                "description": "message",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/tags/delete": {
        "post": {
            "tags": ["tag"],
            "summary": "delete",
            "description": "删除标签",
            "operationId": "deleteTagUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "tag_name",
                "in": "query",
                "description": "tag_name",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/git/tree/**": {
        "get": {
            "tags": ["tree"],
            "summary": "webhook",
            "description": "目录",
            "operationId": "treeUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "User-Agent",
                "in": "header",
                "description": "userAgent",
                "required": false,
                "type": "string"
            }, {
                "name": "Accept",
                "in": "header",
                "description": "accept",
                "required": false,
                "type": "string"
            }, {
                "in": "body",
                "name": "currentApp",
                "description": "currentApp",
                "required": false,
                "schema": {
                    "$ref": "#/definitions/CustomerPlatform"
                }
            }, {
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/project_icon": {
        "post": {
            "tags": ["project"],
            "summary": "set_project_icon",
            "description": "设置项目图标",
            "operationId": "setProjectIconUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ProjectDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/star": {
        "post": {
            "tags": ["project"],
            "summary": "star",
            "description": "收藏项目",
            "operationId": "starUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/stared": {
        "post": {
            "tags": ["project"],
            "summary": "stared",
            "description": "项目是否被收藏",
            "operationId": "staredUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/count": {
        "get": {
            "tags": ["task"],
            "summary": "count",
            "description": "任务统计信息",
            "operationId": "taskCountByUserUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "project_id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserTaskCount"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}": {
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务",
            "operationId": "update4clientUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "status",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "priority",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "owner_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "deadline",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "description",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/comment": {
        "post": {
            "tags": ["task"],
            "summary": "create_comment",
            "description": "创建任务评论",
            "operationId": "pubCommentUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "in": "body",
                "name": "content",
                "description": "content",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TaskCommentDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/comment/{commentId}": {
        "delete": {
            "tags": ["task"],
            "summary": "create_comment",
            "description": "删除任务评论",
            "operationId": "deleteCommentUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "commentId",
                "in": "path",
                "description": "commentId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/comments": {
        "get": {
            "tags": ["task"],
            "summary": "comment",
            "description": "获取任务评论",
            "operationId": "getCommentsUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTaskCommentDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/content": {
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务内容",
            "operationId": "updateContentUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/deadline": {
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务截止日期",
            "operationId": "updateDeadlineUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "deadline",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/description": {
        "get": {
            "tags": ["task"],
            "summary": "watch",
            "description": "获取任务描述",
            "operationId": "getDescriptionUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        },
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务描述",
            "operationId": "updateDescriptionUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "description",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/label/{labelId}": {
        "post": {
            "tags": ["task"],
            "summary": "label",
            "description": "添加任务标签",
            "operationId": "addTaskLabelUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "taskId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "labelId",
                "in": "path",
                "description": "labelId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        },
        "delete": {
            "tags": ["task"],
            "summary": "watch",
            "description": "删除任务标签",
            "operationId": "deleteTaskLabelUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "taskId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "labelId",
                "in": "path",
                "description": "labelId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/labels": {
        "post": {
            "tags": ["task"],
            "summary": "watch",
            "description": "批量操作任务标签",
            "operationId": "operateTaskLabelsUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "taskId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "label_id",
                "in": "query",
                "description": "labelIdStrs",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/owner": {
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务执行者",
            "operationId": "updateOwnerUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "owner_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/priority": {
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务优先级",
            "operationId": "updatePriorityUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "priority",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/status": {
        "put": {
            "tags": ["task"],
            "summary": "update",
            "description": "修改任务状态",
            "operationId": "updateStatusUsingPUT",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "status",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/watch": {
        "post": {
            "tags": ["task"],
            "summary": "watch",
            "description": "关注任务",
            "operationId": "watchUsingPOST_2",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        },
        "delete": {
            "tags": ["task"],
            "summary": "watch",
            "description": "取消任务关注",
            "operationId": "cancleWatchUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/task/{id}/watchers": {
        "get": {
            "tags": ["task"],
            "summary": "get_task_list_by_label",
            "description": "关注该任务的用户",
            "operationId": "pageTaskWatchersUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "taskId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfUserDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/tasks/count": {
        "get": {
            "tags": ["task"],
            "summary": "count",
            "description": " 获取当前用户项目的已完成、正在进行的、关注的数值",
            "operationId": "userTasksCountUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/tasks/count_all": {
        "get": {
            "tags": ["task"],
            "summary": "count",
            "description": "统计所有 已完成 和 正在处理 的任务数",
            "operationId": "userTasksCountInProjectUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserProjectCount"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/tasks/label/{id}": {
        "get": {
            "tags": ["task"],
            "summary": "get_task_list_by_label",
            "description": "查询标签下的任务列表",
            "operationId": "getTaskByLabelUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "labelId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }, {
                "in": "body",
                "name": "global_key",
                "description": "global_key",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTaskDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/tasks/my/{status}": {
        "get": {
            "tags": ["task"],
            "summary": "count",
            "description": "列出当前用户某项目某状态的任务列表",
            "operationId": "userTasksOfProjectUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "status",
                "in": "path",
                "description": "status",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTaskDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/tasks/{status}": {
        "get": {
            "tags": ["task"],
            "summary": "list",
            "description": "任务列表",
            "operationId": "listUsingGET_5",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "status",
                "in": "path",
                "description": "status",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }, {
                "in": "body",
                "name": "key",
                "description": "key",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfTaskDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics": {
        "get": {
            "tags": ["project_topic"],
            "summary": "list",
            "description": "项目讨论列表",
            "operationId": "projectTopicListUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "orderBy",
                "in": "query",
                "description": "orderBy",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectTopicDTO"
                    }
                }
            }
        },
        "post": {
            "tags": ["project_topic"],
            "summary": "create",
            "description": "创建讨论/发表评论",
            "operationId": "createProjectTopicUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "parent",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "title",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "label",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ProjectTopicDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/count": {
        "get": {
            "tags": ["project_topic"],
            "summary": "count",
            "description": "所有讨论的个数和我的讨论的个数",
            "operationId": "topicCountUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/label/{id}": {
        "get": {
            "tags": ["project_topic"],
            "summary": "get_project_topic_by_label",
            "description": "通过标签获得讨论列表",
            "operationId": "getProjectTopicByLabelUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "labelId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "orderBy",
                "in": "query",
                "description": "orderBy",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectTopicDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/labels/my": {
        "get": {
            "tags": ["project_topic"],
            "summary": "count",
            "description": "所有讨论的个数和我的讨论的个数",
            "operationId": "getMyLabelByProjectUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/ProjectLabelDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/mine": {
        "get": {
            "tags": ["project_topic"],
            "summary": "list",
            "description": "我的讨论",
            "operationId": "myProjectTopicListUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "orderBy",
                "in": "query",
                "description": "orderBy",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectTopicDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/watching": {
        "get": {
            "tags": ["project_topic"],
            "summary": "watched_project_topic_list",
            "description": "获取我关注的讨论列表",
            "operationId": "myWatchingProjectTopicsUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "orderBy",
                "in": "query",
                "description": "orderBy",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectTopicDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/{id}": {
        "get": {
            "tags": ["project_topic"],
            "summary": "detail",
            "description": "讨论详情",
            "operationId": "projectTopicDetailUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "projectTopicId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "toc",
                "in": "query",
                "description": "toc",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ProjectTopicDTO"
                    }
                }
            }
        },
        "put": {
            "tags": ["project_topic"],
            "summary": "update",
            "description": "更新讨论",
            "operationId": "updateProjectTopicUsingPUT",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "topic_id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "topic_id",
                "in": "query",
                "required": false,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "title",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "label",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ProjectTopicDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["project_topic"],
            "summary": "delete",
            "description": "删除讨论/删除讨论评论",
            "operationId": "deleteProjectTopicUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "topic_id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/{id}/comments": {
        "get": {
            "tags": ["project_topic"],
            "summary": "comments",
            "description": "讨论评论列表",
            "operationId": "projectTopicCommentsUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "projectTopicId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }, {
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectTopicDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/{id}/label/{labelId}": {
        "post": {
            "tags": ["project_topic"],
            "summary": "add_topic_label",
            "description": "讨论添加标签",
            "operationId": "addTopicLabelUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "projectTopicId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "labelId",
                "in": "path",
                "description": "labelId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        },
        "delete": {
            "tags": ["project_topic"],
            "summary": "delete_topic_label",
            "description": "删除讨论标签",
            "operationId": "deleteTopicLabelUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "projectTopicId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "labelId",
                "in": "path",
                "description": "labelId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/{id}/labels": {
        "post": {
            "tags": ["project_topic"],
            "summary": "operate_topic_label",
            "description": "批量操作讨论标签",
            "operationId": "operateTopicLabelsUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "projectTopicId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "label_id",
                "in": "query",
                "description": "labelIdStrs",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/{id}/watch": {
        "post": {
            "tags": ["project_topic"],
            "summary": "watch",
            "description": "关注讨论",
            "operationId": "watchUsingPOST_1",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/topics/{id}/watchers": {
        "get": {
            "tags": ["project_topic"],
            "summary": "watchers",
            "description": "获取关注该讨论的用户",
            "operationId": "getTopicWatchersUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "id",
                "required": true,
                "type": "integer",
                "format": "int32"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfUserDTO"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/unstar": {
        "post": {
            "tags": ["project"],
            "summary": "unstar",
            "description": "项目取消收藏",
            "operationId": "unstarUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/unwatch": {
        "post": {
            "tags": ["project"],
            "summary": "unwatch",
            "description": "项目取消关注",
            "operationId": "unwatchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/update_visit": {
        "get": {
            "tags": ["project"],
            "summary": "visit_project",
            "description": "更新项目阅读时间",
            "operationId": "visitProjectUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/watch": {
        "post": {
            "tags": ["project"],
            "summary": "watch",
            "description": "关注项目",
            "operationId": "watchUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/watched": {
        "post": {
            "tags": ["project"],
            "summary": "watched",
            "description": "项目是否被关注",
            "operationId": "watchedUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/*/project/*/watchers": {
        "get": {
            "tags": ["project"],
            "summary": "watched",
            "description": "项目关注者",
            "operationId": "watchersUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/UserDTO"
                        }
                    }
                }
            }
        }
    },
    "/api/user/*/projects/tasks/all/{status}": {
        "get": {
            "tags": ["task"],
            "summary": "count",
            "description": "当前用户某状态的任务列表",
            "operationId": "userTasksUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "status",
                "in": "path",
                "description": "status",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/TaskPageDTO"
                    }
                }
            }
        }
    },
    "/api/user/projects": {
        "get": {
            "tags": ["project"],
            "summary": "project_list",
            "description": "我的项目列表",
            "operationId": "project_listUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "sort",
                "in": "query",
                "description": "sort",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        }
    },
    "/api/user/projects/private": {
        "get": {
            "tags": ["project"],
            "summary": "private_projects",
            "description": "私有项目列表",
            "operationId": "private_projectsUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "post": {
            "tags": ["project"],
            "summary": "private_projects",
            "description": "私有项目列表",
            "operationId": "private_projectsUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "put": {
            "tags": ["project"],
            "summary": "private_projects",
            "description": "私有项目列表",
            "operationId": "private_projectsUsingPUT",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["project"],
            "summary": "private_projects",
            "description": "私有项目列表",
            "operationId": "private_projectsUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "options": {
            "tags": ["project"],
            "summary": "private_projects",
            "description": "私有项目列表",
            "operationId": "private_projectsUsingOPTIONS",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "patch": {
            "tags": ["project"],
            "summary": "private_projects",
            "description": "私有项目列表",
            "operationId": "private_projectsUsingPATCH",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/key/{keyId}": {
        "get": {
            "tags": ["key"],
            "summary": "get",
            "description": "通过KeyId获取个人公钥",
            "operationId": "showUsingGET_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "keyId",
                "in": "path",
                "description": "keyId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/KeyDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["key"],
            "summary": "key",
            "description": "删除个人公钥",
            "operationId": "deleteKeyUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "keyId",
                "in": "path",
                "description": "keyId",
                "required": true,
                "type": "integer",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/keys": {
        "get": {
            "tags": ["key"],
            "summary": "list",
            "description": "列出个人公钥",
            "operationId": "listUsingGET_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "withIDEKey",
                "in": "query",
                "description": "withIDEKey",
                "required": false,
                "type": "boolean"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/KeyDTO"
                        }
                    }
                }
            }
        },
        "post": {
            "tags": ["key"],
            "summary": "create",
            "description": "创建个人公钥",
            "operationId": "saveUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "title",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/KeyDTO"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/project": {
        "post": {
            "tags": ["project"],
            "summary": "create_project",
            "description": "创建项目",
            "operationId": "createProjectUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "global_key",
                "in": "path",
                "required": false,
                "type": "string"
            }, {
                "name": "name",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "description",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "type",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "gitEnabled",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "gitIgnore",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "gitReadmeEnabled",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "gitLicense",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "importFrom",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "vcsType",
                "in": "formData",
                "required": false,
                "type": "string"
            }, {
                "name": "icon",
                "in": "formData",
                "required": false,
                "type": "file"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/Result"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/project/*/git/bind_deploy_key/{id}": {
        "post": {
            "tags": ["key"],
            "summary": "webhook",
            "description": "绑定部署公钥",
            "operationId": "bindDeployKeyUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "keyId",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/project/*/git/deploy_key": {
        "post": {
            "tags": ["key"],
            "summary": "webhook",
            "description": "新建部署公钥",
            "operationId": "saveDeployKeyUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "title",
                "in": "query",
                "required": false,
                "type": "string"
            }, {
                "name": "content",
                "in": "query",
                "required": false,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/KeyDTO"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/project/*/git/deploy_keys": {
        "get": {
            "tags": ["key"],
            "summary": "list",
            "description": "列出部署公钥",
            "operationId": "listDeployKeysUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "object"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/project/*/git/unbind_deploy_key/{id}": {
        "post": {
            "tags": ["key"],
            "summary": "webhook",
            "description": "解绑部署公钥",
            "operationId": "unBindDeployKeyUsingPOST",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "keyId",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "type": "boolean"
                    }
                }
            }
        }
    },
    "/api/user/{global_key}/projects/public": {
        "get": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "public_projectsUsingGET",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "post": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "public_projectsUsingPOST",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "put": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "public_projectsUsingPUT",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "delete": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "public_projectsUsingDELETE",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "options": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "public_projectsUsingOPTIONS",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        },
        "patch": {
            "tags": ["project"],
            "summary": "public_projects",
            "description": "公有项目列表",
            "operationId": "public_projectsUsingPATCH",
            "consumes": ["application/json"],
            "produces": ["application/json"],
            "parameters": [{
                "name": "type",
                "in": "query",
                "description": "type",
                "required": false,
                "type": "string"
            }, {
                "name": "global_key",
                "in": "path",
                "description": "global_key",
                "required": true,
                "type": "string"
            }, {
                "name": "page",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "1",
                "format": "int32"
            }, {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "type": "integer",
                "default": "10",
                "format": "int32"
            }],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/ResultPageOfProjectDTO"
                    }
                }
            }
        }
    },
    "/u/*/p/*/git/archive/**": {
        "get": {
            "tags": ["archive"],
            "summary": "archive",
            "description": "打包下载",
            "operationId": "_archiveUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK"
                }
            }
        }
    },
    "/u/*/p/*/git/commit/{commitId}}.diff": {
        "get": {
            "tags": ["commit"],
            "summary": "diff",
            "description": "下载 diff",
            "operationId": "_diffUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "commitId",
                "in": "path",
                "description": "commitId",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK"
                }
            }
        }
    },
    "/u/*/p/*/git/commit/{commitId}}.patch": {
        "get": {
            "tags": ["commit"],
            "summary": "patch",
            "description": "下载 patch",
            "operationId": "_patchUsingGET",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "name": "commitId",
                "in": "path",
                "description": "commitId",
                "required": true,
                "type": "string"
            }],
            "responses": {
                "200": {
                    "description": "OK"
                }
            }
        }
    },
    "/u/*/p/*/git/raw/**": {
        "get": {
            "tags": ["raw"],
            "summary": "get",
            "description": "显示文件的原始数据",
            "operationId": "getUsingGET_1",
            "consumes": ["application/json"],
            "produces": ["*/*"],
            "parameters": [{
                "in": "body",
                "name": "ref",
                "description": "ref",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }, {
                "in": "body",
                "name": "path",
                "description": "path",
                "required": false,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "OK"
                }
            }
        }
    }
};

var api = {};

for(var key in apiDoc){
	var n1 = apiDoc[key];
	var method = n1["get"]?"get":n1["post"]?"post":n1["put"]?"put":n1["delete"]?"delete":"I don`t know";
	var obj = n1[method];
	if (obj) {
		if (obj["tags"] && obj["tags"].length > 0) {
			var tag = obj["tags"][0];
			if(!api[tag]){
				api[tag] = {};
			}

			obj.url = baseUrl + key.replace(/\*+/g,"%s").replace(/\{.*\}/g,"%s");
			obj.method = method;
			api[tag][obj["operationId"]] = obj;

            delete obj.tags;
            delete obj.summary;
            delete obj.operationId;
            delete obj.consumes;
            delete obj.produces;
            delete obj.parameters;
            delete obj.responses;
		};
	}else{
		console.log(n1);
	};
}

console.log(JSON.stringify(api,null,4));