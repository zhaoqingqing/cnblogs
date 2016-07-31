/*
功能：	自定义博客的导航栏
使用：	修改导航栏必须放在最后，否则会影响 标签分类 以及 目录的生成。把脚本的引用放在最后或把代码贴在cnblogs后台中
bug：  启动浏览的第一次打开cnblogs，样式没有加载出来，刷新一次就正常
参考：	http://www.cnblogs.com/asxinyu/p/Bolg_Category_StyleSetting_2.html
		
*/

//<script type="text/javascript">
$(function(){
	$("a").remove("#MyLinks1_Admin");
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/">本站首页</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/537262.html">Unity3D项目开发</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/514068.html">Unity3D技巧&&经验</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/563344.html">uGUI/Unity2D</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/835738.html">NGUI/UI开发</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/555471.html">Unity3D 插件</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/835025.html">VR/AR 技术</a></li>');
	$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/529305.html">Unity3D Editor开发</a></li>');

	//$("#navList").append('<li><a id="liuyan" class="menu" rel="nofollow" href="http://www.cnblogs.com/zhaoqingqing/category/541042.html">我的随笔</a></li>');
	//TODO 加载图片
	/*
	var ponum1 = $(".postTitle").length;
	var ponum2 = $(".entrylistPosttitle").length;
	if(ponum1!=0)articleimg(ponum1);
	if(ponum2!=0)entrylistarticleimg(ponum2);
	*/
	});
//</script>