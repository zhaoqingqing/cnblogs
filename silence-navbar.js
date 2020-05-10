<!--
* @file cnblogs.silence-navbar
* Created by qingqing.zhao(569032731@qq.com)
* DateTime: 2020/5/9 22:39
* Desc：silence主题导航栏脚本
用法：粘贴以下代码到 - 设置 - 博客侧边栏公告
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
                        title: 'Unity3D项目笔记',
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
                title: '更多内容',
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
                        title: '我的随笔',
                        url: 'https://www.cnblogs.com/zhaoqingqing/category/541042.html',
                    },
                    {
                        title: '关于我',
                        url: 'https://zhaoqingqing.github.io/about/',
                    },
                    {
                        title: "文章归档",
                        url:"https://www.cnblogs.com/zhaoqingqing/p",
                    },
                ]
            },
            {
                title: '后台管理',
                chilren: [
                    {
                        title: '博客管理',
                        url: 'https://i.cnblogs.com/settings',
                    },
                    {
                        title: '新建文章',
                        url: 'https://i.cnblogs.com/posts/edit',
                    },
                    {
                        title: '友情链接',
                        url: 'https://www.cnblogs.com/zhaoqingqing/p/10277503.html',
                    },
                    {
                        title:"我的动态",
                        url:"https://home.cnblogs.com/u/zhaoqingqing/",
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
            remark: "我是一个乐于分享和学习未知知识，并勤于写作的技术人，擅长游戏开发，客户端技术，微软系技术等领域。" +
                "<br/>Believe Code Change The World , Just Do IT. Keep It Simple, Stupid Will Make Me Free."
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

    $(function()
    {
	    $("a").remove("#blog_nav_admin");
    })
</script>