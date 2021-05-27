(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{550:function(s,t,e){s.exports=e.p+"assets/img/2018_12_11_DWN13rtW3B.6dc7605b.png"},749:function(s,t,e){"use strict";e.r(t);var a=e(6),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:e(550),alt:"How to install PHP 7.3"}}),s._v(" "),a("a",{attrs:{href:"https://secure.php.net/releases/7_3_0.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP 7.3已经发布"),a("OutboundLink")],1),s._v("，带来一些伟大的新功能，语言，比如"),a("a",{attrs:{href:"https://wiki.php.net/rfc/trailing-comma-function-calls",target:"_blank",rel:"noopener noreferrer"}},[s._v("尾随在函数调用逗号"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"https://wiki.php.net/rfc/json_throw_on_error",target:"_blank",rel:"noopener noreferrer"}},[s._v("当JSON解析失败引发错误"),a("OutboundLink")],1),s._v("，"),a("a",{attrs:{href:"https://wiki.php.net/rfc/array_key_first_last",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("array_key_first()")]),s._v("/ "),a("code",[s._v("array_key_last()")]),s._v("功能"),a("OutboundLink")],1),s._v("，以及"),a("a",{attrs:{href:"https://secure.php.net/manual/en/migration73.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多"),a("OutboundLink")],1),s._v("！")]),s._v(" "),a("p",[s._v("这是关于如何在Linux，Windows和OS X上安装PHP 7.3的简要指南：")]),s._v(" "),a("h2",{attrs:{id:"ubuntu的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu的"}},[s._v("#")]),s._v(" Ubuntu的")]),s._v(" "),a("p",[s._v("可以通过添加"),a("a",{attrs:{href:"https://launchpad.net/~ondrej/+archive/ubuntu/php",target:"_blank",rel:"noopener noreferrer"}},[s._v("OndřejSurý的PPA"),a("OutboundLink")],1),s._v("来安装PHP 7.3和常用扩展：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:ondrej/php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后，您可以使用所有常见扩展和SAPI安装PHP 7.3，如下所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者您可以指定这样的单个包：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.3-cli php7.3-fpm php7.3-bcmath php7.3-curl php7.3-gd php7.3-intl php7.3-json php7.3-mbstring php7.3-mysql php7.3-opcache php7.3-sqlite3 php7.3-xml php7.3-zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("支持：")]),s._v(" "),a("ul",[a("li",[s._v("Ubuntu 14.04 (Trusty)")]),s._v(" "),a("li",[s._v("Ubuntu 16.04 (Xenial)")]),s._v(" "),a("li",[s._v("Ubuntu 18.04 (Bionic)")]),s._v(" "),a("li",[s._v("Ubuntu 18.10 (Cosmic)")])]),s._v(" "),a("h2",{attrs:{id:"debian的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian的"}},[s._v("#")]),s._v(" Debian的")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://packages.sury.org/php/",target:"_blank",rel:"noopener noreferrer"}},[s._v("OndřejSurý还"),a("OutboundLink")],1),s._v("为"),a("strong",[s._v("Debian 8（Jessie）"),a("strong",[s._v("和")]),s._v("Debian 9（Stretch）")]),a("a",{attrs:{href:"https://packages.sury.org/php/",target:"_blank",rel:"noopener noreferrer"}},[s._v("提供PHP 7.3软件包"),a("OutboundLink")],1),s._v("。使用以下命令添加存储库：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y apt-transport-https lsb-release ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://packages.sury.org/php/ '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -sc"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/php.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后安装PHP 7.3，其默认值如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者列出您想要的确切包裹：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php7.3-cli php7.3-fpm php7.3-bcmath php7.3-curl php7.3-gd php7.3-intl php7.3-json php7.3-mbstring php7.3-mysql php7.3-opcache php7.3-sqlite3 php7.3-xml php7.3-zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"centos-rhel和fedora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-rhel和fedora"}},[s._v("#")]),s._v(" CentOS / RHEL和Fedora")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://rpms.remirepo.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Remi的RPM存储库"),a("OutboundLink")],1),s._v("具有最新PHP 7.3版本的RPM。有关如何最好地安装此项，请参阅"),a("a",{attrs:{href:"https://blog.remirepo.net/post/2018/12/06/PHP-version-7.3.0-is-released",target:"_blank",rel:"noopener noreferrer"}},[s._v("Remi的博客文章"),a("OutboundLink")],1),s._v("，具体取决于您的操作系统版本'跑步。")]),s._v(" "),a("h2",{attrs:{id:"mac-os-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-x"}},[s._v("#")]),s._v(" Mac OS X.")]),s._v(" "),a("p",[s._v("使用"),a("a",{attrs:{href:"https://php-osx.liip.ch/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Liip "),a("code",[s._v("php-osx")]),s._v("工具"),a("OutboundLink")],1),s._v("可以轻松安装PHP 7.3 - 只需在终端中运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://php-osx.liip.ch/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者，如果您更喜欢使用Homebrew：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php73\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),a("p",[s._v("Windows用户可以在"),a("a",{attrs:{href:"https://windows.php.net/download/#php-7.3",target:"_blank",rel:"noopener noreferrer"}},[s._v("windows.php.net"),a("OutboundLink")],1),s._v("网站上找到PHP 7.3发行版。")]),s._v(" "),a("p",[s._v("有关安装发行版的其他说明，请参阅此博客文章："),a("a",{attrs:{href:"http://kizu514.com/blog/install-php7-and-composer-on-windows-10/",target:"_blank",rel:"noopener noreferrer"}},[s._v("//kizu514.com/blog/install-php7-and-composer-on-windows-10/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"phpbrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpbrew"}},[s._v("#")]),s._v(" phpbrew")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/phpbrew/phpbrew",target:"_blank",rel:"noopener noreferrer"}},[s._v("phpbrew"),a("OutboundLink")],1),s._v("是一个了不起的工具，可以帮助您在计算机上下载，编译和管理多个版本的PHP。假设您已经按照"),a("a",{attrs:{href:"https://github.com/phpbrew/phpbrew#requirement",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装说明进行操作"),a("OutboundLink")],1),s._v("并"),a("code",[s._v("phpbrew")]),s._v("启动并运行，则可以使用两个简单命令安装PHP 7.3.0：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("phpbrew update\nphpbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -j "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nproc"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),s._v(".0 +default\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" docker")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/_/php/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方PHP图像可以在Docker Hub上找到"),a("OutboundLink")],1),s._v("。使用"),a("code",[s._v("php:7.3")]),s._v("标记作为基本图像。")]),s._v(" "),a("p",[s._v("Docker也是在本地交互式shell中修改PHP 7.3而不先安装它的好方法！只需在您的终端中运行：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -it --rm php:7.3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);