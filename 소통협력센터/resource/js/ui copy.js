(function($, viewport){
	$(document).ready(function(){

		 

		// 메뉴1
		var side_menu1 = $('.gnb-menus>h3>a'),
		side_menu2 = $('.gnb-submenu');
		side_menu1.click(function () {
			if(viewport.is('<md')) {
				side_menu1.removeClass('active');
				$(this).addClass('active');
				side_menu2.hide();
				$(this).parents().next().show();
				return false;
			}
		});
		// 아코디언
		var accordion_tab = $('.gnb-submenu>ul>li>a'),
		accordion_content = $('.gnb-submenu>ul>li>ul');
		accordion_tab.on('click', function(e){
			if (!menutype || viewport.is('<md')){
				accordion_content.slideUp('normal');
				accordion_tab.removeClass('active');
				if($(this).next().length>0) {
					e.preventDefault();
					if($(this).next().is(':hidden') == true) {
						$(this).next().slideDown('normal');
						$(this).addClass('active');
					}
				}
			}
		});
		// 모바일 검색
		$('.header-search-view i.icon-search').click(function(){
			$('.header-search-view i.icon-colse').removeClass("hide");
			$('.header-search-view i.icon-search').addClass("hide");
			$('.header-search').addClass("show");
			$('.back').show();
			return false;
		});
		$('.header-search-view i.icon-colse, .back').click(function(){
			$('.header-search-view i.icon-colse').addClass("hide");
			$('.header-search-view i.icon-search').removeClass("hide");
			$('.header-search').removeClass("show");
			$('.back').hide();
			return false;
		});

		// pc Gnb
		var menutype = true;
		$(".gnb h3 a").hover(function() {
			if(menutype && (_IE8 || viewport.is('>=md'))) {
				$(this).addClass("active");
				$(this).parent().parent().find(".gnb-submenu").addClass("show");
				$(this).parent().parent().hover(function() {
				}, function(){
					$(this).find(".gnb-submenu").removeClass("show");
					$(this).find("h3 a").removeClass("active");
				});
			}
		});


		$(".gnb h3 a").focusin(function(){
			if(menutype && (_IE8 || viewport.is('>=md'))) {
				$(".gnb .gnb-submenu").removeClass("show");
				$(this).parent().parent().find(">.gnb-submenu").addClass("show");
			}
		});
		$(".all-menu-view").focusin(function(){
			if(menutype && (_IE8 || viewport.is('>=md'))) {
				  	$(".gnb .gnb-submenu").removeClass("show");
			}
		});


		// 인기 검색어
		$.get('/tool/searchApi/popword/popword.jsp', {
			target: 'popword', collection: 'ALL', pop_range: 'D'
		}, function(data) {
			// console.log(data);
			var $xml = $(data), $queries = $xml.find('Query'), $container = $('.search-txt-list'), html = '', start = false;
			$queries.each(function(i, el) {
				if(i <= 4) {
					if(start) html += ', ';
					html += '<a href="/tool/search/?category=jejudo&query='+$(el).text()+'">'+$(el).text()+'</a>';
				}
				start = true;
			});
			$container.html(html);
		});






		//하단 바로가기 링크
		$('.site-link dt a').click(function() {
			if($(this).parent().parent().find("dd").css('display')=='none') {
				$(this).parent().parent().find("dd").fadeIn();
			} else {
				$(this).parent().parent().find("dd").fadeOut();
			}
			return false;
		});
		$(document).mouseup(function() {
			$('.site-link dl  dd').fadeOut();
		});

		$(window).resize(
		  viewport.changed(function() {
			// console.log('Current breakpoint: ', viewport.current());
			if(viewport.is('<md')) {

			}
			if(viewport.is('>=md')) {
				$('.m-menu, .gnb-submenu').removeAttr('style');
				$('.gnb-menus>h3>a').removeAttr('class');
				$('.back').hide();

			}
      })
    );

	//주소복사
	if($.type(window.Clipboard) == 'function') {
		if(Clipboard.isSupported()) {
			var cb = new Clipboard('.copy-url');
			cb.on('success', function(e) {
				if($.type($(e.trigger).tooltip) == 'function') {
					$(e.trigger).tooltip('destroy');
				}
				$(e.trigger).tooltip({
					container: 'body',
					placement: 'top',
					title: '복사됐습니다. Ctrl+V 를 이용해 붙여넣기 하세요.',
					trigger: 'manual'
				});
				$(e.trigger).tooltip('show');
				setTimeout(function() {
					$(e.trigger).tooltip('destroy');
				}, 3000);
			});
		} else {
			$('.copy-url').remove();
		}
	} else {
		$('.copy-url').remove();
	}

	$('#SearchQuery').on('keypress', function(e) {
		if(e.which == 13) {
			if($(this).val() == '장윤영!'){
				alert('이 사이트를 만드는데 크게 공헌 하신 장윤영님을 검색 합니다.');
			}
		}
	});

	//모바일 탭메뉴
	var XS = false;
	var $sources = $('#sources');
	$('.source-trigger').on('click', function() {
		$sources.slideDown();
		return false;
	});
	$(function() {
		if(viewport.is('<md')) {
			$sources.slideUp();
			XS = true;
		}

		$(window).resize(
			viewport.changed(function() {
				if(viewport.is('<md')) {
					$sources.slideUp();
					XS = true;
				} else {
					$sources.slideDown();
					XS = false;
				}
			})
		);
	});

	var downloadCount = $('.download-count');
	if(downloadCount.length > 0) {
		downloadCount.each(function(i,el){
			var $this = $(this), data = $this.data();
			$.ajax({
				url: '/tool/jejunet/download-info.jsp',
				data: {article: data.article, no: data.no},
				dataType: 'json',
				type: 'GET',
				success: function(json){
					if(!json.error) {
						$this.text('('+json.download+')');
					}
				}
			});
		});
	}

	var downloadCountUser = $('.download-count-user');
	if(downloadCountUser.length > 0) {
		downloadCountUser.each(function(i,el){
			var $this = $(this), data = $this.data();
			$.ajax({
				url: '/tool/jejunet/download-info-user.jsp',
				data: {article: data.article, no: data.no},
				dataType: 'json',
				type: 'GET',
				success: function(json){
					if(!json.error) {
						$this.text(json.download);
					}
				}
			});
		});
	}


	if ($('#backtotop').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#backtotop').addClass('show');
				} else {
					$('#backtotop').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#backtotop').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

	$('.table-responsive').click(function(){
		$(this).addClass('flexhide');
	});


	});
})(jQuery, ResponsiveBootstrapToolkit);


if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
