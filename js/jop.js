/*
* @Author: 徐嘉晖
* @Date:   2019-11-28 19:41:53
* @Last Modified by:   徐嘉晖
* @Last Modified time: 2019-11-29 10:00:22
*/
$(function(){
	var h=$('.content-left').offset().top;
	var c=$('.content').height();
	var l=$('.content-left').height();
	console.log(c-h)
	$(window).scroll(function(event) {
		var w=$(window).scrollTop();
		if(w>=h){
			$('.content-left').css({
				position: 'fixed',
				top: '0'
			});
		}
		if(w>=c-l+h){
			$('.content-left').css({
				position:'absolute',
				top: c-l+'px'
			});
		}
		else if(w<=h){
			$('.content-left').css({
				position: 'absolute',
				top: '40px'
			});
		}
	});
	
	
	
})