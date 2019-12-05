/*
* @Author: 徐嘉晖
* @Date:   2019-11-29 14:30:51
* @Last Modified by:   徐嘉晖
* @Last Modified time: 2019-11-29 14:31:34
*/
$(function(){
	var h1=$('.subNav').offset().top
	$(window).scroll(function(event) {
		var h=$(this).scrollTop();
		console.log(h);
		console.log(h1);
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
})
