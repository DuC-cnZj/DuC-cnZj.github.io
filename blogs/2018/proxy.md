---
title:  设计模式---代理模式（Proxy）
date: "2018-10-30 15:43:08"
sidebar: false
categories:
 - 技术
tags:
 - 设计模式
 - 代理模式
publish: true
---


## 概念

> 在代理模式（Proxy Pattern）中，***一个类代表另一个类的功能***。这种类型的设计模式属于结构型模式。
>
> 在代理模式中，我们创建具有现有对象的对象，以便向外界提供功能接口。



### 结构型设计模式：用于处理类和对象的组合



## 代码😀

```php
<?php
namespace pattern;
/**
 * 代理模式，普通代理
 */
interface IUser {
    public function login();
    public function operate();
    public function logout();
}

final class Admin implements IUser {
    private $_name;
    public function __construct($name) {
        $this->_name = $name;
    }
    public function login() {
        echo 'welcome ' . $this->_name . ' back!' . PHP_EOL;
    }
    public function operate() {
        echo $this->_name . ' start to operate!' . PHP_EOL;
    }
    public function logout() {
        echo $this->_name . ' logout, remember to come back! Bye!' . PHP_EOL;
    }
}

final class UserProxy implements IUser {
    private $_user = null;
    public function __construct(IUser $user) { 
        $this->_user = $user;
    }
    public function login() {
        $this->_user->login();
    }
    public function operate() {
        $this->_user->operate();
    }
    public function logout() {
        $this->_user->logout();
    }
}

$user = new Admin('pipi'); // 这里应该是关键，将对象给代理对象
$proxy = new UserProxy($user);
$proxy->login();
$proxy->operate();
$proxy->logout();
```





## 介绍

> **意图：**为其他对象提供一种代理以控制对这个对象的访问。
>
> **主要解决：**在直接访问对象时带来的问题，比如说：要访问的对象在远程的机器上。在面向对象系统中，有些对象由于某些原因（比如对象创建开销很大，或者某些操作需要安全控制，或者需要进程外的访问），直接访问会给使用者或者系统结构带来很多麻烦，我们可以在访问此对象时加上一个对此对象的访问层。
>
> **何时使用：**想在访问一个类时做一些控制。
>
> **如何解决：**增加中间层。
>
> **关键代码：**实现与被代理类组合。
>
> **应用实例：** 1、Windows 里面的快捷方式。 2、猪八戒去找高翠兰结果是孙悟空变的，可以这样理解：把高翠兰的外貌抽象出来，高翠兰本人和孙悟空都实现了这个接口，猪八戒访问高翠兰的时候看不出来这个是孙悟空，所以说孙悟空是高翠兰代理类。 3、买火车票不一定在火车站买，也可以去代售点。 4、一张支票或银行存单是账户中资金的代理。支票在市场交易中用来代替现金，并提供对签发人账号上资金的控制。 5、spring aop。
>
> **优点：** 1、职责清晰。 2、高扩展性。 3、智能化。
>
> **缺点：** 1、由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。 2、实现代理模式需要额外的工作，有些代理模式的实现非常复杂。
>
> **使用场景：**按职责来划分，通常有以下使用场景： 1、远程代理。 2、虚拟代理。 3、Copy-on-Write 代理。 4、保护（Protect or Access）代理。 5、Cache代理。 6、防火墙（Firewall）代理。 7、同步化（Synchronization）代理。 8、智能引用（Smart Reference）代理。
>
> **注意事项：** 1、和适配器模式的区别：适配器模式主要改变所考虑对象的接口，而代理模式不能改变所代理类的接口。 2、和装饰器模式的区别：装饰器模式为了增强功能，而***代理模式是为了加以控制***。