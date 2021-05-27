---
title: 全栈才知道的秘密
date: '2021-05-12 12:54:14'
sidebar: true
categories:
 - 前后端分离
tags:
 - 前后端分离
publish: true
---


> 今天我们来说一说前后端分离中的无痛刷新机制，在手机 app 中应该经常用到，
>
> 大家都知道在前后端是以 token 的形式交互，既然是 token，那么肯定有它的过期时间，没有一个 token 是永久的，永久的 token 就相当于一串永久的密码，是不安全的，
>
> 那么既然有刷新时间，问题就来了

- 前后端交互的过程中 token 如何存储？
- token 过期时，前端该怎么处理
- 当用户正在操作时，遇到 token 过期该怎么办？直接跳回登陆页面？😅（你确定这样用户不会打死你吗，老子好不容易表单填完准备提交？？？？）

## token 如何存储

> cookie 的大小约 4k，兼容性在 ie6 及以上 都兼容，在浏览器和服务器间来回传递，因此它得在服务器的环境下运行，而且可以设定过期时间，默认的过期时间是 session 会话结束。
> localStorage 的大小约 5M，兼容性在 ie7 及以上都兼容，有浏览器就可以，不需要在服务器的环境下运行， 会一直存在，除非手动清除 。

对于这个问题，答案大致分为 2 种

1. 存在 `cookie` 中
2. 存在 `localStorage` 中

我觉得都可以，两种我都用 😄

## token 过期时，前端该怎么处理

思路：token 过期处理方式大概就是：

1. 第一种：跳回登陆页面重新登陆
2. 第二种：`catch` 401 ，然后重新获取 `token`

对于第一种，很简单在 vue 中我们可以在 `axios` 拦截器中这样写：

```js
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    console.log(error)

    if (error.response) {
      if (error.response.status === 401) {
            Message.error('登陆过期请重新登陆！')
            setToken('')
            router.push({
              name: 'login'
            })
        }
      }
    }

    // 对响应错误做点什么
    return Promise.reject(error.response)
  }
)
```

对于第二种，如何重新获取 `token`，这就要涉及到后端的知识了

### 来先让我讲一段废话 😅

