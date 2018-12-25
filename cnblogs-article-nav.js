/*
功能：	自动为博客园文章生成目录
原理：	抓取页面中的h1,h2,h3，生成<li>
参考：	https://www.cnblogs.com/marvin/p/ExtendWizNoteAutoNnavigation.html
	  https://www.cnblogs.com/asxinyu/p/Bolg_Category_For_BlogBeauty.html
*/

//cnblogs生成右侧目录 start
$(document).ready(function() {
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
   
    //mobile detect 如果是移动平台，不显示侧边栏
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
        
        //$('#mainContent').css('style','1');
        //  console.log("you platform is mobile");
         return;
    }else{
        //console.log("you platform not mobile ");
    }

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
    //$sideToolbar = $('#' + sideNavBody);
    //a.on('scroll', function() {
      //  var t = a.scrollTop();
        //我要一直显示文章目录
        /* if (t > k) {
            $sideToolbar.css('display', 'block')
        } else {
            $sideToolbar.css('display', 'none')
        } */
   // })
});
//cnblogs生成右侧目录 end

//在文章正文顶部生成TOC start
$(document).ready(function() {
    buildTocTable();
    });

function buildTocTable() {
    var hs = $('#cnblogs_post_body').find('h1,h2,h3,h4,h5,h6');
    if (hs.length < 2)
        return;
    var s = '';
    s += '<div style="clear:both"></div>';
    s += '<div class="cnblogs_toc">';
    s += '<p style="text-align:left;margin:0;"><span style="float:left; text-indent:0;"><a id="TocTitle" href="#" onclick="javascript:return OnTitleShowToc(this);" title="系统根据文章中H1到H6标签自动生成文章目录">文章目录[点击展开](?)</a></span><a id="TocTitleSymbol" href="#" onclick="javascript:return OnTitleSymbolShowToc(this);" title="展开">[+]</a></p>';
    //.cnblogs_toc ol 控制默认展开或关闭
    s += '<ol style="display:none;margin-left:14px;padding-left:14px;line-height:160%;">';
    var old_h = 0, ol_cnt = 0;
    for (var i = 0; i < hs.length; i++) {
        var h = parseInt(hs[i].tagName.substr(1), 10);
        if (!old_h)
            old_h = h;
        if (h > old_h) {
            s += '<ol>';
            ol_cnt++;
        }
        else if (h < old_h && ol_cnt > 0) {
            s += '</ol>';
            ol_cnt--;
        }
        if (h == 1) {
            while (ol_cnt > 0) {
                s += '</ol>';
                ol_cnt--;
            }
        }
        old_h = h;
        var tit = hs.eq(i).text().replace(/^\d+[.、\s]+/g, '');
        tit = tit.replace(/[^a-zA-Z0-9_\-\s\u4e00-\u9fa5]+/g, '');

        if (tit.length < 100) {
            s += '<li><a href="#t' + i + '">' + tit + '</a></li>';
            hs.eq(i).html('<a name="t' + i + '"></a>' + hs.eq(i).html());
        }
    }
    while (ol_cnt > 0) {
        s += '</ol>';
        ol_cnt--;
    }
    s += '</ol></div>';
    s += '<div style="clear:both"><br></div>';
    $(s).insertBefore($('#cnblogs_post_body'));
    //note 若toc过长，影响阅读体验，默认收起
    //mobile detect
    // var md = new MobileDetect(window.navigator.userAgent);
    // if (md.mobile()) {
    //     $('.cnblogs_toc ol').css('display','none');
    // }else{
    //    $('.cnblogs_toc ol').css('display','block');
    // }
}

var isOpendToc = false;

function UpdateTocTitle(){
    if(isOpendToc){
        $("#TocTitleSymbol").attr('title', '收起').html('[-]');
        $("#TocTitle").html('文章目录[点击收起](?)');
    }else{
        $("#TocTitleSymbol").attr('title', '展开').html('[+]');
        $("#TocTitle").html('文章目录[点击展开](?)');
    }
}

function OnTitleShowToc(e) {
    if (!isOpendToc) {
        $(e).parent().parent().next().show();
        isOpendToc = true;
    } else {
        $(e).parent().parent().next().hide();
        isOpendToc = false;
    }
    UpdateTocTitle();
    e.blur();
    return false;
}

function OnTitleSymbolShowToc(e) {
    if (!isOpendToc) {
        $("#TocTitleSymbol").parent().next().show();
        isOpendToc = true;
    } else {
        $("#TocTitleSymbol").parent().next().hide();
        isOpendToc = false;
    }
    UpdateTocTitle();
    e.blur();
    return false;
}
// 在文章正文顶部生成TOC end