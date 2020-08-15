/* MENU ㅜㅡ */
$(function () {
	$('.btn-menu').click(function () { 
		$('.side-menu').animate({ left: '0' }, 300); 
	});

	$('.btn-close').click(function () { 
		$('.side-menu').animate({ left: '-212px' }, 300); 
	}); 
});

/* TAB */
$(function () {
	$('ul.tab-menu li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.tab-menu li').removeClass('current');
		$('.schedulewrap').removeClass('current');
		$(this).addClass('current');
		$('#' + $(this).attr('data-tab')).addClass('current');
		return false;
	})
}); 