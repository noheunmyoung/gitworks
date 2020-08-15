$(document).ready(function () {
	gnbAreaInit(); // gnb 스크롤체크
	gnb(); //gnb navigation
	allMenu(); //all menu
	autoComplete(); //통합검색
	tab(); //layer tab
	tooltip(); //tooltip
	accordian(); //accordian
	closeWin(); //새창 닫기
	//addInterest(); //관심상품 추가
	//datepicker(); //datepicker
	Datecalendar(); //달력
	toggle();//토글
	goTop(); //상단버튼
	topBannerH();
	//allPro() //전체상품
});
$(window).scroll(function () {
	gnbAreaInit(); // gnb 스크롤체크
	goTop(); // 상단 버튼
});
window.onload = function () {
	topBanner();
}

function chkScTop() { //현재 스크롤 위치 저장
	oriScroll = $(window).scrollTop();
}

/* top btn */
function goTop() {
	if ($(window).scrollTop() > 100) {
		$('.go-top').fadeIn(300);
	} else {
		$('.go-top').fadeOut(300);
	}
	$('.go-top').click(function () {
		$('html,body').stop().animate({ 'scrollTop': '0' }, 300);
		return false;
	});
	var dH = $('#wrapper').height();
	var wH = $(window).height();
	var iH = $(window).scrollTop();
	var mH = (dH - 191);
	iH = iH + wH; //스크콜 bottom
	if (iH >= mH) {
		$('.go-top').css({ 'position': 'absolute', 'bottom': '291px' })
	} else {
		$('.go-top').css({ 'position': 'fixed', 'bottom': '100px' })
	}
}

/* gnb navigation */
function gnbAreaInit() {
	//스크롤 체크
	if ($(window).scrollTop() > 100) {
		$('#contents-wrap').addClass('scrolled');
	}
	else {
		//if (!$('body').hasClass('modal-open')) {
		$('#contents-wrap').removeClass('scrolled');
		//}
	}

}

//탑배너
function topBanner() {

	topHeight = $('.top-banner').height();
	$('#header-area').css({ 'margin-top': topHeight });
}

function topBannerH() {
	$('.conts-area .close').click(function () {
		var $thisBannerH = $(this).parent('.conts-area').innerHeight();
		var bannerTopH = $('.top-banner').height();
		bannerTopH = (bannerTopH - $thisBannerH - 1);
		$(this).parent('.conts-area').slideUp();
		$('#header-area').animate({ 'margin-top': bannerTopH });
	});
}

function gnb() {
	var selector = $('.menu-list > li > a');
	var selectorOut = $('#gnb');
	var selectorLast = $('#gnb .menu-list li').last().children('a');
	selector.on('mouseenter focus', function () {
		$(this).parent().addClass('active');
		$(this).parent().siblings('li').removeClass('active');
	});
	selectorOut.on('mouseleave', function () {
		$(this).find('.menu-list').children('li').removeClass('active');
	});
	selectorLast.on('blur', function () {
		$(this).closest('#gnb').find('.menu-list').children('li').removeClass('active');
	});

}

/* all menu */
function allMenu() {
	var selector = $('#header-area .menu-assort .menu');
	selector.on('click', function () {
		$('#all-menu').addClass('active').slideDown('350').attr('aria-hidden', false);
	});

	var selClose = $('#all-menu .close');
	selClose.on('click', function () {
		$('#all-menu').slideUp('350').attr('aria-hidden', true);
		setTimeout(function () {
			$('#all-menu').removeClass('active');
		}, 350);
		selector.focus();
	});
}

/* all product */
function allPro() {
	var selector = $('.all_product');
	selector.on('click', function (e) {
		$('#all_product').addClass("in").attr("aria-hidden", "false");
		modalDimOpen('#all_product');
		$('#all-menu').hide().attr('aria-hidden', true).removeClass('active');
		$('.autocomplete-wrap').hide().attr('aria-hidden', true).removeClass('active');

		e.preventDefault;
	});
}

/* 통합검색 */
function autoComplete() {
	var selector = $('#header-area .menu-assort .sch');
	selector.on('click', function () {
		$('.autocomplete-wrap').addClass('active').slideDown('350').attr('aria-hidden', false);
	});

	var selClose = $('.autocomplete-wrap .close');
	selClose.on('click', function () {
		$('.autocomplete-wrap').slideUp('350').attr('aria-hidden', true);
		setTimeout(function () {
			$('.autocomplete-wrap').removeClass('active');
		}, 350);
		selector.focus();
	});
 
}


