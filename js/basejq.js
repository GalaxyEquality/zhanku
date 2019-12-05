/*
* @Author: 徐嘉晖
* @Date:   2019-11-25 14:49:52
* @Last Modified by:   徐嘉晖
* @Last Modified time: 2019-12-02 16:43:45
*/
$(function(){
	//nav鼠标事件
	$('.nav ul li').hover(function() {
		$(this).children('.bar').show();
	}, function() {
		$(this).children('.bar').hide();
	});

	//搜索框显示隐藏
	$('.glyphicon-search').click(function(event) {
		$('.header .nav ul').fadeToggle(500);
		$('.header .header-search').fadeToggle(500);
		return false;
	});
	$('.icon-cross-fill').click(function(event) {
		$('.header .header-search').fadeOut(500);
		$('.header .nav ul').fadeIn(500);
		return false;
	});
	$(document).click(function(event) {
		var popup=$('.header .header-search')
		if(!popup.is(event.target) && popup.has(event.target).length == 0){
			$('.header .header-search').fadeOut(500);
			$('.header .nav ul').fadeIn(500);
		}
	});

	//登录模态框
	$('.glyphicon-cloud-download').click(function(event) {
		$('.login-box').show();
	});
	$('.login-box .close-box').click(function(event) {
		$('.login-box').hide();
	});

	// 测导航
	var f=$('.footerbase').offset().top;
	$(window).scroll(function(event) {
		var d=document.documentElement.clientHeight;
		var h=$(this).scrollTop();
		if(h>=f-d-60){
			$('.content .slider').css('bottom', $('.footerbase').innerHeight()-($(document).height() - $(document).scrollTop() - document.documentElement.clientHeight - 30)+'px');
		}else{
			$('.content .slider').css('bottom', '30px');
		}
	});
	$(window).scroll(function(event) {
		var h=$(this).scrollTop();
		if(h>$('.content').height()*0.5){
			$('.content .slider').show();
		}else{
			$('.content .slider').hide();
		}

	});
	$('.content .slider').click(function(event) {
		$('body,html').animate({'scrollTop':'0px'}, 500)
	});






	






	
})