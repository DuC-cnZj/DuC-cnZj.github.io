(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{863:function(t,e,o){"use strict";o.r(e);var v=o(6),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("p",[o("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxMDI4MDc1NA==&mid=2247483713&idx=1&sn=817ffef56f8bc5ca09a325c9744e00c7&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考煎鱼大佬的go mod 终极指南"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("go get 来拉取外部依赖会自动下载并安装到"),o("code",[t._v("$GOPATH")]),t._v("目录(如果该第三方包有main文件 会自动安装到$GOPATH/bin下)")]),t._v(" "),o("p",[t._v("go get : git clone + go install")]),t._v(" "),o("p",[t._v("go build : 编译出可执行文件\ngo install : go build + 把编译后的可执行文件放到GOPATH/bin目录下")]),t._v(" "),o("p",[t._v("使用go get的时候还是挺迷惑的，自己弄了个包实践了下。https://github.com/DuC-cnZj/hello_golang")]),t._v(" "),o("p",[t._v("如果要从 v1.0.0 更新到 v1.0.2 必须使用 go get -u=patch github.com/xxx/xxx@v1")]),t._v(" "),o("p",[t._v("如果要使用未发布的最新的提交必须使用 go get -u github.com/xxx/xxx@master")]),t._v(" "),o("p",[t._v("如果要更新到最新的发布的版本必须使用 go get -u github.com/xxx/xxx@latest")]),t._v(" "),o("p",[t._v("这上面2个默认了v1")]),t._v(" "),o("p",[t._v("如果包有多个version v1 v2")]),t._v(" "),o("p",[t._v("如果要使用未发布的最新的v2提交必须使用 go get -u github.com/xxx/xxx/v2@master")]),t._v(" "),o("p",[t._v("如果要更新到最新的发布的v2版本必须使用 go get -u github.com/xxx/xxx/v2@latest")]),t._v(" "),o("p",[t._v("注意这里的操作可能会和预期的不一样，原因可能在于go mod做了本地缓存，所以最好事先清除下本地缓存"),o("code",[t._v("go clean -modcache")]),t._v(", 也有可能有延迟，导致你最新发布的版本一时间没办法获取，多等等既可。")])])}),[],!1,null,null,null);e.default=_.exports}}]);