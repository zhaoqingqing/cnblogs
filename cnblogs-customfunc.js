/**
功能：	为博客自定义功能，比如推荐此文，Scrollbar;
TODO：  新的自定义功能写在此文件
参考：	https://www.cnblogs.com/marvin/p/ExtendWizNoteAutoNnavigation.html
		https://www.cnblogs.com/asxinyu/p/Bolg_Category_For_BlogBeauty.html
        文章顶部添加版权信息：https://www.cnblogs.com/gzdaijie/p/5187171.html
        TODO markdown代码显示行号：https://blog.bluerain.io/p/markdown-code-block-line-number.html
*/

jQuery.fn.wait = function(func, times, interval) {
    var _times = times || -1,
        //100次
        _interval = interval || 20,
        //20毫秒每次 
        _self = this,
        _selector = this.selector,
        //选择器
        _iIntervalID; //定时器id
    if (this.length) { //如果已经获取到了，就直接执行函数
        func && func.call(this);
    } else {
        _iIntervalID = setInterval(function query() {
            if (!_times) { //是0就退出
                clearInterval(_iIntervalID);
            }
            _times <= 0 || _times--; //如果是正数就 --
            _self = $(_selector); //再次选择
            if (_self.length) { //判断是否取到
                func && func.call(_self);
                clearInterval(_iIntervalID);
            }
        }, _interval);
    }
    return this;
}

function focusFunction() {
    var _targetTop = $('#comment_form_container').offset().top; //获取位置
    jQuery("html,body").animate({
        scrollTop: _targetTop
    }, 300); //跳转
}

function focusFollow() {
    var _targetTop = $('#profile_block').offset().top; //获取位置
    jQuery("html,body").animate({
        scrollTop: _targetTop
    }, 300); //跳转
}

//TODO 设置子级div的宽度，最佳解决方案：让它撑满父DIV
var calcPencent = '110%';
function getContentWidth(compareWidth){
    //在1920的分辨率中，foxmail订阅默认大小<1440
    var screePix = new Array(800,1024,1280,1440,1600,1920,2560);
    var screePencent = new Array(1.28,1.26,1.24,1.22,1.2,1.18,1.1);
    var isGetVal = false;
    $.each(screePix, function(idx, obj) {
        //console.log(idx,parseInt(obj),parseInt(compareWidth));
        if(parseInt(obj) >= parseInt(compareWidth) && !isGetVal){
            var calcWidth = parseInt(screePencent[idx] * compareWidth);
            var tmpPencent = (screePencent[idx] * 100);
            calcPencent = (tmpPencent.toString()+"%");
            console.log('arrary:',idx,obj,compareWidth,calcPencent,calcWidth);
            isGetVal = true;
            return calcPencent;
        }
    });
}

function consoleInfo(){
try {
    if (window.console && window.console.log) {
        console.log("\n")
        console.log("一位新人，要经历怎样的成长，才能站在技术之巅？\n想探寻这里面蕴含的秘密？赶快把我的博客加入收藏，添加到书签，你，可以影响世界。\n");
        console.log("如果你想和我取得联系，你可以发送邮件至 %c 569032731@qq.com", "color:blue");
        console.log("IM联系方式： %c QQ/Wechat: 569032731（ 请附上验证信息）", "color:blue");
        console.log("\n")
        console.log("博客中有关的示例代码：%c https://github.com/zhaoqingqing/blog_samplecode", "color:green")
        console.log("博客的主题的源码托管：%c https://github.com/zhaoqingqing/cnblogs", "color:green")
        console.log("\n")
    }
    } catch(e) {}
}

