(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{807:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("最近一段时间用go重写了博客前端api")])]),t._v(" "),s("p",[t._v("框架选用")]),t._v(" "),s("ul",[s("li",[t._v("go 选用的是小而美的 gin")]),t._v(" "),s("li",[t._v("php 选用的是优雅的 lumen 6.x")])]),t._v(" "),s("h2",{attrs:{id:"对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),s("h3",{attrs:{id:"打包大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包大小"}},[t._v("#")]),t._v(" 打包大小")]),t._v(" "),s("p",[t._v("两者打包成docker镜像的大小一个 20M 一个 757M, 还是很明显的")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("registry.cn-hangzhou.aliyuncs.com/duc-cnzj/gin_blog                latest              1c22e2233dca        31 hours ago        20.2MB\nregistry.cn-hangzhou.aliyuncs.com/duc-cnzj/blog_app                caddy               58a1d8cc3ea5        6 days ago          757MB\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"响应速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应速度"}},[t._v("#")]),t._v(" 响应速度")]),t._v(" "),s("p",[t._v("两个api地址")]),t._v(" "),s("ul",[s("li",[t._v("https://go-api.whoops-cn.club/  go")]),t._v(" "),s("li",[t._v("../ php")])]),t._v(" "),s("h4",{attrs:{id:"单纯的输出-logo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单纯的输出-logo"}},[t._v("#")]),t._v(" 单纯的输出 logo")]),t._v(" "),s("p",[t._v("php: "),s("code",[t._v("request_runtime: 4.5ms")])]),t._v(" "),s("p",[t._v("Go: "),s("code",[t._v("x-request-timing: 17.402µs")])]),t._v(" "),s("p",[t._v("一个ms  级别一个 us 级别，还是很明显的")]),t._v(" "),s("h4",{attrs:{id:"文章列表分页-go-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章列表分页-go-php"}},[t._v("#")]),t._v(" 文章列表分页 "),s("a",{attrs:{href:"https://go-api.whoops-cn.club/articles",target:"_blank",rel:"noopener noreferrer"}},[t._v("go"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"../articles"}},[t._v("php")])]),t._v(" "),s("p",[t._v("php: "),s("code",[t._v("request_runtime: 11.4ms")])]),t._v(" "),s("p",[t._v("Go："),s("code",[t._v("x-request-timing: 1.545729ms")])]),t._v(" "),s("p",[t._v("差了10倍")]),t._v(" "),s("h3",{attrs:{id:"文章详情-go-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章详情-go-php"}},[t._v("#")]),t._v(" 文章详情 "),s("a",{attrs:{href:"https://go-api.whoops-cn.club/articles/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("go"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"../articles/1"}},[t._v("php")])]),t._v(" "),s("p",[t._v("php："),s("code",[t._v("request_runtime: 7.2ms")])]),t._v(" "),s("p",[t._v("go: "),s("code",[t._v("x-request-timing: 420.859µs")])]),t._v(" "),s("h3",{attrs:{id:"qps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qps"}},[t._v("#")]),t._v(" Qps:")]),t._v(" "),s("p",[t._v("Go: 1.1w, 不记录日志和控制台输出 1.7w")]),t._v(" "),s("p",[t._v("Php: 几百")]),t._v(" "),s("p",[t._v("go貌似各方面都碾压了php😅")]),t._v(" "),s("p",[t._v("不过在写代码的难易程度上面 php 暴打 go，go要写一天php可能只要一小时‼️")]),t._v(" "),s("p",[t._v("在实际环境中还是推荐流量大的接口选用go，后台等流量小的接口选用php，不要为了用go而用go，都没几个人访问的后台怎么快怎么来，没必要用牛刀。")]),t._v(" "),s("p",[t._v("最后附上项目地址")]),t._v(" "),s("p",[t._v("go: https://github.com/DuC-cnZj/gin-blog")]),t._v(" "),s("p",[t._v("Php: https://github.com/DuC-cnZj/blog")])])}),[],!1,null,null,null);a.default=r.exports}}]);