$(function () {
	$('ul.left_tab li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.left_tab li').removeClass('current');
		$('.lnb').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
		return false;
	})
});