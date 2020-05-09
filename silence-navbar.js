/*
* @file cnblogs.silence-navbar
* Created by qingqing.zhao(569032731@qq.com)
* DateTime: 2020/5/9 22:39
* Desc：silence主题导航栏脚本
*/
<!-- 用法：粘贴以下代码到 - 设置 - 博客侧边栏公告
和原主题一样，生成的导航栏在网页dom节点：home - header - navigator - navList(ul) - li
-->
<script type="text/javascript">
    $.silence({
        avatar: 'https://images.cnblogs.com/cnblogs_com/zhaoqingqing/491952/o_avatar_qingqing.png',
        favicon: '',
        navigation: [
            {
                title: '编程语言',
                chilren: [
                    {
                        title: 'C#语言',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/527577.html',
                    },
                    {
                        title: 'Java语言',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/1278231.html',
                    },
                    {
                        title: 'C和C++',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/563344.html',
                    },
                    {
                        title: '汇编语言',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/835738.html',
                    },
                    {
                        title: 'Lua脚本语言',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/750410.html',
                    },
                ]
            },
            {
                title: '游戏编程',
                chilren: [
                    {
                        title: 'Unity3D项目开发',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/537262.html',
                    },
                    {
                        title: 'Unity3D经验技巧',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/514068.html',
                    },
                    {
                        title: 'uGUI/Unity2D',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/563344.html',
                    },
                    {
                        title: 'NGUI/UI开发',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/835738.html',
                    },
                    {
                        title: 'Unity3D 插件',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/555471.html',
                    },
                    {
                        title: 'VR/AR 技术',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/835025.html',
                    },
                    {
                        title: 'Unity3D Editor开发',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/529305.html',
                    },
                    {
                        title: 'Cocos2d-x',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/554286.html',
                    },
                ]
            },
            {
                title: '其它文章',
                chilren: [
                    {
                        title: '数据结构与算法',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/610625.html',
                    },
                    {
                        title: '图形学',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/623959.html',
                    },
                    {
                        title: '其它分类',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/541042.html',
                    },
                ]
            },
            {
                title: '更多内容',
                chilren: [
                    {
                        title: '文章标签',
                        url: 'https://www.cnblogs.com/zhaoqingqing/tag/',
                    },
                    {
                        title: '文章归档',
                        url: 'https://www.cnblogs.com/zhaoqingqing/p',
                    },
                    {
                        title: '关于我',
                        url: 'https://zhaoqingqing.github.io/about/',
                    },
                ]
            },
        ],
        catalog: {
            enable: true,
            move: true,
            index: true,
            level1: 'h2',
            level2: 'h3',
            level3: 'h4',
        },
        signature: {
            enable: true,
            license: '署名-非商业性使用-相同方式共享 4.0 国际',
            link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
            remark: '关于我：乐于学习未知技术和知识，擅长Unity3D，游戏开发，.NET等领域。'
        },
        sponsor: {
            enable: false,
            paypal: null,
            wechat: '',
            alipay: ''
        },
        github: {
            enable: true,
            link: 'https://github.com/zhaoqingqing',
            target: '_self'
        }
    })
</script>