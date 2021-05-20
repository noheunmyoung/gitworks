/* ----- 모바일 메뉴----- */  
$(function () {
	$('.btn-menu').click(function () {
		$('.mob-wrap').animate({ left: '0' }, 300);   
		$('body').addClass("ovf"); 
	});	
	$('.lnb_wrap > ul > li > a').on('click', function () {
		$(this).parent().addClass('selected'); 
		$(this).parent().siblings().removeClass('selected');
	});
	
	$('.menu-close').click(function () {
		$('.mob-wrap').animate({ left: '-100%' }, 300);  
		$('body').removeClass("ovf");
	});
}); 