## project说明
博客园功能定制 for : [http://www.cnblogs.com/zhaoqingqing/](http://www.cnblogs.com/zhaoqingqing/)

欢迎大家关注我的博客：[http://www.cnblogs.com/zhaoqingqing/](http://www.cnblogs.com/zhaoqingqing/)
博客内容：

- unity3d引擎技术，游戏开发的知识积累
- 工作点滴 + 项目沉淀 + 自己学习 的总结
- .Net技术领域的技术知识
- 数据结构，算法，设计模式，编程领悟

## 建议浏览器
建议读者使用现代化的浏览器，比如`chrome`，`firefox`，`opera`，`ie11及以上版本`，`edge`

## cnblogs后台设置
1. 在博客园后台上传文件，包括css，js，图片资源
2. 在博客园后台的**页首Html代码**和**页脚Html代码**添加文件引用
3. 勾选**禁用模版CSS**根据实际情况来选择是否需要禁用

## 主要功能

### 自动为每一篇博客生成Nav(文章标题大纲)
通过脚本抓取页面中的h1,h2,h3标签 生成目录导航。

### 自动在每一篇博客的页尾Append签名信息
在每一篇博客的底部，生动生成一段版权说明文字。

### 给博客增加ScrollBar的快捷功能条
为博客增加 ScrollTop，ScrollBottom 的快捷功能，目前这个功能的js脚本还有bug，**待fix**

### 定制博客的导航分类，增加自定义栏目
TODO：对博客的导航栏进行分类，比如增加主题性分类

### 定制博客中Normal格式的文章样式
基于simplememory主题，定制文章页面的CSS样式，包括：h标签样式，博客栏目样式，代码样式等。

### 定制博客中Markdown文章的渲染样式
对markdown格式文章的渲染美化

## 主题灵感

此主题基于博客园的 **simplememory**: http://www.cnblogs.com/SkinUser.aspx?SkinName=SimpleMemory

并结合ggice的**gsimple**主题进行部分修改，可惜在作者的github上已找不到此主题了： https://github.com/GGICE

## TODO/Roadmap

- [x] 区别PC和Mobile浏览器，调整对应的样式 

  PS：博客园的模版大多未兼容移动端，此调整只是简单的修改了一些参数

- [ ] Mobile上处理自动拉伸的size
- [ ] 有更好的替代品 mobile detect ?



## 开源项目

- mobile-detect.min.js https://github.com/hgoebl/mobile-detect.js
  <br/>​DOC: https://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html

- cnblogs-markdown-css  https://github.com/huizhong/cnblogs-markdown-css