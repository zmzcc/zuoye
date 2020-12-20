
$(function(){
	$('.menuson li').click(function(){
		$('.menuson li.active').removeClass('active');
		$(this).addClass('active');
	})
	$('.title').click(function(){
		var $ul=$(this).next('ul');
		$('dd').find('ul').slideUp();
		if($ul.is(':visible')){
			$(this).next('ul').slideUP();
		}else{
			$(this).next('ul').slideDown();
		}
	})
})