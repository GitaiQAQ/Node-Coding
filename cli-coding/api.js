var util = require('util');



/*
 * Coding Api
 * https://open.coding.net/openapi/
 */

module.exports = function() {
    return {
        "raw": {
            "getUsingGET": {
                "description": "显示文件的原始数据",
                "url": "https://coding.net/%s/%s/git/raw/%s",
                "method": "get"
            },
            "getUsingGET_1": {
                "description": "显示文件的原始数据",
                "url": "https://coding.net/u/%s/p/%s/git/raw/%s",
                "method": "get"
            }
        },
        "user": {
            "doActivateUsingPOST": {
                "description": "账户激活",
                "url": "https://coding.net/api/account/activate",
                "method": "post"
            },
            "_generateActivatePhoneCodeUsingPOST": {
                "description": "获取激活账号的手机验证码",
                "url": "https://coding.net/api/account/activate/generate_phone_code",
                "method": "post"
            },
            "_activatePhoneUsingPOST": {
                "description": "激活用手机注册的用户",
                "url": "https://coding.net/api/account/activate/phone",
                "method": "post"
            },
            "getAvatarUsingGET": {
                "description": "获取头像",
                "url": "https://coding.net/api/account/avatar",
                "method": "get"
            },
            "captchaUsingGET": {
                "description": "检查是否需要验证码",
                "url": "https://coding.net/api/account/captcha/%s",
                "method": "get"
            },
            "changeNotificationSettingUsingGET": {
                "description": "修改通知设置",
                "url": "https://coding.net/api/account/change_notice_setting",
                "method": "get"
            },
            "checkUsingGET": {
                "description": "检查email是否没有被注册过",
                "url": "https://coding.net/api/account/check",
                "method": "get"
            },
            "_checkPhoneUsingGET": {
                "description": "检查手机是否没有被注册过",
                "url": "https://coding.net/api/account/check/phone",
                "method": "get"
            },
            "checkTwoFactorAuthCodeUsingPOST": {
                "description": "登录时的两步验证",
                "url": "https://coding.net/api/account/check_two_factor_auth_code",
                "method": "post"
            },
            "currentUserUsingGET": {
                "description": "获取当前登录用户信息",
                "url": "https://coding.net/api/account/current_user",
                "method": "get"
            },
            "userEmailUsingGET": {
                "description": "获取当前用户的email",
                "url": "https://coding.net/api/account/email",
                "method": "get"
            },
            "getNotificationSettingsUsingGET": {
                "description": "获取通知设置",
                "url": "https://coding.net/api/account/get_notice_settings",
                "method": "get"
            },
            "getGravatarUsingGET": {
                "description": "获取Gravatar头像",
                "url": "https://coding.net/api/account/gravatar",
                "method": "get"
            },
            "getUserByGlobalKeyUsingGET": {
                "description": "通过个性后缀获取用户信息",
                "url": "https://coding.net/api/account/key/%s",
                "method": "get"
            },
            "doLoginUsingPOST": {
                "description": "登录",
                "url": "https://coding.net/api/account/login",
                "method": "post"
            },
            "_generateLoginPhoneCodeUsingPOST": {
                "description": "获取登录的手机验证码",
                "url": "https://coding.net/api/account/login/generate_phone_code",
                "method": "post"
            },
            "_doPhoneLoginUsingPOST": {
                "description": "使用绑定过的手机号码登录",
                "url": "https://coding.net/api/account/login/phone",
                "method": "post"
            },
            "doLogoutUsingPOST": {
                "description": "注销登录",
                "url": "https://coding.net/api/account/logout",
                "method": "post"
            },
            "getUserByNameUsingGET": {
                "description": "通过昵称获取用户信息",
                "url": "https://coding.net/api/account/name/%s",
                "method": "get"
            },
            "doRegisterUsingPOST": {
                "description": "注册",
                "url": "https://coding.net/api/account/register",
                "method": "post"
            },
            "_generateRegisterPhoneCodeUsingPOST": {
                "description": "获取注册的手机验证码",
                "url": "https://coding.net/api/account/register/generate_phone_code",
                "method": "post"
            },
            "_doPhoneRegisterUsingPOST": {
                "description": "使用手机注册",
                "url": "https://coding.net/api/account/register/phone",
                "method": "post"
            },
            "updateInfoUsingPOST": {
                "description": "更新用户信息",
                "url": "https://coding.net/api/account/update_info",
                "method": "post"
            },
            "updatePasswordUsingPOST": {
                "description": "修改用户密码",
                "url": "https://coding.net/api/account/update_pwd",
                "method": "post"
            },
            "updateAvatarUsingPOST": {
                "description": "更新头像",
                "url": "https://coding.net/api/account/updateavatar",
                "method": "post"
            },
            "followUsingPOST": {
                "description": "关注用户",
                "url": "https://coding.net/api/social/follow",
                "method": "post"
            },
            "followersUsingGET_1": {
                "description": "关注我的用户",
                "url": "https://coding.net/api/social/followers",
                "method": "get"
            },
            "followersUsingGET": {
                "description": "获取关注默认的用户",
                "url": "https://coding.net/api/social/followers/%s",
                "method": "get"
            },
            "friendsUsingGET_1": {
                "description": "我关注的用户列表",
                "url": "https://coding.net/api/social/friends",
                "method": "get"
            },
            "friendsUsingGET": {
                "description": "指定用户的关注列表",
                "url": "https://coding.net/api/social/friends/%s",
                "method": "get"
            },
            "relationshipUsingGET": {
                "description": "是否关注了该用户",
                "url": "https://coding.net/api/social/relationship/%s",
                "method": "get"
            },
            "getRelationshipUsingGET": {
                "description": "获取我关注和关注我的用户列表",
                "url": "https://coding.net/api/social/relationships",
                "method": "get"
            },
            "getRelationshipWithProjectMemberUsingGET": {
                "description": "获取我关注和关注我的用户列表包含成员列表",
                "url": "https://coding.net/api/social/relationships/all",
                "method": "get"
            },
            "searchUsingGET": {
                "description": "搜索用户",
                "url": "https://coding.net/api/social/search",
                "method": "get"
            },
            "unfollowUsingPOST": {
                "description": "取消关注",
                "url": "https://coding.net/api/social/unfollow",
                "method": "post"
            },
            "unreadCountUsingGET": {
                "description": "未读消息通知",
                "url": "https://coding.net/api/social/unread_count",
                "method": "get"
            }
        },
        "project": {
            "getPinProjectsUsingGET": {
                "description": "获取常用项目列表",
                "url": "https://coding.net/api/account/projects/pin",
                "method": "get"
            },
            "updateUsingPUT_1": {
                "description": "更新项目信息",
                "url": "https://coding.net/api/project",
                "method": "put"
            },
            "recommendedListUsingGET": {
                "description": "推荐项目list",
                "url": "https://coding.net/api/projects/recommended",
                "method": "get"
            },
            "publicProjectUsingGET": {
                "description": "公有项目列表",
                "url": "https://coding.net/api/public/all",
                "method": "get"
            },
            "queryByNameUsingGET": {
                "description": "通过名称查询",
                "url": "https://coding.net/api/user/%s/project/%s",
                "method": "get"
            },
            "setProjectIconUsingPOST": {
                "description": "设置项目图标",
                "url": "https://coding.net/api/user/%s/project/%s/project_icon",
                "method": "post"
            },
            "starUsingPOST": {
                "description": "收藏项目",
                "url": "https://coding.net/api/user/%s/project/%s/star",
                "method": "post"
            },
            "staredUsingPOST": {
                "description": "项目是否被收藏",
                "url": "https://coding.net/api/user/%s/project/%s/stared",
                "method": "post"
            },
            "unstarUsingPOST": {
                "description": "项目取消收藏",
                "url": "https://coding.net/api/user/%s/project/%s/unstar",
                "method": "post"
            },
            "unwatchUsingPOST": {
                "description": "项目取消关注",
                "url": "https://coding.net/api/user/%s/project/%s/unwatch",
                "method": "post"
            },
            "visitProjectUsingGET": {
                "description": "更新项目阅读时间",
                "url": "https://coding.net/api/user/%s/project/%s/update_visit",
                "method": "get"
            },
            "watchUsingPOST": {
                "description": "关注项目",
                "url": "https://coding.net/api/user/%s/project/%s/watch",
                "method": "post"
            },
            "watchedUsingPOST": {
                "description": "项目是否被关注",
                "url": "https://coding.net/api/user/%s/project/%s/watched",
                "method": "post"
            },
            "watchersUsingGET": {
                "description": "项目关注者",
                "url": "https://coding.net/api/user/%s/project/%s/watchers",
                "method": "get"
            },
            "project_listUsingGET": {
                "description": "我的项目列表",
                "url": "https://coding.net/api/user/projects",
                "method": "get"
            },
            "private_projectsUsingGET": {
                "description": "私有项目列表",
                "url": "https://coding.net/api/user/projects/private",
                "method": "get"
            },
            "createProjectUsingPOST": {
                "description": "创建项目",
                "url": "https://coding.net/api/user/%s/project",
                "method": "post"
            },
            "public_projectsUsingGET": {
                "description": "公有项目列表",
                "url": "https://coding.net/api/user/%s/projects/public",
                "method": "get"
            }
        },
        "task": {
            "createUsingPOST": {
                "description": "创建任务",
                "url": "https://coding.net/api/project/%s/task",
                "method": "post"
            },
            "getTaskUsingGET": {
                "description": "创建任务",
                "url": "https://coding.net/api/project/%s/task/%s",
                "method": "get"
            },
            "listOfOwnerUsingGET": {
                "description": "列出某人的任务列表",
                "url": "https://coding.net/api/project/%s/tasks/user/%s",
                "method": "get"
            },
            "taskCreatingUsingGET": {
                "description": "全局任务创建",
                "url": "https://coding.net/api/task/creating",
                "method": "get"
            },
            "taskCountByUserUsingGET": {
                "description": "任务统计信息",
                "url": "https://coding.net/api/user/%s/project/%s/task/count",
                "method": "get"
            },
            "update4clientUsingPUT": {
                "description": "修改任务",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s",
                "method": "put"
            },
            "pubCommentUsingPOST": {
                "description": "创建任务评论",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/comment",
                "method": "post"
            },
            "deleteCommentUsingDELETE": {
                "description": "删除任务评论",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s",
                "method": "delete"
            },
            "getCommentsUsingGET": {
                "description": "获取任务评论",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/comments",
                "method": "get"
            },
            "updateContentUsingPUT": {
                "description": "修改任务内容",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/content",
                "method": "put"
            },
            "updateDeadlineUsingPUT": {
                "description": "修改任务截止日期",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/deadline",
                "method": "put"
            },
            "getDescriptionUsingGET": {
                "description": "获取任务描述",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/description",
                "method": "get"
            },
            "addTaskLabelUsingPOST": {
                "description": "添加任务标签",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s",
                "method": "post"
            },
            "operateTaskLabelsUsingPOST": {
                "description": "批量操作任务标签",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/labels",
                "method": "post"
            },
            "updateOwnerUsingPUT": {
                "description": "修改任务执行者",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/owner",
                "method": "put"
            },
            "updatePriorityUsingPUT": {
                "description": "修改任务优先级",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/priority",
                "method": "put"
            },
            "updateStatusUsingPUT": {
                "description": "修改任务状态",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/status",
                "method": "put"
            },
            "watchUsingPOST_2": {
                "description": "关注任务",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/watch",
                "method": "post"
            },
            "pageTaskWatchersUsingGET": {
                "description": "关注该任务的用户",
                "url": "https://coding.net/api/user/%s/project/%s/task/%s/watchers",
                "method": "get"
            },
            "userTasksCountUsingGET": {
                "description": " 获取当前用户项目的已完成、正在进行的、关注的数值",
                "url": "https://coding.net/api/user/%s/project/%s/tasks/count",
                "method": "get"
            },
            "userTasksCountInProjectUsingGET": {
                "description": "统计所有 已完成 和 正在处理 的任务数",
                "url": "https://coding.net/api/user/%s/project/%s/tasks/count_all",
                "method": "get"
            },
            "getTaskByLabelUsingGET": {
                "description": "查询标签下的任务列表",
                "url": "https://coding.net/api/user/%s/project/%s/tasks/label/%s",
                "method": "get"
            },
            "userTasksOfProjectUsingGET": {
                "description": "列出当前用户某项目某状态的任务列表",
                "url": "https://coding.net/api/user/%s/project/%s/tasks/my/%s",
                "method": "get"
            },
            "listUsingGET_5": {
                "description": "任务列表",
                "url": "https://coding.net/api/user/%s/project/%s/tasks/%s",
                "method": "get"
            },
            "userTasksUsingGET": {
                "description": "当前用户某状态的任务列表",
                "url": "https://coding.net/api/user/%s/projects/tasks/all/%s",
                "method": "get"
            }
        },
        "tweet": {
            "createUsingPOST_1": {
                "description": "发送冒泡",
                "url": "https://coding.net/api/social/tweet",
                "method": "post"
            },
            "bestUserUsingGET": {
                "description": "热门用户",
                "url": "https://coding.net/api/social/tweet/best_user",
                "method": "get"
            },
            "query_a_commentUsingGET": {
                "description": "获取某个评论",
                "url": "https://coding.net/api/social/tweet/comment/%s",
                "method": "get"
            },
            "insert_imageUsingPOST": {
                "description": "冒泡插入图片",
                "url": "https://coding.net/api/social/tweet/insert_image",
                "method": "post"
            },
            "lastTweetUsingGET": {
                "description": "查询last_id以后的最新冒泡",
                "url": "https://coding.net/api/social/tweet/last",
                "method": "get"
            },
            "public_tweetsUsingGET": {
                "description": "冒泡列表",
                "url": "https://coding.net/api/social/tweet/public_tweets",
                "method": "get"
            },
            "user_publicUsingGET": {
                "description": "用户冒泡列表",
                "url": "https://coding.net/api/social/tweet/user_public",
                "method": "get"
            },
            "detailUsingGET": {
                "description": "获取冒泡详情",
                "url": "https://coding.net/api/social/tweet/%s",
                "method": "get"
            },
            "commentUsingPOST": {
                "description": "冒泡评论",
                "url": "https://coding.net/api/social/tweet/%s/comment",
                "method": "post"
            },
            "delete_commentUsingDELETE": {
                "description": "删除冒泡评论",
                "url": "https://coding.net/api/social/tweet/%s",
                "method": "delete"
            },
            "query_commentUsingGET": {
                "description": "获取冒泡评论列表",
                "url": "https://coding.net/api/social/tweet/%s/comments",
                "method": "get"
            },
            "deleteTweetUsingDELETE": {
                "description": "删除冒泡",
                "url": "https://coding.net/api/social/tweet/%s",
                "method": "delete"
            },
            "like_tweetUsingPOST": {
                "description": "冒泡点赞",
                "url": "https://coding.net/api/social/tweet/%s/like",
                "method": "post"
            },
            "getTweetLikeUsingGET": {
                "description": "赞过的冒泡列表",
                "url": "https://coding.net/api/social/tweet/%s/tweetlike",
                "method": "get"
            },
            "unlike_tweetUsingPOST": {
                "description": "冒泡取消点赞",
                "url": "https://coding.net/api/social/tweet/%s/unlike",
                "method": "post"
            },
            "_public_tweetsUsingGET": {
                "description": "冒泡广场列表",
                "url": "https://coding.net/api/tweet/public_tweets",
                "method": "get"
            }
        },
        "file": {
            "checkExistedUsingGET": {
                "description": "检查目录下是否有同名的文件",
                "url": "https://coding.net/api/user/%s/project/%s/dir/%s/files/existed",
                "method": "get"
            },
            "uploadFileHistoryUsingPOST": {
                "description": "上传文件新版本",
                "url": "https://coding.net/api/user/%s/project/%s/file/history/upload",
                "method": "post"
            },
            "deleteFilesUsingDELETE": {
                "description": "删除文件",
                "url": "https://coding.net/api/user/%s/project/%s/files",
                "method": "delete"
            },
            "deleteFileHistoryUsingDELETE": {
                "description": "删除文件历史",
                "url": "https://coding.net/api/user/%s/project/%s/files/histories/%s",
                "method": "delete"
            },
            "downloadHistoryUsingGET": {
                "description": "下载历史文件版本",
                "url": "https://coding.net/api/user/%s/project/%s/files/histories/%s/download",
                "method": "get"
            },
            "uploadFileUsingPOST": {
                "description": "上传私有项目的图片",
                "url": "https://coding.net/api/user/%s/project/%s/files/upload",
                "method": "post"
            },
            "downloadFileUsingGET": {
                "description": "文件下载",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/download",
                "method": "get"
            },
            "downloadURLUsingGET": {
                "description": "文件下载URL",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/download/url",
                "method": "get"
            },
            "editFileUsingPOST": {
                "description": "编辑文件",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/edit",
                "method": "post"
            },
            "viewFileUsingGET": {
                "description": "查看文件",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/view",
                "method": "get"
            },
            "imagePreviewUsingGET": {
                "description": "图片预览",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/view/image",
                "method": "get"
            },
            "updateFileHistoryRemarkUsingPOST": {
                "description": "修改历史版本备注",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/remark",
                "method": "post"
            },
            "createFileUsingPOST": {
                "description": "创建文件",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/files",
                "method": "post"
            },
            "listFileHistoryUsingGET": {
                "description": "文件历史",
                "url": "https://coding.net/api/user/%s/project/%s/files/%s/histories",
                "method": "get"
            },
            "mkdirUsingPOST": {
                "description": "创建文件夹",
                "url": "https://coding.net/api/user/%s/project/%s/folder",
                "method": "post"
            },
            "moveUsingPUT": {
                "description": "移动文件",
                "url": "https://coding.net/api/user/%s/project/%s/folder/%s/move",
                "method": "put"
            },
            "renameFolderUsingPUT": {
                "description": "重命名文件夹",
                "url": "https://coding.net/api/user/%s/project/%s/folder/%s",
                "method": "put"
            },
            "listFileUsingGET": {
                "description": "列出某目录下的文件",
                "url": "https://coding.net/api/user/%s/project/%s/folder/%s/files",
                "method": "get"
            },
            "listFolderUsingGET": {
                "description": "列出所有一级目录",
                "url": "https://coding.net/api/user/%s/project/%s/folders",
                "method": "get"
            },
            "listAllFolderUsingGET": {
                "description": "列出所有目录",
                "url": "https://coding.net/api/user/%s/project/%s/folders/all",
                "method": "get"
            },
            "allFolderFileCountUsingGET": {
                "description": "获取文件夹的文件数",
                "url": "https://coding.net/api/user/%s/project/%s/folders/file_count/all",
                "method": "get"
            }
        },
        "depot": {
            "indexUsingGET": {
                "description": "获取仓库信息",
                "url": "https://coding.net/api/user/%s/project/%s/git",
                "method": "get"
            },
            "forkUsingPOST": {
                "description": "fork",
                "url": "https://coding.net/api/user/%s/project/%s/git/fork",
                "method": "post"
            },
            "forksUsingGET": {
                "description": "项目被fork的列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/forks",
                "method": "get"
            },
            "createWebHookUsingPOST": {
                "description": "创建 webhook",
                "url": "https://coding.net/api/user/%s/project/%s/git/hook",
                "method": "post"
            },
            "getWebHookUsingGET": {
                "description": "获取 webhook",
                "url": "https://coding.net/api/user/%s/project/%s/git/hook/%s",
                "method": "get"
            },
            "listWebHookUsingGET": {
                "description": "列出项目设置的 webhook",
                "url": "https://coding.net/api/user/%s/project/%s/git/hooks",
                "method": "get"
            },
            "importRepoUsingGET": {
                "description": "导入仓库",
                "url": "https://coding.net/api/user/%s/project/%s/git/import",
                "method": "get"
            },
            "initDepotUsingPOST": {
                "description": "初始化仓库",
                "url": "https://coding.net/api/user/%s/project/%s/git/init",
                "method": "post"
            }
        },
        "blob": {
            "blobUsingGET": {
                "description": "获取 blob",
                "url": "https://coding.net/api/user/%s/project/%s/git/blob/%s",
                "method": "get"
            }
        },
        "branch": {
            "setDefaultBranchUsingPOST": {
                "description": "设置默认分支",
                "url": "https://coding.net/api/user/%s/project/%s/git/branch/default",
                "method": "post"
            },
            "listUsingGET": {
                "description": "分页显示分支列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches",
                "method": "get"
            },
            "createBranchUsingPOST": {
                "description": "新建分支",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/create",
                "method": "post"
            },
            "deleteBranchUsingPOST": {
                "description": "删除分支",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/delete",
                "method": "post"
            },
            "addProtectedBranchMemberUsingPOST": {
                "description": "添加保护分支成员",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/protected_branch/add_member",
                "method": "post"
            },
            "disableProtectedBranchUsingPOST": {
                "description": "取消保护分支",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/protected_branch/disable",
                "method": "post"
            },
            "enableProtectedBranchUsingPOST": {
                "description": "设置保护分支",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/protected_branch/enable",
                "method": "post"
            },
            "listProtectedBranchMemberUsingGET": {
                "description": "列出保护分支中的成员",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/protected_branch/members",
                "method": "get"
            },
            "removeProtectedBranchMemberUsingPOST": {
                "description": "删除保护分支成员",
                "url": "https://coding.net/api/user/%s/project/%s/git/branches/protected_branch/remove_member",
                "method": "post"
            }
        },
        "commit": {
            "showUsingGET": {
                "description": "commit 列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/commit/%s",
                "method": "get"
            },
            "_diffUsingGET": {
                "description": "下载 diff",
                "url": "https://coding.net/u/%s/p/%s/git/commit/%s.diff",
                "method": "get"
            },
            "_patchUsingGET": {
                "description": "下载 patch",
                "url": "https://coding.net/u/%s/p/%s/git/commit/%s.patch",
                "method": "get"
            }
        },
        "history": {
            "historyUsingGET": {
                "description": "获取代码的历史",
                "url": "https://coding.net/api/user/%s/project/%s/git/commits/%s",
                "method": "get"
            }
        },
        "repo_file": {
            "delete_fileUsingGET": {
                "description": "删除文件",
                "url": "https://coding.net/api/user/%s/project/%s/git/delete/%s",
                "method": "get"
            },
            "edit_fileUsingGET": {
                "description": "更新文件",
                "url": "https://coding.net/api/user/%s/project/%s/git/edit/%s",
                "method": "get"
            },
            "create_fileUsingGET": {
                "description": "新建文件",
                "url": "https://coding.net/api/user/%s/project/%s/git/new/%s",
                "method": "get"
            }
        },
        "merge_request": {
            "do_createUsingPOST": {
                "description": "创建 MergeRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/merge",
                "method": "post"
            },
            "showUsingGET_2": {
                "description": "显示某个 MergeRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/merge/%s",
                "method": "get"
            },
            "cancelUsingPOST": {
                "description": "取消 MergeRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/merge/%s/cancel",
                "method": "post"
            },
            "mergeUsingPOST": {
                "description": "合并某个 MergeRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/merge/%s/merge",
                "method": "post"
            },
            "refuseUsingPOST": {
                "description": "拒绝某个 MergeRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/merge/%s/refuse",
                "method": "post"
            },
            "listUsingGET_2": {
                "description": "MergeRequest 列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/merges/%s",
                "method": "get"
            }
        },
        "pull_request": {
            "createUsingGET": {
                "description": "创建 PullRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/create",
                "method": "get"
            },
            "showUsingGET_3": {
                "description": "获取某个 PullRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/%s",
                "method": "get"
            },
            "cancelUsingPOST_1": {
                "description": "取消 PullRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/%s/cancel",
                "method": "post"
            },
            "commentsUsingGET": {
                "description": "PullRequest 评论列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/%s/comments",
                "method": "get"
            },
            "showCommitsUsingGET": {
                "description": "获取某个 PullRequest 的评论",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/%s/commits",
                "method": "get"
            },
            "mergeUsingPOST_1": {
                "description": "合并 PullRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/%s/merge",
                "method": "post"
            },
            "refuseUsingPOST_1": {
                "description": "拒绝 PullRequest",
                "url": "https://coding.net/api/user/%s/project/%s/git/pull/%s/refuse",
                "method": "post"
            },
            "listUsingGET_3": {
                "description": "PullRequest 列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/pulls/%s",
                "method": "get"
            }
        },
        "tag": {
            "listUsingGET_4": {
                "description": "标签列表",
                "url": "https://coding.net/api/user/%s/project/%s/git/tags",
                "method": "get"
            },
            "createTagUsingPOST": {
                "description": "创建标签",
                "url": "https://coding.net/api/user/%s/project/%s/git/tags/create",
                "method": "post"
            },
            "deleteTagUsingPOST": {
                "description": "删除标签",
                "url": "https://coding.net/api/user/%s/project/%s/git/tags/delete",
                "method": "post"
            }
        },
        "tree": {
            "treeUsingGET": {
                "description": "目录",
                "url": "https://coding.net/api/user/%s/project/%s/git/tree/%s",
                "method": "get"
            }
        },
        "project_topic": {
            "projectTopicListUsingGET": {
                "description": "项目讨论列表",
                "url": "https://coding.net/api/user/%s/project/%s/topics",
                "method": "get"
            },
            "topicCountUsingGET": {
                "description": "所有讨论的个数和我的讨论的个数",
                "url": "https://coding.net/api/user/%s/project/%s/topics/count",
                "method": "get"
            },
            "getProjectTopicByLabelUsingGET": {
                "description": "通过标签获得讨论列表",
                "url": "https://coding.net/api/user/%s/project/%s/topics/label/%s",
                "method": "get"
            },
            "getMyLabelByProjectUsingGET": {
                "description": "所有讨论的个数和我的讨论的个数",
                "url": "https://coding.net/api/user/%s/project/%s/topics/labels/my",
                "method": "get"
            },
            "myProjectTopicListUsingGET": {
                "description": "我的讨论",
                "url": "https://coding.net/api/user/%s/project/%s/topics/mine",
                "method": "get"
            },
            "myWatchingProjectTopicsUsingGET": {
                "description": "获取我关注的讨论列表",
                "url": "https://coding.net/api/user/%s/project/%s/topics/watching",
                "method": "get"
            },
            "projectTopicDetailUsingGET": {
                "description": "讨论详情",
                "url": "https://coding.net/api/user/%s/project/%s/topics/%s",
                "method": "get"
            },
            "projectTopicCommentsUsingGET": {
                "description": "讨论评论列表",
                "url": "https://coding.net/api/user/%s/project/%s/topics/%s/comments",
                "method": "get"
            },
            "addTopicLabelUsingPOST": {
                "description": "讨论添加标签",
                "url": "https://coding.net/api/user/%s/project/%s/topics/%s",
                "method": "post"
            },
            "operateTopicLabelsUsingPOST": {
                "description": "批量操作讨论标签",
                "url": "https://coding.net/api/user/%s/project/%s/topics/%s/labels",
                "method": "post"
            },
            "watchUsingPOST_1": {
                "description": "关注讨论",
                "url": "https://coding.net/api/user/%s/project/%s/topics/%s/watch",
                "method": "post"
            },
            "getTopicWatchersUsingGET": {
                "description": "获取关注该讨论的用户",
                "url": "https://coding.net/api/user/%s/project/%s/topics/%s/watchers",
                "method": "get"
            }
        },
        "key": {
            "showUsingGET_1": {
                "description": "通过KeyId获取个人公钥",
                "url": "https://coding.net/api/user/%s",
                "method": "get"
            },
            "listUsingGET_1": {
                "description": "列出个人公钥",
                "url": "https://coding.net/api/user/%s/keys",
                "method": "get"
            },
            "bindDeployKeyUsingPOST": {
                "description": "绑定部署公钥",
                "url": "https://coding.net/api/user/%s",
                "method": "post"
            },
            "saveDeployKeyUsingPOST": {
                "description": "新建部署公钥",
                "url": "https://coding.net/api/user/%s/project/%s/git/deploy_key",
                "method": "post"
            },
            "listDeployKeysUsingGET": {
                "description": "列出部署公钥",
                "url": "https://coding.net/api/user/%s/project/%s/git/deploy_keys",
                "method": "get"
            },
            "unBindDeployKeyUsingPOST": {
                "description": "解绑部署公钥",
                "url": "https://coding.net/api/user/%s",
                "method": "post"
            }
        },
        "archive": {
            "_archiveUsingGET": {
                "description": "打包下载",
                "url": "https://coding.net/u/%s/p/%s/git/archive/%s",
                "method": "get"
            }
        }
    }


}
