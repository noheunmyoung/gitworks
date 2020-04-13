function chkScTop() { //현재 스크롤 위치 저장
	oriScroll = $(window).scrollTop();
}

/* gnb navigation */
$(window).scroll(function () {
	if ($(window).scrollTop() > 10) {
		$('#wrapper').addClass('scrolled');
	}
	else {
		$('#wrapper').removeClass('scrolled');
	}
});  

/* 토글*/
$(function () {
	$('.familyBtn').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});

	$('.setBtn').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});
});

/* 모바일 메뉴 */
$(function () {
	$('.mobileMenu').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	}); 

	$('.close').on('click', function () {
		$('.gnbMenu').slideUp(300);
	});
	$('.subMenu').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	}); 
});

/* tab */
$(function () {
	$('ul.tabMenu li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.tabMenu li').removeClass('current');
		$('.tabcontent').removeClass('current'); 
		$(this).addClass('current');
		$('#' + $(this).attr('data-tab')).addClass('current');
		return false;
	})
}); 

$(function () {
	$('ul.tabMenutech li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.tabMenutech li').removeClass('current'); 
		$('.techcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + $(this).attr('data-tab')).addClass('current');
		return false;
	})
}); 

/* 메인 동영상*/
$(function () {
	$('ul.imgList li').click(function () {
		var activeTab = $(this).attr('data-tab'); 
		$('.imgBox').removeClass('current');
		$(this).addClass('current');
		$('#' + $(this).attr('data-tab')).addClass('current');
		return false;
	})
}); 

/* faq */
$(function () { 
	$(".view").click(function () { 
		$(this).toggleClass("clicked").next().slideToggle(200); 
		$(".view").not(this).removeClass("clicked").next().slideUp(200);
	}); 
});

 
 
 
 