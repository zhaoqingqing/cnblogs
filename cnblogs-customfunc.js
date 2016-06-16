﻿/*
功能：	为博客自定义功能，比如推荐此文，Scrollbar;新功能添加在此
参考：	http://www.cnblogs.com/marvin/p/ExtendWizNoteAutoNnavigation.html
		http://www.cnblogs.com/asxinyu/p/Bolg_Category_For_BlogBeauty.html
*/

jQuery.fn.wait = function (func, times, interval) {
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

function focusFunction(){
	var _targetTop = $('#comment_form_container').offset().top;//获取位置
	jQuery("html,body").animate({scrollTop:_targetTop},300);//跳转
}

function focusFollow(){
	var _targetTop = $('#profile_block').offset().top;//获取位置
	jQuery("html,body").animate({scrollTop:_targetTop},300);//跳转
}

$(document).ready(function(){
	$("<div id='toTop'style='zoom:0;'></div>").appendTo($("body"));
	$("#toTop").bind("click", function(){
		$("body,html").animate({ scrollTop:'0px'}, 200);
	});
	$("<div id='toBottom' style='zoom:0;'></div>").appendTo($("body")).bind("click", function(){
		$("body,html").animate({ scrollTop: $('#BlogPostCategory').offset().top-300 }, 150);
	});
	
	$('#cnblogs_post_body pre').find('>code').parent().css({'border':'dashed 1px #aaa','border-left':'solid 2px #6CE26C'});

	$("#cnblogs_post_body").append('<br /><pre>本文版权归作者和博客园共有，来源网址：<a href="http://www.cnblogs.com/zhaoqingqing/">http://www.cnblogs.com/zhaoqingqing/</a>. 欢迎各位转载，但是未经作者本人同意，转载文章之后<b>必须在文章页面明显位置给出作者和原文连接</b>，否则保留追究法律责任的权利。</pre>');
});

/*浮动*/
$("#div_digg").wait(function(){
	var html = '<div style="padding-bottom: 5px;">';
	if($("#p_b_follow")!=null){
		if($("#p_b_follow").text().indexOf("加关注")!=-1){
			html += '<a onclick="javascript:focusFollow();" href="javascript:void(0);">关注我</a>&nbsp;|&nbsp;';
		}
	}
	html += '<a onclick="javascript:focusFunction();" href="javascript:void(0);">快速评论</a>';
	html += '</div>';

	$(html).appendTo('#div_digg');
});

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