/* tab */
function tab() {
	$('.tab.inner [role="tab"]').on('click', function () {
		//e.preventDefault();
		// 클릭한 tab 요소에 aria-selected=true로 지정하고
		// 형제요소중에 자신 tab 이외의 나머지 tab 요소들을
		// aria-selected=false로 지정한다.
		$(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
		$(this).addClass('active').siblings().removeClass('active');
		var selectedId = '#' + $(this).attr('aria-controls');
		// 자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
		$(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
	}).on('keydown', function (e) {
		if (e.which == 13) {
			$(this).trigger('click');
			//return false;
		}
	});
}

/* tooltip */
function tooltip() {
	var selector = $('.tooltip-area');
	selector.each(function () {
		var trigger = $(this).find('.btn-tooltip');
		var closeBtn = $(this).find('.close-tooltip');

		trigger.on('click', function () {
			$('.tooltip-conts').removeClass('active').attr('aria-hidden', true);
			var target = $('#' + $(this).attr('aria-describedby'));
			$(this).attr('tabindex', '-1');
			target.addClass('active').attr('aria-hidden', false);
			setTimeout(function () {
				target.focus();
			}, 100);

		});



		closeBtn.on('click', function () {
			$(this).closest('.tooltip-conts').removeClass('active').attr('aria-hidden', true);
			$(this).closest('.tooltip-area').find('.btn-tooltip').focus().attr('tabindex', '0');
		});
	});
}

/* accordian */
function accordian() {
	var selector = $('.accordian > dl');
	selector.each(function () {
		var trigger = $(this).children('dt').children('button');
		trigger.on('click', function () {
			//initialize
			var selDl = $(this).closest('dl');
			if (!$(this).closest('dt').hasClass('active')) {
				selDl.children('dt').removeClass('active');
				selDl.children('dd').slideUp(350).attr('aria-expanded', 'false');
			}

			var target = $('#' + $(this).attr('aria-controls'));
			$(this).closest('dt').toggleClass('active');
			target.slideToggle(350);
			target.attr('aria-expanded', function (i, attr) {
				return attr == 'false' ? 'true' : 'false'
			});

			//dt 펼쳐질 경우 해당 위치로 스크롤 됨
			if ($(this).closest('dt').hasClass('active')) {
				var _this = $(this).closest('dt');
				setTimeout(function () {
					$('html,body').animate({
						scrollTop: _this.offset().top - 60
					}, 50);
				}, 360);
			}
		});
	});
}

/* 관심상품 추가 */
function addInterest() {
	var selector = $('.btn-interest');
	selector.on('click', function () {
		$(this).toggleClass('add');
		$(this).find('i').text(function (i, text) {
			return text == '삭제하기' ? '추가하기' : '삭제하기'
		});
	});
}
/* Datecalendar */
function Datecalendar() {
	$('.datepicker').focus(function () {
		var position = $(this).parent('.date')
		$(this).mobiscroll().date({
			theme: 'mobiscroll',
			mode: 'scroller',
			context: position,
			display: 'd',
			dateFormat: 'yy.mm.dd',
			dateOrder: 'yymmdd',
			mousewheel: false,
			buttons: [
				{
					text: '확인',
					handler: 'set'
				},
				{
					text: '취소',
					handler: 'cancel'
				}
			]
		});
	});
}

 

/* layer popup */
$(document).ready(function () {
	$(document).on("click", ".open-modal", function (e) { //모달 호출
		var id = '#' + $(this).attr("data-target");

		//헤더 index값 조절
		$(".top-banner , #header-area").css({ "z-index": 18 });
		$(".chk-control").css({ "z-index": 18 });

		//모달 창 연 버튼에 class 추가 및 tabindex -1로 조정 (포커스 영역 수정)
		$(this).addClass("modal-opened").attr("tabindex", "-1");

		if ($(id).hasClass("wide")) {
			$('body').css({ 'overflow': 'auto' });
			$('#all-menu').hide().attr('aria-hidden', true).removeClass('active');
			$('.autocomplete-wrap').hide().attr('aria-hidden', true).removeClass('active');
		}
		modalOpen(id);
		return false;
	});

	$(document).on("click", ".close-modal", function () {//모달 닫기
		var id = "#" + $(this).closest(".modal").attr("id");

		modalClose(id);
	});

	//스킵버튼
	$('.skip-navi a').click(function () {
		$("#contents").attr('tabindex', '0').focus();
		return false;
	});

});

function modalOpen(id) {
	var id = id;

	$("body").addClass("modal-open");
	$(id).addClass("in").show().attr("aria-hidden", "false");

	if ($(".modal.in").length > 1) {
		var openedLen = $(".modal.in").length;
		var zIndexNew = 1010 + openedLen;
		$(id).css("zIndex", zIndexNew);
	}

	//열린 팝업창 포커스
	$(id).children(".modal-dialog").attr("tabindex", "0").focus();

	modalDimOpen(id); //dim show
	setModalMt(id); //모달 높이 위치값 세팅

	//return false;
}
function modalDimOpen(id) { //dim show
	var id = id;
	$(id).children(".modal-back").addClass("in").attr("aria-hidden", false).fadeIn(400);
}
function modalClose(id) { //모달 닫기
	var id = id;
	//var thisBtn = '.' + $(this).attr("id");
	if ($(".modal.in").length < 2) {
		$("body").removeClass("modal-open");
	}
	//$(thisBtn).focus();
	modalDimClose(id);

	//css animation 속도 맞춤
	setTimeout(function () {
		$(id).find(".modal-dialog").removeAttr("style");
	}, 400);
	$(id).removeClass("in").attr("aria-hidden", "true").hide();

	//모달 창 연 버튼에 class 삭제 및 tabindex 0로 조정 (포커스 영역 수정)
	$(".modal-opened").focus().attr("tabindex", "0").removeClass("modal-opened");

	//헤더 index값 조절
	$(".top-banner , #header-area").css({ "z-index": 20 });
	$(".chk-control").css({ "z-index": 19 });
}

function modalDimClose(id) { // dim hide
	var id = id;
	$(id).children(".modal-back").removeClass("in").attr("aria-hidden", true).hide();
}

function setModalMt(id) { //모달 높이 위치값 세팅
	var id = id;
	var winH = $(window).height();

	if ($(id).hasClass("in")) {
		var modalH = $(id).find(".modal-dialog").height();
	}

	if (modalH < winH) { //모달이 윈도우 높이보다 작은 경우 화면 가운데 정렬
		var mt = -((modalH) / 2);
	}
	else { //모달이 윈도우 높이보다 큰 경우 위 아래 여백 줌
		var top = 0;
		var mt = 0;
	}
	$(id).find(".modal-dialog").css({ "top": top, "margin-top": mt });
}

/* 새창닫기 */
function closeWin() {
	$('.close-product').on('click', function () {
		self.close();
	});
}

/* 토글 */
function toggle() {
	$('.global').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	});
}
