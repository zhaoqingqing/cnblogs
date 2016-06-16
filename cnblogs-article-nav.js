/*
功能：	为博客园文章自动生成目录
原理：	抓取页面中的h1,h2,h3，生成<li>
参考：	http://www.cnblogs.com/marvin/p/ExtendWizNoteAutoNnavigation.html
		http://www.cnblogs.com/asxinyu/p/Bolg_Category_For_BlogBeauty.html
*/

<script type='text/javascript'>
var a = $(document);
a.ready(function () {
    var b = $('body'),
        c = 'cnblogs_post_body',
        d = 'sideToolbar',
        e = 'sideCatalog',
        f = 'sideCatalog-catalog',
        g = 'sideCatalogBtn',
        h = 'sideToolbar-up',
        i = '<div id="sideToolbar"style="display:none;">\<div class="sideCatalogBg" id="sideCatalog">\<div id="sideCatalog-sidebar">\<div class="sideCatalog-sidebar-top"></div>\<div class="sideCatalog-sidebar-bottom"></div>\</div>\<div id="sideCatalog-catalog">\<ul class="nav"style="width:300px;zoom:1">\</ul>\</div>\</div>\<a href="javascript:void(0);"id="sideCatalogBtn"></a>\</div>',
        j = '',
        k = 200,
        l = 0,
        m = 0,
        n = 0,
        o, p = 18,
        q = true,
        r = true,
        s = $('#' + c);
    if (s.length === 0) {
        return
    };
    b.append(i);
    o = s.find(':header');
    if (o.length > p) {
        r = false;
        var t = s.find('h2');
        var u = s.find('h3');
        if (t.length + u.length > p) {
            q = false
        }
    };
	
    o.each(function (t) {
        var u = $(this),
            v = u[0];

        var title=u.text();
        var text=u.text();

        u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
        //if (!u.attr('id')) {
        //    u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
        //};
		//特殊处理:我的博客很多都是h3开始所以做个兼容
        if (v.localName === 'h1' || v.localName === 'h2' || v.localName === 'h3') {
            l++;
            m = 0;                                  
			//超过30字，后面加....
            if(text.length>30) text=text.substr(0,30)+"...";
            //h1,h2,h3如果需要在前面自动添加序号就添加<li><span>' + l + '.&nbsp</span>)
			//j += '<li><span>' + l + '.&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
            j += '<li class="h2Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
        } else if (v.localName === 'h4') {
            m++;
            n = 0;
            if(q){
	            if(text.length>28) text=text.substr(0,28)+"...";
	            j += '<li class="h3Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
        	}
        } else if (v.localName === 'h5') {
            n++;
            if(r){
				if(text.length>26) text=text.substr(0,26)+"...";
            	j += '<li class="h4Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
        	}
        }
    });
    $('#' + f + '>ul').html(j);
    b.data('spy', 'scroll');
    b.data('target', '.sideCatalogBg');
    $('body').scrollspy({
        target: '.sideCatalogBg'
    });
    $sideCatelog = $('#' + e);
    $('#' + g).on('click', function () {
        if ($(this).hasClass('sideCatalogBtnDisable')) {
            $sideCatelog.css('visibility', 'hidden')
        } else {
            $sideCatelog.css('visibility', 'visible')
        };
        $(this).toggleClass('sideCatalogBtnDisable')
    });
    $('#' + h).on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    $sideToolbar = $('#' + d);
    a.on('scroll', function () {
        var t = a.scrollTop();
        if (t > k) {
            $sideToolbar.css('display', 'block')
        } else {
            $sideToolbar.css('display', 'none')
        }
    })
});
</script>