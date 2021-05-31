---
title:  设计模式小记
date: "2018-12-07 12:55:29"
sidebar: false
categories:
 - 技术
tags:
 - 设计模式
publish: true
---



> 我们要点一个pizza

1. 首先准备原料，需要原料，可能由超时提供，可能由厂家提供，我们不关心 ，我们只需要拿到原料就好 **工厂模式**
2. 开始制作pizza，制作pizza有相同的步骤，但是不同的pizza可能每个步骤中加的原料不一样，草莓味的加草莓，橘子味道的加橘子片，但是它的整个流程都是一样的，一共几个步骤都是一样的 **建造者模式**
3. 做完pizza后，我们要送出去，相当于送外卖，送外卖的形式可以有很多种，骑车，无人机，走路，开电瓶... **策略模式**
4. 最后，我们这不是还没点外卖吗，打开手机app就能直接点对不对，不需要每次要点外卖的时候都下载app，这就是所谓的注册模式，laravel中的serviceProvider **注册模式**
