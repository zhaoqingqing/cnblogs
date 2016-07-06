/*
功能：	自动为博客园文章生成目录
原理：	抓取页面中的h1,h2,h3，生成<li>
参考：	http://www.cnblogs.com/marvin/p/ExtendWizNoteAutoNnavigation.html
	  http://www.cnblogs.com/asxinyu/p/Bolg_Category_For_BlogBeauty.html
*/

var a = $(document);
a.ready(function() {
    var b = $('body'),
        cnblogs_post_body = 'cnblogs_post_body',
        sideNavBody = 'sideToolbar',
        sideCatalog = 'sideCatalog',
        f = 'sideCatalog-catalog',
        sideCatalogCtrl = 'sideCatalogBtn',
        h = 'sideToolbar-up',
        //默认显示文章目录
        navcontaint = '<div id="sideToolbar">\<div class="sideCatalogBg"id="sideCatalog">\<div id="sideCatalog-sidebar">\<div class="sideCatalog-sidebar-top"></div>\<div class="sideCatalog-sidebar-bottom"></div>\</div>\<div id="sideCatalog-catalog">\<ul class="nav"style="width:300px;zoom:1">\</ul>\</div>\</div>\</div>\<a href="javascript:void(0);" title="[隐藏/显示]目录" id="sideCatalogBtn" class="sideCatalogBtnDisable"></a>',
        j = '',
        k = 200,
        l = 0,
        m = 0,
        n = 0,
        o, p = 18,
        q = true,
        r = true,
        cnblogs_post_body_flag = $('#' + cnblogs_post_body);
    //只有文章页面才会生成    
    if (cnblogs_post_body_flag.length === 0) {
        return
    };
    b.append(navcontaint);
    o = cnblogs_post_body_flag.find(':header');
    if (o.length > p) {
        r = false;
        var t = cnblogs_post_body_flag.find('h2');
        var u = cnblogs_post_body_flag.find('h3');
        if (t.length + u.length > p) {
            //q = false //如果h2和h3太多，依然要生成h3
        }
    };

    o.each(function(t) {
        var u = $(this),
            v = u[0];

        var title = u.text();
        var text = u.text();

        u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
            //if (!u.attr('id')) {
            //    u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
            //};

        /*文章目录节点：
		    标题1/标题2: <li>
			    标题3: h2Offset
                    标题4: h3Offset
		*/
        if (v.localName === 'h1' || v.localName === 'h2') {
            l++;
            m = 0;
            //超过30字，后面加....
            if (text.length > 30) text = text.substr(0, 30) + "...";
            //h1,h2,h3 如果需要在前面自动生成序号就添加<li><span>' + l + '.&nbsp</span>)
            //j += '<li><span>' + l + '.&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
            j += '<li><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
        } else if (v.localName === 'h3') {
            m++;
            n = 0;
            if (q) {
                if (text.length > 28) text = text.substr(0, 28) + "...";
                j += '<li class="h2Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
            }
        } else if (v.localName === 'h4') {
            n++;
            if (r) {
                if (text.length > 26) text = text.substr(0, 26) + "...";
                j += '<li class="h3Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
            }
        }
    });
    $('#' + f + '>ul').html(j);
    b.data('spy', 'scroll');
    b.data('target', '.sideCatalogBg');
    $('body').scrollspy({
        target: '.sideCatalogBg'
    });
    $sideCatelog = $('#' + sideCatalog);
    $('#' + sideCatalogCtrl).on('click', function() {
        if ($(this).hasClass('sideCatalogBtnDisable')) {
            $("#"+sideNavBody).css('display', 'none')
            $('#' + sideCatalogCtrl).title = "隐藏目录";
        } else {
            $("#"+sideNavBody).css('display', 'block')
            $('#' + sideCatalogCtrl).title = "显示目录";
        };
        $(this).toggleClass('sideCatalogBtnDisable')
    });
    $('#' + h).on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    $sideToolbar = $('#' + sideNavBody);
    a.on('scroll', function() {
        var t = a.scrollTop();
        //我要一直显示文章目录
        /* if (t > k) {
            $sideToolbar.css('display', 'block')
        } else {
            $sideToolbar.css('display', 'none')
        } */
    })
});