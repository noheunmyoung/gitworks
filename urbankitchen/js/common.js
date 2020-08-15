$(document).ready(function () { 
	$('.btn-menu').click(function () { 
		$('.side-menu').animate({ left: '0' }, 300); 
	});

	$('.btn-close').click(function () { 
		$('.side-menu').animate({ left: '-212px' }, 300); 
	}); 
});