> 现代认证和/或授权解决方案已将*令牌*的概念引入其协议中。令牌是经过特殊处理的数据，它们可以提供足够的信息来**授权用户执行操作**，或者允许客户端**获取有关授权**过程的**其他信息**（然后完成它）。换句话说，令牌是允许执行授权过程的信息。客户端（或授权服务器以外的任何一方）是否可读取或解析此信息是由实现定义的。重要的是：客户端获取此信息，然后使用它来**访问资源**。JSON Web 令牌（JWT）[规范](https://tools.ietf.org/html/rfc7519) 定义了一种可以由实现表示公共令牌信息的方式。

> JWT 定义了一种方式，其中可以**表示**与认证/授权过程有关的某些公共信息。顾名思义，数据格式是**JSON**。JWT 具有某些**常见字段，**例如主题，发行者，到期时间等。当与其他规范（如[JSON Web 签名（JWS）](https://tools.ietf.org/html/rfc7515)和[JSON Web 加密（JWE））](https://tools.ietf.org/html/rfc7516)结合使用时，JWT 变得非常有用。这些规范不仅提供了授权令牌通常所需的所有信息，而且还提供了**验证**令牌**内容**的方法，使其不会被篡改（JWS）和**加密信息**以使其保持**不透明的方式**给客户（JWE）。数据格式的简单性（及其它优点）帮助 JWT 成为最常见的令牌类型之一。如果您有兴趣学习如何在 Web 应用程序中实现 JWT，请查看 Ryan Chenkie 的这篇优秀[文章](https://auth0.com/blog/2015/09/28/5-steps-to-add-modern-authentication-to-legacy-apps-using-jwts/)。

出于本文的目的，我们将关注两种最常见的令牌类型：*访问令牌*和*刷新令牌*。

- **访问令牌**携带必要的信息以直接访问资源。换句话说，当客户端将访问令牌传递给管理资源的服务器时，该服务器可以使用令牌中包含的信息来决定客户端是否被授权。访问令牌通常具有到期日期并且是短暂的。

![访问令牌](https://cdn.auth0.com/blog/refresh-token/diag1.png)

- **刷新令牌**包含获取新访问令牌所需的信息。换句话说，每当访问令牌需要访问特定资源时，客户端可以使用刷新令牌来获得由认证服务器发布的新访问令牌。常见用例包括在旧的访问令牌过期后获取新访问令牌，或者首次访问新资源。刷新令牌也可以过期，但相当长寿。刷新令牌通常受到严格的存储要求，以确保它们不会泄露。它们也可以被授权服务器列入黑名单。

![刷新令牌](https://cdn.auth0.com/blog/refresh-token/diag2.png)

标记是否不透明通常由实现定义。通用实现允许**针对访问令牌**进行**直接授权检查**。也就是说，当访问令牌被传递到管理资源的服务器时，服务器可以读取令牌中包含的信息并自己决定用户是否被授权（不需要对授权服务器进行检查）。这是必须签署令牌的原因之一（例如，使用 JWS）。另一方面，刷新令牌通常需要检查授权服务器。这种处理授权检查的分割方式允许三件事：

1.  改进了授权服务器的访问模式（降低负载，加快检查速度）
2.  泄漏访问令牌的访问窗口较短（这些访问令牌很快过期，减少了泄露令牌允许访问受保护资源的机会）
3.  滑动会话（见下文）

滑动会话是在一段**时间不活动**后到期的会话。可以想象，使用访问令牌和刷新令牌可以轻松实现。当用户执行操作时，将发出新的访问令牌。如果用户使用过期的访问令牌，则该会话将被视为非活动状态，并且需要新的访问令牌。是否可以使用刷新令牌获取此令牌或者需要新的身份验证轮次是由开发团队的要求定义的。

上文摘抄自 [刷新令牌：何时使用它们以及它们如何与 JWT 交互](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

### **废话一堆，简单的来说就是：**

> 服务器生成 token 的过程中，会有两个时间，一个是 token 失效时间，一个是 token 刷新时间，刷新时间肯定比失效时间长，当用户的 `token` 过期时，你可以拿着过期的 token 去换取新的 token，来保持用户的登陆状态，当然你这个过期 token 的过期时间必须在刷新时间之内，如果超出了刷新时间，那么返回的依旧是 401

所以要实现无痛刷新 token，我们应该这样

1. 在 axios 的拦截器中加入 token 刷新逻辑
2. 当用户 token 过期时，去向服务器请求新的 token
3. 把旧的 token 替换为新的 token
4. 然后继续用户当前的请求
5. 用户体验棒棒哒 💯

## 上代码

在 axios 的拦截器中加入 token 刷新逻辑

```js
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response.data;
  },
  function(error) {
    console.log(error);

    if (error.response) {
      if (error.response.status === 401) {
        // 如果当前路由不是login，并且用户有 “记住密码” 的操作
        // 那么去请求新 token
        if (router.currentRoute.name !== "login") {
          if (getRemember() && getRefreshToken()) {
            return doRequest(error);
          } else {
            Message.error("登陆过期请重新登陆！");
            setToken("");
            router.push({
              name: "login",
            });
          }
        }
      }
    }

    // 对响应错误做点什么
    return Promise.reject(error.response);
  }
);
```

```js
async function doRequest(error) {
  const data = await store.dispatch("refreshToken");

  return res;
}

// refreshToken 中重新设置了 token 和  refresh_token
commit("setToken", { token, expiresIn });
setRefreshToken(token, refreshTtl / (60 * 60 * 24));
```

### 来看测试

> 为了方便测试，我们手动清除了 token 来造成 token 过期的效果

![2018_12_08_M3OBbekLBh.gif](../images/2018_12_08_M3OBbekLBh.gif)

可以看到手动清除 token 之后，系统自动去 refresh 了 token，而不是跳到登录页面

## 但是问题又来了

> 可以看出用户本身要去请求 articles 的接口，并没有再重复请求。请脑补：用户点击了文章列表，但是系统好像 “没反应” ？？？

所以接下来，我们不仅要刷新 token 而且要再次发送用户上次的请求

上代码 😼

```js
async function doRequest(error) {
  const data = await store.dispatch("refreshToken");
  let { token_type: tokenType, access_token: accessToken } = data;

  let token = tokenType + accessToken;
  let config = error.response.config;

  config.headers.Authorization = token;

  const res = await axios.request(config);

  return res;
}
```

这里我们一定要用同步的方法来进行这一系列操作！！（比如 async / await）

来看演示 👇

![2018_12_08_j6oBFSpwW5.gif](../images/2018_12_08_j6oBFSpwW5.gif)

## 到此就结束了，相信大佬们一定都懂了吧 👏
