(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{730:function(s,n,t){s.exports=t.p+"assets/img/2020_06_07_LRpcFXzFLu.a6ed8311.png"},853:function(s,n,t){"use strict";t.r(n);var a=t(6),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("转自 https://xargin.com/addr-of-empty-struct-may-not-eq/")])]),s._v(" "),a("p",[s._v("https://www.zhihu.com/question/364687707")]),s._v(" "),a("p",[s._v("在知乎上已经说了原因，不过只是讲官方的 spec，我们再来看看实现上具体为什么会是这样的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package main\n\nimport "fmt"\n\nfunc main() {\n\ta := new(struct{})\n\tb := new(struct{})\n\tprintln(a, b, a == b)\n\n\tc := new(struct{})\n\td := new(struct{})\n\tfmt.Println(c, d, c == d)\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("结果可能让你很惊讶：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("0xc00007af1f 0xc00007af1f false\n&{} &{} true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果之前碰到过给程序加上 fmt.Println 就导致结果变化的情况的同学，可能会想到这里的原因，是和逃逸分析相关。(可以参考这两个 issue ："),a("a",{attrs:{href:"https://github.com/golang/go/issues/8618",target:"_blank",rel:"noopener noreferrer"}},[s._v("8618"),a("OutboundLink")],1),s._v(" 和 "),a("a",{attrs:{href:"https://github.com/golang/go/issues/31317",target:"_blank",rel:"noopener noreferrer"}},[s._v("31317"),a("OutboundLink")],1),s._v(")")]),s._v(" "),a("p",[s._v("没错：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('~/test git:master ❯❯❯ cat -n true.go                                                                              ✱ ◼\n     1\tpackage main\n     2\n     3\timport "fmt"\n     4\n     5\tfunc main() {\n     6\t\ta := new(struct{})\n     7\t\tb := new(struct{})\n     8\t\tprintln(a, b, a == b)\n     9\n    10\t\tc := new(struct{})\n    11\t\td := new(struct{})\n    12\t\tfmt.Println(c, d, c == d)\n    13\t}\n~/test git:master ❯❯❯ go run -gcflags="-m" true.go                           \n\n# command-line-arguments\n./true.go:12:13: inlining call to fmt.Println\n./true.go:6:10: main new(struct {}) does not escape\n./true.go:7:10: main new(struct {}) does not escape\n./true.go:10:10: new(struct {}) escapes to heap\n./true.go:11:10: new(struct {}) escapes to heap\n./true.go:12:13: c escapes to heap\n./true.go:12:13: d escapes to heap\n./true.go:12:22: c == d escapes to heap\n./true.go:12:13: main []interface {} literal does not escape\n./true.go:12:13: io.Writer(os.Stdout) escapes to heap\n<autogenerated>:1: (*File).close .this does not escape\n0xc00007af1f 0xc00007af1f false\n&{} &{} true\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("在 fmt.Println 中单独出现了 c，所以 c = new 的时候就发生了逃逸，d 也同理：")]),s._v(" "),a("ul",[a("li",[s._v("未逃逸：a，b")]),s._v(" "),a("li",[s._v("逃逸：c，d")])]),s._v(" "),a("p",[s._v("看过一点 go runtime 代码的同学应该知道，在 runtime 里有这么个东西：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// base address for all 0-byte allocations\nvar zerobase uintptr\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("0 大小的内存分配均会指向该变量地址，所谓的 0 字节，主要就是这种空 struct。不过这里没说清楚的是，只有在"),a("strong",[s._v("堆上")]),s._v("分配的 0 大小的 struct 才会指向该地址：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package main\n\nimport "fmt"\n\nvar a = new(struct{}) // 堆上\n\nfunc main() {\n\tvar b = new(struct{})\n\tfmt.Println(b/*这里单独打印了，所以 b escape 到堆上*/, a == b)\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("那么空 struct 逃逸之后其实都是同一个变量，地址相等，我们是可以理解了。")]),s._v(" "),a("p",[s._v("没逃逸的 a 和 b 为什么地址不相等呢？这里可以祭出 SSA 大法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("~/test git:master ❯❯❯ sudo GOSSAFUNC=main go build true.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(730),alt:"2020_06_07_LRpcFXzFLu.png"}})]),s._v(" "),a("p",[s._v("可以看到这个 false，其实是在代码优化阶段(opt)直接被编译后端作为常量优化掉了，直接转成了 false。")]),s._v(" "),a("p",[s._v("所以我们本能地以为 == 是在做指针比较，但是常量优化会替我们做出不那么符合直觉的判断，直接把 a == b rewrite 为 false。")]),s._v(" "),a("p",[s._v("问题到这里也就结束了，既然我们知道这里是优化阶段做的，那是不是我们把优化关闭就会导致输出 true 呢？")]),s._v(" "),a("p",[s._v("确实是的：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('~/test git:master ❯❯❯ cat true.go                                             \n\npackage main\n\nimport "fmt"\n\nfunc main() {\n\ta := new(struct{})\n\tb := new(struct{})\n\tprintln(a, b, a == b)\n\n\tc := new(struct{})\n\td := new(struct{})\n\tfmt.Println(c, d, c == d)\n}\n\n~/test git:master ❯❯❯ go run -gcflags="-N -l" true.go \n\n0xc00007aece 0xc00007aece true\n&{} &{} true\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("PS：写这个只是图个乐，我们可以用 Go 附带的 SSA 工具去更深入地认识整个编译阶段干的事情，从而理解官方的所谓“实现细节”和 spec 上的 may or may not 到底是怎么回事。")]),s._v(" "),a("p",[a("strong",[s._v("要是哪位工程师拿这个去做面试题，那就太缺德啦！")]),s._v("(真实🤣)")])])}),[],!1,null,null,null);n.default=e.exports}}]);