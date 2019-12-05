/*
* @Author: 徐嘉晖
* @Date:   2019-11-27 19:04:32
* @Last Modified by:   徐嘉晖
* @Last Modified time: 2019-11-27 19:35:53
*/
$(function(){
	$('.content .safe>.right .top a').hover(function() {
		var s=$(this).attr('text');
		$(this).text(''+s+'').css({
			backgroundColor: '#ffe300',
			backgroundImage: 'none'
		});
	}, function() {
		$(this).text('').css({
			backgroundColor: '',
			backgroundImage: ''
		});
	});
})