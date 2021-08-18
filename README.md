## 仓库说明
博客园功能定制 for : [http://www.cnblogs.com/zhaoqingqing/](http://www.cnblogs.com/zhaoqingqing/)  

你也可以把此样式应用于自己的博客园样式，使用指南见下方的 **cnblogs后台设置**

### 我的博客内容

- unity3d引擎技术，游戏开发的知识积累
- 端游无缝大世界引擎，端游开发知识
- 工作点滴 + 项目沉淀 + 自己学习 的总结
- .Net技术领域的技术知识
- 数据结构，算法，设计模式，编程领悟

## 建议浏览器

建议读者使用现代化的浏览器套用或浏览博客，比如`chrome`，`edge`，`firefox`，`opera`，`ie11及以上版本`

PS. 目前在手机上的显示未适配，正在计划中



## cnblogs后台设置

1. 在博客园后台上传文件，包括css，js，图片资源
2. 在博客园后台的**页首Html代码**和**页脚Html代码**添加文件引用
3. 勾选**禁用模版CSS**根据实际情况来选择是否需要禁用

bootstrap CDN： https://getbootstrap.com/

## 主要功能

### 自动为每一篇博客生成Nav(文章标题大纲)
通过脚本抓取页面中的h1,h2,h3标签 生成目录导航。

### 自动在每一篇博客的页尾Append签名信息
在每一篇博客的底部，生动生成一段版权说明文字。

### 给博客增加ScrollBar的快捷功能条
为博客增加 ScrollTop，ScrollBottom 的快捷功能，目前这个功能的js脚本还有bug，**待fix**

### 定制博客的导航分类，增加自定义栏目
对博客的导航栏进行分类，比如增加主题性分类

### 定制博客中Normal格式的文章样式
基于simplememory主题，定制文章页面的CSS样式，包括：h标签样式，博客栏目样式，代码样式等。

### 定制博客中Markdown文章的渲染样式
对markdown格式文章的渲染美化

### TOC(文章大纲/目录)

pc浏览本博客默认展开TOC，mobile浏览默认收缩。

参考：http://www.cnblogs.com/Quincy/p/4832805.html

### F12有彩蛋

使用chrome，firefox等现代化浏览器的同学，可以F12查看控制台的log。

## Markdown图片

### 七牛图床服务

七牛图片水印：[http://developer.qiniu.com/code/v6/api/kodo-api/image/watermark.html](http://developer.qiniu.com/code/v6/api/kodo-api/image/watermark.html)

白色水印

http://obupeer78.bkt.clouddn.com/clientgame-refresh-principle.png?watermark/2/text/aHR0cDovL3d3dy5jbmJsb2dzLmNvbS96aGFvcWluZ3Fpbmcv/font/5b6u6L2v6ZuF6buR/fontsize/380/fill/I0VFRUVFRQ==/dissolve/100/gravity/SouthEast/dx/6/dy/4

ghpages + hexo + 七牛示例：[https://github.com/tiann/markdown-img-upload](https://github.com/tiann/markdown-img-upload)

hexo + 七牛插件

https://www.npmjs.com/package/hexo-qiniu-images

https://www.npmjs.com/package/hexo-qiniu

https://github.com/tiann/markdown-img-upload

扩展资料

七牛融合cdn 使用指南 https://support.qiniu.com/hc/kb/article/142568/

使用七牛在 Hexo 文档中嵌入图片 http://linusling.com/2016/03/04/images-in-hexo-using-qiniu/

推荐一个稳定而强大的图床: [http://www.jianshu.com/p/5f0d5451ca01](http://www.jianshu.com/p/5f0d5451ca01)

七牛云使用心得: http://www.izhuyue.com/1528.html

## 主题灵感

此主题基于博客园的 **simplememory**: [http://www.cnblogs.com/SkinUser.aspx?SkinName=SimpleMemory](http://www.cnblogs.com/SkinUser.aspx?SkinName=SimpleMemory)

并结合ggice的**gsimple**主题进行部分修改，可惜在作者的github上已找不到此主题了： [https://github.com/GGICE](https://github.com/GGICE)

## TODO

- [x] 区别PC和Mobile浏览器，调整对应的样式 

​        *PS：博客园的模版大多未兼容移动端，此调整只是简单的修改了一些参数*

- [ ] Mobile上处理自动拉伸的size，目前是手动双击屏幕

- [ ] 有更好的替代品 mobile detect ?

- [ ] 博客园的Markdown中**代码显示行号**

- [ ] MD文章中的图片添加水印？

- [ ] 随笔档案长度修改，因为随着时间后移列表越来越长

  

## ROADMAP

- [ ] 方案一：自动备份个人博客到git，并调整博客园样式更兼容Mobile?

- [ ] 方案二：搭建新的blog，使用github pages 托管在git，搬迁cnblogs文章？

      已使用hexo +gitpages搭建：https://zhaoqingqing.github.io/

- [ ] 方案三：cnblogs + github blog 同时维护？

- [ ] 引入FontAwesome 图标？

- [ ] 重构公告栏样式？

- [ ] 添加live2d（计划中）

- [ ] 修改markdown的代码样式为黑色主题

- [ ] 页面排版修改为居中对齐两侧留空，目前使用Typora发布到博客园之后，每行最大长度会固定。



## 开源项目

- mobile-detect.min.js https://github.com/hgoebl/mobile-detect.js
  <br/>​DOC: https://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html
- cnblogs-markdown-css  https://github.com/huizhong/cnblogs-markdown-css
- 鼠标特效，11实用，12酷炫 https://github.com/shuiche-it/cnblog-mouse

