(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{882:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[s._v("#")]),s._v(" 为什么？")]),s._v(" "),a("p",[s._v("高可用的k8s的所有节点需要对外暴露80,443(ingress bare 部署需要)，这些node需要一个lb，然后将域名解析到这个lb上保证高可用。")]),s._v(" "),a("p",[s._v("haproxy 很好的提供了四层七层代理服务。")]),s._v(" "),a("h3",{attrs:{id:"为什么不用nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不用nginx"}},[s._v("#")]),s._v(" 为什么不用nginx")]),s._v(" "),a("p",[s._v("haproxy专门做这个，性能更好。")]),s._v(" "),a("p",[s._v("nginx:")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("stream")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" k8s443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 192.168.xx.xx:30335")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 192.168.xx.xx:30335")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" k8s443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" k8s80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 192.168.xx.xx:30345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 192.168.xx.xx:30345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Real-IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Forwarded-For "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forward_for")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://k8s80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"haproxy-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-配置"}},[s._v("#")]),s._v(" haproxy 配置")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://www.manongjc.com/detail/23-usbrvnnuobpgdpn.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("网上找的一份比较全的配置"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("global   # 全局参数的设置\n     log 127.0.0.1 local0 info\n     # log语法：log [max_level_1]\n     # 全局的日志配置，使用log关键字，指定使用127.0.0.1上的syslog服务中的local0日志设备，\n     记录日志等级为info的日志\n     chroot /var/lib/haproxy\n     #修改haproxy的工作目录至指定的目录并在放弃权限之前执行chroot()操作，可以提升haproxy的安全级别，\n     #不过需要注意的是要确保指定的目录为空目录且任何用户均不能有写权限；\n     user haproxy\n     group haproxy\n     # 设置运行haproxy的用户和组，也可使用uid，gid关键字替代之\n     daemon\n     # 以守护进程的方式运行\n     nbproc 16\n     # 设置haproxy启动时的进程数，根据官方文档的解释，我将其理解为：该值的设置应该和服务\n     #器的CPU核心数一致，即常见的2颗8核心CPU的服务器，即共有16核心，则可以将其值设置为：\n     #<=16 ，创建多个进程数，可以减少每个进程的任务队列，但是过多的进程数也可能会导致进程\n     #的崩溃。这里我设置为16\n     maxconn 4096\n     # 定义每个haproxy进程的最大连接数 ，由于每个连接包括一个客户端和一个服务器端，所以单\n     #个进程的TCP会话最大数目将是该值的两倍。\n     #ulimit -n 65536\n     # 设置最大打开的文件描述符数，在1.4的官方文档中提示，该值会自动计算，所以不建议进行\n     #设置\n     pidfile /var/run/haproxy.pid\n     # 定义haproxy的pid\n\n\ndefaults # 默认部分的定义\n     mode http\n     # mode语法：mode {http|tcp|health} 。http是七层模式，tcp是四层模式，health是健康检测\n     #，返回OK\n     log 127.0.0.1 local3 err\n     # 使用127.0.0.1上的syslog服务的local3设备记录错误信息\n     retries 3\n     # 定义连接后端服务器的失败重连次数，连接失败次数超过此值后将会将对应后端服务器标记为\n     #不可用\n     option httplog\n     # 启用日志记录HTTP请求，默认haproxy日志记录是不记录HTTP请求的，只记录“时间[Jan 5 13\n     #:23:46] 日志服务器[127.0.0.1] 实例名已经pid[haproxy[25218]] 信息[Proxy http_80_in s\n     #topped.]”，日志格式很简单。\n     option redispatch\n     # 当使用了cookie时，haproxy将会将其请求的后端服务器的serverID插入到cookie中，以保证\n     #会话的SESSION持久性；而此时，如果后端的服务器宕掉了，但是客户端的cookie是不会刷新的\n     #，如果设置此参数，将会将客户的请求强制定向到另外一个后端server上，以保证服务的正常\n     option abortonclose\n     # 当服务器负载很高的时候，自动结束掉当前队列处理比较久的链接\n     option dontlognull\n     # 启用该项，日志中将不会记录空连接。所谓空连接就是在上游的负载均衡器或者监控系统为了\n     #探测该服务是否存活可用时，需要定期的连接或者获取某一固定的组件或页面，或者探测扫描\n     #端口是否在监听或开放等动作被称为空连接；官方文档中标注，如果该服务上游没有其他的负\n     #载均衡器的话，建议不要使用该参数，因为互联网上的恶意扫描或其他动作就不会被记录下来\n     option httpclose\n     # 这个参数我是这样理解的：使用该参数，每处理完一个request时，haproxy都会去检查http头\n     #中的Connection的值，如果该值不是close，haproxy将会将其***，如果该值为空将会添加为：\n     #Connection: close。使每个客户端和服务器端在完成一次传输后都会主动关闭TCP连接。与该\n     #参数类似的另外一个参数是“option forceclose”，该参数的作用是强制关闭对外的服务通道\n     #，因为有的服务器端收到Connection: close时，也不会自动关闭TCP连接，如果客户端也不关\n     #闭，连接就会一直处于打开，直到超时。\n     contimeout 5000\n     # 设置成功连接到一台服务器的最长等待时间，默认单位是毫秒，新版本的haproxy使用timeout\n     #connect替代，该参数向后兼容\n     clitimeout 3000\n     # 设置连接客户端发送数据时的成功连接最长等待时间，默认单位是毫秒，新版本haproxy使用\n     #timeout client替代。该参数向后兼容\n     srvtimeout 3000\n     # 设置服务器端回应客户度数据发送的最长等待时间，默认单位是毫秒，新版本haproxy使用\n     #timeout server替代。该参数向后兼容\n\nlisten status\n     # 定义一个名为status的部分，可以在listen指令指定的区域中定义匹配规则和后端服务器ip，\n     #相当于需要在其中配置frontend，backend的功能。一般做tcp转发比较合适，不用太多的规则\n     #匹配。\n     bind 0.0.0.0:1080\n     # 定义监听的套接字\n     mode http\n     # 定义为HTTP模式\n     log global\n     # 继承global中log的定义\n     stats refresh 30s\n     # stats是haproxy的一个统计页面的套接字，该参数设置统计页面的刷新间隔为30s\n     stats uri /admin?stats\n     # 设置统计页面的uri为/admin?stats\n     stats realm Private lands\n     # 设置统计页面认证时的提示内容\n     stats auth admin:password\n     # 设置统计页面认证的用户和密码，如果要设置多个，另起一行写入即可\n     stats hide-version\n     # 隐藏统计页面上的haproxy版本信息\n\n\nfrontend http_80_in # 定义一个名为http_80_in的前端部分，haproxy会监听bind的端口\n     bind 0.0.0.0:80\n     # http_80_in定义前端部分监听的套接字\n     mode http\n     # 定义为HTTP模式\n     log global\n     # 继承global中log的定义\n     option forwardfor\n     # 启用X-Forwarded-For，在requests头部插入客户端IP发送给后端的server，使后端server获\n     #取到客户端的真实IP\n     acl static_down nbsrv(static_server) lt 1\n     # 定义一个名叫static_down的acl，当backend static_sever中存活机器数小于1时会被匹配到\n     acl php_web url_reg /*.php$\n     #acl php_web path_end .php\n     # 定义一个名叫php_web的acl，当请求的url末尾是以.php结尾的，将会被匹配到，上面两种写\n     #法任选其一\n     acl static_web url_reg /*.(css|jpg|png|jpeg|js|gif)$\n     #acl static_web path_end .gif .png .jpg .css .js .jpeg\n     # 定义一个名叫static_web的acl，当请求的url末尾是以.css、.jpg、.png、.jpeg、.js、.gif\n     结尾的，将会被匹配到，上面两种写法任选其一\n     use_backend php_server if static_down\n     # 如果满足策略static_down时，就将请求交予backend php_server\n     use_backend php_server if php_web\n     # 如果满足策略php_web时，就将请求交予backend php_server\n     use_backend static_server if static_web\n     # 如果满足策略static_web时，就将请求交予backend static_server\n\n\nbackend php_server #定义一个名为php_server的后端部分，frontend定义的请求会到到这里处理\n     mode http\n     # 设置为http模式\n     balance source\n     # 设置haproxy的调度算法为源地址hash\n     cookie SERVERID\n     # 允许向cookie插入SERVERID，每台服务器的SERVERID可在下面使用cookie关键字定义\n     option httpchk GET /test/index.php\n     # 开启对后端服务器的健康检测，通过GET /test/index.php来判断后端服务器的健康情况\n     server php_server_1 10.12.25.68:80 cookie 1 check inter 2000 rise 3 fall 3 weight 2\n     server php_server_2 10.12.25.72:80 cookie 2 check inter 2000 rise 3 fall 3 weight 1\n     server php_server_bak 10.12.25.79:80 cookie 3 check inter 1500 rise 3 fall 3 backup\n     # server语法：server [:port] [param*]\n     # 使用server关键字来设置后端服务器；为后端服务器所设置的内部名称[php_server_1]，该名\n     #称将会呈现在日志或警报中、后端服务器的IP地址，支持端口映射[10.12.25.68:80]、指定该\n     #服务器的SERVERID为1[cookie 1]、接受健康监测[check]、监测的间隔时长，单位毫秒[inter\n     #2000]、监测正常多少次后被认为后端服务器是可用的[rise 3]、监测失败多少次后被认为后端\n     #服务器是不可用的[fall 3]、分发的权重[weight 2]、最为备份用的后端服务器，当正常的服\n     #务器全部都宕机后，才会启用备份服务器[backup]\n\n\nbackend static_server\n     mode http\n     option httpchk GET /test/index.html\n     server static_server_1 10.12.25.83:80 cookie 3 check inter 2000 rise 3 fall 3\n\n\n健康监测\n1、通过监听端口进行健康检测\n这种检测方式，haproxy只会去检查后端server的端口，并不能保证服务的真正可用。\nlisten http_proxy 0.0.0.0:80\n        mode http\n        cookie SERVERID\n        balance roundrobin\n        option httpchk\n        server web1 192.168.1.1:80 cookie server01 check\n        server web2 192.168.1.2:80 cookie server02 check inter 500 rise 1 fall 2\n\n2、通过URI获取进行健康检测\n这种检测方式，是用过去GET后端server的的web页面，基本上可以代表后端服务的可用性。\nlisten http_proxy 0.0.0.0:80\n        mode http\n        cookie SERVERID\n        balance roundrobin\n        option httpchk GET /index.html\n        server web1 192.168.1.1:80 cookie server01 check\n        server web2 192.168.1.2:80 cookie server02 check inter 500 rise 1 fall 2\n\n3、通过request获取的头部信息进行匹配进行健康检测\n这种检测方式，则是基于高级，精细的一些监测需求。通过对后端服务访问的头部信息进行匹配检测。\nlisten http_proxy 0.0.0.0:80\n        mode http\n        cookie SERVERID\n        balance roundrobin\n        option httpchk HEAD /index.jsp HTTP/1.1\\r\\nHost:\\ www.xxx.com\n        server web1 192.168.1.1:80 cookie server01 check\n        server web2 192.168.1.2:80 cookie server02 check inter 500 rise 1 fall 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br"),a("span",{staticClass:"line-number"},[s._v("162")]),a("br"),a("span",{staticClass:"line-number"},[s._v("163")]),a("br"),a("span",{staticClass:"line-number"},[s._v("164")]),a("br"),a("span",{staticClass:"line-number"},[s._v("165")]),a("br"),a("span",{staticClass:"line-number"},[s._v("166")]),a("br"),a("span",{staticClass:"line-number"},[s._v("167")]),a("br"),a("span",{staticClass:"line-number"},[s._v("168")]),a("br"),a("span",{staticClass:"line-number"},[s._v("169")]),a("br"),a("span",{staticClass:"line-number"},[s._v("170")]),a("br"),a("span",{staticClass:"line-number"},[s._v("171")]),a("br"),a("span",{staticClass:"line-number"},[s._v("172")]),a("br"),a("span",{staticClass:"line-number"},[s._v("173")]),a("br"),a("span",{staticClass:"line-number"},[s._v("174")]),a("br"),a("span",{staticClass:"line-number"},[s._v("175")]),a("br"),a("span",{staticClass:"line-number"},[s._v("176")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);