//程序执行入口，当文档加载完成
$(document).ready(function() {
    $(window).resize(function(){
        /*if (document.getElementById("cnblogs_post_body")){
            var maxWidth = $(document.body).width();
            console.log("window.resize:"+$('#main').width()+",bodyWidth:"+maxWidth);
            $('#mainContent').css('width',maxWidth);
        }*/
    });
var md = new MobileDetect(window.navigator.userAgent);
 if (md.mobile()== false || md.mobile() == null){
        consoleInfo();
        $("<div id='toTop'  title='回顶部'></div>").appendTo($("body"));
        $("#toTop").bind("click", function() {
            $("body,html").animate({
                scrollTop: '0px'
            }, 200);
        });
        $("<div id='toBottom' title='到底部'></div>").appendTo($("body"));
        $("#toBottom").bind("click", function() {
            //文章页下拉到评论区，其它页面拉到顶部
            if (document.getElementById("blog_post_info_block")) {
                $("body,html").animate({
                    scrollTop: $('#blog_post_info_block').offset().top
                }, 150);
                console.log("page is article");
            } else {
                $("body,html").animate({
                    scrollTop: $('#footer').offset().top
                }, 150);
                console.log("page not article");
            }
        });
    }
    //版权信息
    var signatureHtml ="";
    signatureHtml +=  '作者：赵青青 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 出处：<a href="https://www.cnblogs.com/zhaoqingqing/">https://www.cnblogs.com/zhaoqingqing/</a><br />';
    signatureHtml += '关于我：乐于学习未知技术和知识，擅长Unity3D，游戏开发，.NET等领域。<br />';
    signatureHtml += '本文版权归作者和博客园共有欢迎转载，转载之后请务必在文章明显位置标出原文链接和作者，谢谢。<br />';
    signatureHtml += '如果本文对您有帮助，请点击<a id="recommendme",href="javascript:void(0);">【推荐】</a>您的赞赏将鼓励我继续创作！想跟我一起进步么？那就<a id="followme" href="javascript:void(0);">【关注】</a>我吧。';
    signatureHtml += '<div id="signatureTips"></div>';
    //BUG 在360极速浏览器8.7(chrome50)下，偶现签名栏无法显示
    if ($("#cnblogs_post_body").next().attr("id") == "MySignature") {
        $("#cnblogs_post_body #MySignature").hide();
        $("#cnblogs_post_body").next().show().html(signatureHtml);
    }
    else {
        $("#cnblogs_post_body #MySignature").show().html(signatureHtml);
    }
    //fix：把click函数写在Html代码里在渲染之后莫名多了个'='
    $('#recommendme').on('click', function() {
        votePost(cb_entryId,"Digg")
        // console.log("recommend success");
        $("#signatureTips").html("感谢您的推荐！");
    });
    $('#followme').on('click', function() {
        cnblogs.UserManager.FollowBlogger("a7e65336-5c2c-e111-b988-842b2b196315");
        // console.log("follow success");
        $("#signatureTips").html("谢谢您的关注！");
    });
    setCodeRow();
    setCopyright();
});


/*浮动工具条*/
$("#div_digg").wait(function() {
    var html = '<div style="padding-bottom: 5px;">';
    if ($("#p_b_follow") != null) {
        if ($("#p_b_follow").text().indexOf("加关注") != -1) {
            html += '<a onclick="javascript:focusFollow();" href="javascript:void(0);">关注我</a>&nbsp;|&nbsp;';
        }
    }
    html += '<a onclick="javascript:focusFunction();" href="javascript:void(0);">快速评论</a>';
    html += '</div>';

    $(html).appendTo('#div_digg');
    //console.log('wait digg');
});

$("#mainContent").wait(function() {
   /* //列表页:非全屏 显示侧边内容; 正文页:全屏隐藏侧边内容
   if (document.getElementById("cnblogs_post_body")){
        //博客内容页面全屏  
        //NOTE 在IE下不用设置width，隐藏同级div，它就是全屏 v~v，but chrome并不是!
        $('#sideBar').css('width','0px');
        $('#sideBar').css('display','none');

        var maxWidth = $(document.body).width();
        console.log("#main.Width:"+$('#main').width()+",bodyWidth:"+maxWidth);
        var contentWidth = $('#main').width() - 20;
        getContentWidth(maxWidth);    
        $('#mainContent').css('width',calcPencent);
        //$('#mainContent').css('position','relative');
        console.log('this page fullscreen->', calcPencent.toString(),$('#mainContent').width()+"px");
   }else{
        //常显示右侧div
        $('#sideBar').css('display','block');
        $('#mainContent').css('width','100%');
        console.log('this page normalsize');
   }*/
   $('#sideBar').css('display','block');
   $('#mainContent').css('width','100%');
});

//===================参考：https://www.cnblogs.com/gzdaijie/p/5187171.html
function setCopyright() {
    //设置版权信息，转载出处自动根据页面url生成，不需要加线(hr)
    var info_str = '<p>作者：<a target="_blank">@qingqing-zhao</a><br>'+
        '本文为作者原创，转载请注明出处：<a class="uri"></a></p>',
        info = $(info_str),
        info_a = info.find("a"),
        url = window.location.href;
    $(info_a[0]).attr("href","https://www.cnblogs.com/zhaoqingqing/");
    $(info_a[1]).attr("href",url).text(url);
    $("#cnblogs_post_body").prepend(info);
}
function setCodeRow(){
    // 代码行号显示
    var pre = $("pre.hljs"); //选中需要更改的部分
    if(pre && pre.length){
        pre.each(function() {
            var item = $(this);
            var lang = item.attr("class").split(" ")[1]; //判断高亮的语言
            item.html(item.html().replace(/<[^>]+>/g,"")); //将<pre>标签中的html标签去掉
            item.removeClass().addClass("brush: " + lang +";"); //根据语言添加笔刷
            if(SyntaxHighlighter!=null) {
                SyntaxHighlighter.all();
            }else{
                console.log("SyntaxHighlighter 插件找不到")
            }
        })
    }
}
//并不是所有的链接都需要在新窗口打开，比如目录锚点反而有影响
function setAtarget() {
    // 博客内的链接在新窗口打开
    $("#cnblogs_post_body a").each(function(){
        this.target = "_blank";
    })
}
//===================参考end===================
/** 
 * js截取字符串，中英文都能用 
 * 如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。  
 * @param str：需要截取的字符串 
 * @param len: 需要截取的长度 
 */
function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length < len) {
        return str;
    }
}