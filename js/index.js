/*
* @Author: 徐嘉晖
* @Date:   2019-11-27 15:39:48
* @Last Modified by:   徐嘉晖
* @Last Modified time: 2019-12-02 16:44:27
*/
$(function(){
	//banner轮播
	var n=1;
	$('.banner .top-banner .left').click(function(event) {
		n++;
		if(n>6){
			$('.banner .top-banner ul').css('margin-left','-1380px');
			n=2;
		}
		$('.banner .top-banner ul').stop().animate({'margin-left':-n*1380+'px'}, 500);
	});
	$('.banner .top-banner .right').click(function(event) {
		n--;
		if(n<0){
			$('.banner .top-banner ul').css('margin-left','-6900px');
			n=4;
		}
		$('.banner .top-banner ul').stop().animate({'margin-left':-n*1380+'px'}, 500);
	});
	var timer;
	function banner(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			if(n>6){
				$('.banner .top-banner ul').css('margin-left','-1380px');
				n=2;
			}
			$('.banner .top-banner ul').stop().animate({'margin-left':-n*1380+'px'}, 500);
		},2000)
	}
	banner();
	$('.banner .top-banner').hover(function() {
		clearInterval(timer)
	}, function() {
		banner();
	});


	//topNav
	$('.topNav ul li').hover(function() {
		$(this).children('.navhide').show();
	}, function() {
		$(this).children('.navhide').hide();
	});



	//subNav定位
	var h1=$('.subNav').offset().top
	$(window).scroll(function(event) {
		var h=$(this).scrollTop();
		// console.log(h);
		// console.log(h1);
		if (h>=h1) {
			$('.subNav').css({
				position: 'fixed',
				top: '0'
			});
		}
		else{
			$('.subNav').css('position', '');
		}
	});


	//advbanner轮播
	var m=0;
	$('.content-footer .right').click(function(event) {
			m++;
			if(m>1){
				m=0;
			}
			$('.content-footer .advbanner ul').css('margin-left', -m*1400+'px');
	});



	
})


