(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{516:function(a,s,t){a.exports=t.p+"assets/img/2018_12_15_8zJlAhRCxB.af851814.png"},517:function(a,s,t){a.exports=t.p+"assets/img/2018_12_15_hvSHbM4bZU.2ba944d5.png"},765:function(a,s,t){"use strict";t.r(s);var n=t(6),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("blockquote",[n("p",[a._v("本文转载自 "),n("a",{attrs:{href:"https://ohdear.app/blog/our-gitlab-ci-pipeline-for-laravel-applications",target:"_blank",rel:"noopener noreferrer"}},[a._v("ondear"),n("OutboundLink")],1)])]),a._v(" "),n("p",[a._v("我们已经相当公开了我们为哦亲爱的测试数量！暴走已经"),n("a",{attrs:{href:"https://twitter.com/freekmurze/status/963119438504611842",target:"_blank",rel:"noopener noreferrer"}},[a._v("展示"),n("OutboundLink")],1),a._v(" "),n("a",{attrs:{href:"https://twitter.com/freekmurze/status/927996380932689920",target:"_blank",rel:"noopener noreferrer"}},[a._v("位"),n("OutboundLink")],1),a._v("和"),n("a",{attrs:{href:"https://twitter.com/freekmurze/status/969680415618252800",target:"_blank",rel:"noopener noreferrer"}},[a._v("个"),n("OutboundLink")],1),a._v("在他的Twitter，以显示这一努力的程度。")]),a._v(" "),n("p",[a._v("拥有一个庞大的测试套件很不错，但将它集成到您的开发工作流程中会更好。")]),a._v(" "),n("p",[a._v("这就是我们发布针对Laravel应用程序优化的Gitlab CI管道的原因。它包含您期望的所有元素：构建（"),n("code",[a._v("composer")]),a._v("，"),n("code",[a._v("yarn")]),a._v("＆"),n("code",[a._v("webpack")]),a._v("），数据库种子，PHPUnit和复制/粘贴（混乱）检测器以及对第三方依赖项的一些基本安全审核。")]),a._v(" "),n("p",[a._v("如果要查看其中的操作，请跳至"),n("a",{attrs:{href:"https://ohdear.app/blog/our-gitlab-ci-pipeline-for-laravel-applications#how-to-use-our-gitlab-ci",target:"_blank",rel:"noopener noreferrer"}},[a._v("“如何使用”"),n("OutboundLink")],1),a._v("部分。")]),a._v(" "),n("h2",{attrs:{id:"我们的laravel-ci管道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我们的laravel-ci管道"}},[a._v("#")]),a._v(" 我们的Laravel CI管道")]),a._v(" "),n("p",[a._v("这是我们当前设置的样子。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(516),alt:"2018_12_15_8zJlAhRCxB.png"}})]),a._v(" "),n("p",[a._v("我们将在这篇博文中详细解释"),n("em",[a._v("为什么")]),a._v("我们已经做出了一些我们做出的决定以及如何建立这样的系统。")]),a._v(" "),n("h2",{attrs:{id:"设置gitlab-ci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置gitlab-ci"}},[a._v("#")]),a._v(" 设置Gitlab CI")]),a._v(" "),n("p",[a._v("我们使用免费版的"),n("a",{attrs:{href:"https://gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gitlab"),n("OutboundLink")],1),a._v("来托管我们的Git存储库并启动运行我们所有测试的作业。但是，由于我们运行免费版本（作为初创公司，我们对运营成本持谨慎态度），我们仅限于在Gitlab上运行哪种CI。")]),a._v(" "),n("p",[a._v("因此，我们已经安装并运行了我们自己的"),n("a",{attrs:{href:"https://docs.gitlab.com/runner/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gitlab Runner"),n("OutboundLink")],1),a._v("，它使用Docker容器来运行我们的测试。Gitlab.com服务器实质上指示"),n("em",[a._v("我们的")]),a._v("服务器运行整个管道，我们将状态报告给Gitlab进行报告。")]),a._v(" "),n("p",[n("a",{attrs:{href:"https://docs.gitlab.com/runner/install/docker.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用Docker"),n("OutboundLink")],1),a._v("设置本地"),n("a",{attrs:{href:"https://docs.gitlab.com/runner/install/docker.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gitlab Runner"),n("OutboundLink")],1),a._v("非常简单，他们的文档可以很好地处理这个问题。我们为了加快速度而改变的一些小事情与工作的并发性有关。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/gitlab-runner/config-main.toml\nconcurrent "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\ncheck_interval "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("runners"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  name "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ohdear/ohdear"')]),a._v("\n  url "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://gitlab.com"')]),a._v("\n  token "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"(this is secret, don\'t share this)"')]),a._v("\n  executor "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker"')]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("runners.docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    tls_verify "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    image "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"php:7.2"')]),a._v("\n    privileged "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    disable_cache "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    volumes "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/cache"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    shm_size "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("runners.cache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])]),n("p",[a._v("默认情况下，我们在PHP 7.2上运行测试，同时允许2个作业。")]),a._v(" "),n("h2",{attrs:{id:"cpu负载和docker容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cpu负载和docker容器"}},[a._v("#")]),a._v(" CPU负载和Docker容器")]),a._v(" "),n("p",[a._v("我们在自己的系统上运行测试套件。测试开始时，Docker启动了几个容器。其中一个是MySQL容器，数据库播种将在其中发生。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\nCOMMAND                  CREATED             NAMES\n"),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-php-entryp..."')]),a._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" minutes ago       runner-"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".-build-4\n"),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-entrypoint..."')]),a._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" minutes ago       runner-"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".-mysql-0\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("当多个测试并行运行时，CPU负载趋于高峰。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(517),alt:"2018_12_15_hvSHbM4bZU.png"}})]),a._v(" "),n("p",[a._v("请记住，多个容器将同时运行，可能会使您的服务器达到100％的CPU使用率。出于这个原因，我们决定在我们的一台测试机器上运行它们，即使生产服务器拥有大量可用的CPU和内存。")]),a._v(" "),n("p",[a._v("但是，为了使我们能够处理峰值使用，我们需要保持这些资源的免费和可用性。")]),a._v(" "),n("h2",{attrs:{id:"定义阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义阶段"}},[a._v("#")]),a._v(" 定义阶段")]),a._v(" "),n("p",[a._v("我们创建了4个不同的阶段，我们的测试运行。这些将逐步发生，作业并发为2.在任何阶段，最多同时运行2个作业。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/gitlab-runner/config-main.toml\nconcurrent "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("如果您的测试需要同时执行更多作业，则可以增加该"),n("code",[a._v("concurrent")]),a._v("设置。")]),a._v(" "),n("p",[a._v("前一阶段必须在下一阶段开始之前成功。这是我们的"),n("a",{attrs:{href:"https://github.com/ohdearapp/gitlab-ci-pipeline-for-laravel/blob/master/.gitlab-ci.yml",target:"_blank",rel:"noopener noreferrer"}},[a._v(".gitlab-ci.yml"),n("OutboundLink")],1),a._v("的缩写版本。")]),a._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stages")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" preparation\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" building\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" testing\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" security\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("composer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" preparation\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("yarn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" preparation\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("build-assets")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" building\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("db-seeding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" building\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("phpunit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" testing\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("codestyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" testing\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("phpcpd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" testing\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sensiolabs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" security\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br")])]),n("p",[a._v("如果你有一个包含3个作业的"),n("code",[a._v("testing")]),a._v("阶段（比如我们的阶段），请记住第3个作业可能需要更长的时间来完成并发"),n("em",[a._v("只有")]),a._v(" 2个作业。前2个将并行运行，第3个将不得不等待一个空闲的工作"),n("em",[a._v("位置")]),a._v("。")]),a._v(" "),n("h2",{attrs:{id:"资产建设测试前"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资产建设测试前"}},[a._v("#")]),a._v(" 资产建设测试前？")]),a._v(" "),n("p",[a._v("我们做的与大多数步骤不同的步骤之一是"),n("em",[a._v("在")]),a._v("运行单元测试"),n("em",[a._v("之前")]),a._v("构建资产。")]),a._v(" "),n("p",[a._v("原因是因为这样的测试：")]),a._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("boot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* ... */")]),a._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$startServerCommand")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'\n      php -S localhost:9000/ -t \\\n      ./tests/Server/public > /dev/null 2>&1 & echo $!\n  '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$pid")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$startServerCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[a._v("在我们的单元测试期间，我们生成了一个Web服务器来测试我们的几个关键功能;")]),a._v(" "),n("ul",[n("li",[a._v("正常运行时间和停机检测")]),a._v(" "),n("li",[a._v("我们抓取该测试服务器以检测混合内容和损坏的链接")]),a._v(" "),n("li",[a._v("我们测试了几个自定义HTTP标头功能")])]),a._v(" "),n("p",[a._v("这个测试网络服务器产生"),n("a",{attrs:{href:"https://ohdear.app/",target:"_blank",rel:"noopener noreferrer"}},[a._v("了我们的公共网站"),n("OutboundLink")],1),a._v("，而后者依赖于编译的JavaScript和CSS（"),n("a",{attrs:{href:"https://laravel.com/docs/5.7/mix",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel Mix"),n("OutboundLink")],1),a._v("）。这是编译的"),n("code",[a._v("webpack")]),a._v("，这就是我们在单元测试之前运行资产构建阶段的原因。")]),a._v(" "),n("p",[a._v("没有它，我们的测试将失败，因为我们无法呈现我们的主页。")]),a._v(" "),n("p",[a._v("抓取我们自己的网站 - 以及各种自定义端点来模拟停机时间或缓慢响应 - 还有一个额外的好处，即我们在部署之前验证（大部分）我们的网站是否正常运行。")]),a._v(" "),n("h2",{attrs:{id:"设置依赖关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置依赖关系"}},[a._v("#")]),a._v(" 设置依赖关系")]),a._v(" "),n("p",[a._v("我们的一些阶段取决于前一阶段的输出以便工作。一个很好的例子是我们的"),n("code",[a._v("testing")]),a._v("舞台。当我们运行时"),n("code",[a._v("phpunit")]),a._v("，它将获取oru主页，而主页又依赖于在前一阶段生成的CSS和JavaScript。")]),a._v(" "),n("p",[a._v("Gitlab CI允许您设置每个阶段的依赖项。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("phpunit:\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  dependencies:\n    - build-assets\n    - "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v("\n    - db-seeding\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("设置依赖关系可确保"),n("code",[a._v("artifacts")]),a._v("从该特定作业下载到此特定作业，实质上是将一个作业的输出复制到另一个作业。")]),a._v(" "),n("p",[a._v("在这个例子中，在我们运行单元测试之前，我们需要：")]),a._v(" "),n("ul",[n("li",[a._v("我们编译的资产（以及"),n("code",[a._v("public/mix-manifest.json")]),a._v("Laravel所需的资产）")]),a._v(" "),n("li",[a._v("的"),n("code",[a._v("vendor")]),a._v("目录"),n("code",[a._v("composer install")])]),a._v(" "),n("li",[a._v("包含我们种子数据的功能正常的数据库")])]),a._v(" "),n("p",[a._v("一旦完成，它就可以运行这项工作。")]),a._v(" "),n("h2",{attrs:{id:"缓存与工件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存与工件"}},[a._v("#")]),a._v(" 缓存与工件")]),a._v(" "),n("p",[a._v("Gitlab CI严重依赖于我们最初错误配置的两个概念：缓存和工件。")]),a._v(" "),n("p",[a._v("正如文字所暗示的，"),n("em",[a._v("缓存")]),a._v("是数据的本地"),n("em",[a._v("缓存")]),a._v("。它仅在服务器上本地可用，并不保证存在。")]),a._v(" "),n("p",[a._v("用我们自己的话说，工件是你想要存储在工作中的东西，以传递给下一个工件。"),n("em",[a._v("最初")]),a._v("，工件是你想要在工作中"),n("em",[a._v("生存的")]),a._v("东西。与生成的日志或错误文件一样，PHP单元覆盖率等。")]),a._v(" "),n("p",[a._v("但是这个功能可以比仅导出测试结果更广泛地使用：您可以使用它将一个作业的输出传递给下一个作业。")]),a._v(" "),n("p",[a._v("我们首先考虑使用"),n("em",[a._v("缓存")]),a._v("来实现此目的，因为它们可以在本地存储并且可以更快地使用。但是，缓存不能保证在那里，大约30％的管道会随机失败，因为它缺少一个作曲家"),n("code",[a._v("vendor")]),a._v("目录，编译资产，......即使这些工作完成得很好。")]),a._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("composer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" preparation\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" composer install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("prefer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dist "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("ansi "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("interaction "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("progress "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("no"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("scripts\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("artifacts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" vendor/\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" .env\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("expire_in")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1 days\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("when")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" vendor/\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])]),n("p",[a._v("在上面的例子中，我们定义了两个关键部分：")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("artifacts")]),a._v("：我们想要上传回Gitlab以便我们的下一个工作可以使用")]),a._v(" "),n("li",[n("code",[a._v("cache")]),a._v("：我们想在本地存储什么来加速下一次这项工作")])]),a._v(" "),n("p",[a._v("因此，我们最终将Artifacts用于我们想要继承的下一个作业和本地缓存，以便尽可能加快作曲家安装速度。")]),a._v(" "),n("p",[a._v("这感觉就像YAML文件中的代码重复一样，但这是必要的步骤。")]),a._v(" "),n("h2",{attrs:{id:"你的-env-example中的一些问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#你的-env-example中的一些问题"}},[a._v("#")]),a._v(" 你的.env.example中的一些问题")]),a._v(" "),n("p",[a._v("我们为MySQL数据库生成了一个单独的Docker容器。它使用一组预定义的环境变量来创建具有密码和数据库的用户。")]),a._v(" "),n("p",[a._v("它定义在我们的"),n("a",{attrs:{href:"https://github.com/ohdearapp/gitlab-ci-pipeline-for-laravel/blob/master/.gitlab-ci.yml",target:"_blank",rel:"noopener noreferrer"}},[a._v(".gitlab-ci.yml"),n("OutboundLink")],1),a._v("的最顶层。")]),a._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("variables")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" root\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_USER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ohdear_ci\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ohdear_secret\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_DATABASE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ohdear_ci\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("DB_HOST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("我们的Laravel应用程序也需要了解这些凭据才能连接到此数据库。我们通过在"),n("code",[a._v(".env.example")]),a._v("文件中设置这些凭据来解决这个问题。")]),a._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[a._v("DB_CONNECTION=mysql\nDB_HOST=mysql\nDB_PORT=3306\nDB_DATABASE=ohdear_ci\nDB_USERNAME=ohdear_ci\nDB_PASSWORD=ohdear_secret\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("在我们的"),n("code",[a._v("composer")]),a._v("工作中，我们还准备使用Laravel配置。")]),a._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("composer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" composer install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" cp .env.example .env\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" php artisan key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("generate\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("通过处理"),n("code",[a._v(".env.example")]),a._v("文件，我们为测试环境提供了MySQL凭据。")]),a._v(" "),n("h2",{attrs:{id:"缺少部署步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺少部署步骤"}},[a._v("#")]),a._v(" 缺少部署步骤")]),a._v(" "),n("p",[a._v("这里缺少一个明显的步骤 - 也许 - 最重要的一步：部署应用程序。")]),a._v(" "),n("p",[a._v("我们还没有在Gitlab CI中实现这一点。我们的部署当然是自动化的，但是现在它与我们的CI管道的状态无关。即使测试失败，我们"),n("em",[a._v("也可以进行")]),a._v("部署。")]),a._v(" "),n("p",[a._v("我们仍然是一个小团队，我们决定部署，但受控制。由于许多Laravel用户会使用"),n("a",{attrs:{href:"https://envoyer.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Envoyer"),n("OutboundLink")],1),a._v("进行部署，因此可以进行进一步的自动化以进行集成。")]),a._v(" "),n("p",[a._v("我们将在稍后的博文中强调我们的部署策略（以及不与Gitlab CI结合的原因），有很多细微差别值得强调。")]),a._v(" "),n("h2",{attrs:{id:"抓住我们的gitlab-ci管道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抓住我们的gitlab-ci管道"}},[a._v("#")]),a._v(" 抓住我们的Gitlab CI管道")]),a._v(" "),n("p",[a._v("你会在我们的Github上找到配置："),n("a",{attrs:{href:"https://github.com/ohdearapp/gitlab-ci-pipeline-for-laravel",target:"_blank",rel:"noopener noreferrer"}},[a._v("ohdearapp / gitlab-ci-pipeline-for-laravel"),n("OutboundLink")],1),a._v("。")]),a._v(" "),n("p",[a._v("如果您发现问题或有改进，请随时贡献！")]),a._v(" "),n("p",[n("a",{attrs:{href:"http://lorisleiva.com/laravel-deployment-using-gitlab-pipelines/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Loris Leiva关于Laravel管道的博客文章充分"),n("OutboundLink")],1),a._v("启发了这条管道的基础，并根据我们的需求和愿望进行了调整。")]),a._v(" "),n("h2",{attrs:{id:"如何使用我们的gitlab-ci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用我们的gitlab-ci"}},[a._v("#")]),a._v(" 如何使用我们的Gitlab CI？")]),a._v(" "),n("p",[a._v("缩写版本是;")]),a._v(" "),n("ol",[n("li",[a._v("获取Gitlab帐户并将代码提交到Gitlab存储库")]),a._v(" "),n("li",[a._v("将"),n("a",{attrs:{href:"https://github.com/ohdearapp/gitlab-ci-pipeline-for-laravel/blob/master/.gitlab-ci.yml",target:"_blank",rel:"noopener noreferrer"}},[a._v(".gitlab-ci.yml"),n("OutboundLink")],1),a._v("复制/粘贴到您的项目中")]),a._v(" "),n("li",[a._v("推送到您的存储库")])]),a._v(" "),n("p",[a._v("现在观看Gitlab检测到您的配置并尝试运行您的工作。此时，您可能想要考虑订阅Gitlab CI或运行自己的Gitlab运行程序来执行测试。")]),a._v(" "),n("p",[a._v("如果您发现任何改进，得到或有一般性评论，我们很乐意在下面的评论中听到您的想法！")])])}),[],!1,null,null,null);s.default=e.exports}}]);