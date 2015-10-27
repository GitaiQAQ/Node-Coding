# Node-Coding

![MIT](https://img.shields.io/dub/l/vibe-d.svg)

Coding.net API Nodejs library.

```
.
├── package.json
├── README.md
├── lib //编译后的 js 文件
├── src //CoffeeScript源码
│   ├── ApiBase.coffee
│   ├── ApiBaseHTTP.coffee
│   ├── Api.coffee
│   ├── BaseModel.coffee
│   ├── index.coffee
│   └── models
│       ├── Blobs.coffee
│       ├── Branchs.coffee
│       ├── Commits.coffee
│       ├── Depots.coffee
│       ├── Files.coffee
│       ├── Historys.coffee
│       ├── Keys.coffee
│       ├── Merge_requests.coffee
│       ├── OAuth.coffee
│       ├── Projects.coffee
│       ├── Project_topics.coffee
│       ├── Pull_requests.coffee
│       ├── Repo_files.coffee
│       ├── Tags.coffee
│       ├── Tasks.coffee
│       ├── Trees.coffee
│       ├── Tweets.coffee
│       └── Users.coffee
├── test //完成的单元测试模块
│   ├── Blobs.test.coffee
│   ├── Branchs.test.coffee
│   ├── Commits.test.coffee
│   ├── Depots.test.coffee
│   ├── Files.test.coffee
│   ├── Historys.test.coffee
│   ├── Keys.test.coffee
│   ├── Merge_requests.test.coffee
│   ├── OAuth.test.coffee
│   └── Projects.test.coffee
├── _test //未完成的单元测试模块
│   ├── Project_topics.test.coffee
│   ├── Pull_requests.test.coffee
│   ├── Repo_files.test.coffee
│   ├── Tags.test.coffee
│   ├── Tasks.test.coffee
│   ├── Trees.test.coffee
│   ├── Tweets.test.coffee
│   └── Users.test.coffee
└── temp //缓存及配置
```

参照 [`node-gitlab`](https://github.com/node-gitlab/node-gitlab) 开发