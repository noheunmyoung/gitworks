//Grid
//doc : https://masonry.desandro.com/methods.html
//image loaded : https://imagesloaded.desandro.com/

var $body = $('body');
var winW = $(window).outerWidth();
var winH = $(window).outerHeight();
var st = $(window).scrollTop();

if ($('.contents-list').length) {
	var $grid = $('.contents-list').imagesLoaded(function () {
		// init Masonry after all images have loaded
		$grid.masonry({
			itemSelector: '.item', 
		});
	}); 
} 
 
 
/* 키워드 뉴스, 미디어갤러리*/
$(function () {
	var $body = $('body');
    var winW = $(window).outerWidth();
    var winH = $(window).outerHeight();
    var st = $(window).scrollTop();
    $(document)
        .on('click', '.contents-press-list .downloader button', function (e) {
            e.preventDefault();
            var $downloader = $(this).parent('.downloader');

            if ($downloader.length) {
                var $downloadLayer = $(this).siblings('.download-type');
                if ($(this).index() == 0) {//담기
                    $downloadLayer.css('left', '0');
                    var itemInfo = {

                    };
                } else if ($(this).index() == 1) {
                    $downloadLayer.css('left', '44px');
                }
                $downloader.addClass('is-active');
            }
        })
        .on('mouseleave', '.contents-press-list .item', function () {
            $(this).find('.downloader').removeClass('is-active');
		}) 

		.on('click', '.down-pop-wrap .downloader button', function (e) {
			e.preventDefault();
			var $downloader = $(this).parent('.downloader');

			if ($downloader.length) {
				var $downloadLayer = $(this).siblings('.download-type');
				if ($(this).index() == 0) {//담기
					$downloadLayer.css('right', '70px'); 
					var itemInfo = {

					};
				} else if ($(this).index() == 1) {
					$downloadLayer.css('right', '0'); 
				}
				$downloader.addClass('is-active'); 
				$(this).addClass('click');
				$(this).siblings().removeClass('click');
			}
		}) 
		.on('mouseleave', '.layer-cont', function () {
			$(this).find('.downloader').removeClass('is-active');
		}) 
	
}); 
 
 
$(function () {
    //Grid
    $(document)
        .on('click', '.contents-list .downloader button', function (e) {
            e.preventDefault();
            var $downloader = $(this).parent('.downloader');

            if ($downloader.length) {
                var $downloadLayer = $(this).siblings('.download-type');
                if ($(this).index() == 0) {//담기
                    $downloadLayer.css('left', '0');
                    var itemInfo = {

                    };
                } else if ($(this).index() == 1) {
                    $downloadLayer.css('left', '44px');
                }
                $downloader.addClass('is-active');
            }
        })
        .on('mouseleave', '.contents-list .item', function () {
            $(this).find('.downloader').removeClass('is-active');
        }); 
        

    //tab, album in grid
    $('.img-album').on('click', '.btn-view', function () {//Album
        $(this).parent('.img-album').toggleClass('is-allshow');
    });

    $('.tab').on('click', 'a', function () {//Tab
        var idx = $(this).parent('li').index();
        $(this).parent('li').addClass('is-active').siblings('li').removeClass('is-active');

        if ($('.img-album').length) {
            if (idx == 1) {//img
                $('.img-album').show();
            } else {
                $('.img-album').hide();
            }
        }
    });

    var $fixedMenu = $('.fixed-menu');  
    
    var fixedMenu = function (st) {
        if ($('.footer').length) {
            var footerPosition = $('.footer').offset().top;
            if (st >= footerPosition - winH) {
                $fixedMenu.removeClass('is-fixed');
            } else {
                $fixedMenu.addClass('is-fixed');
            }
        } else {
            return false;
        }
    };

    fixedMenu(st);
    //My Folder (doc: https://swiperjs.com/api/) 
    $('.footer').on('click', '.btn-remove', function () {
        var idx = $(this).parent('li').index();
        myFolder.removeSlide(idx);
    });

    $fixedMenu.on('click', '.btn-fixed-menu', function () {
        $fixedMenu.toggleClass('is-closed');
    }); 

    $(window)
        .on('resize', function () {
            winW = $(window).outerWidth();
            winH = $(window).outerHeight();

        })
        .on('scroll', function () {
            st = $(window).scrollTop();
            fixedMenu(st);
        });
 
}); 
 

// SNS 공유
$(function () {
	$(window).resize(function () {
		var width = $(window).width();
		if (width >= 960) {
			$('.sns-wrap').hide();
			$('.btn-share').click(function () {
				$('.sns-wrap').show();
			});
			$(".btn-snsclose").click(function () {
				$('.sns-wrap').hide();
			});

		} else if (width < 960) {
			$('.sns-wrap').show();
		}
	});

	$(window).trigger("resize");
});


// 검색
$(function () {
	$('.search-area').hide();
	$('.btn-search').click(function () {
		$('.search-area').show();
	});
	$(".search-close").click(function () {
		$('.search-area').hide();
	});
});

// 레이어 팝업 다운로드
$(function () {
	$(".imgpop > button").click(function () {
		$(this).addClass("click");
		$(".download-type").css("display", "block");
		$(this).siblings().removeClass("click");
	});
});

// 모바일메뉴
$(function () {
	$('.mu-close').hide();
	$('.mob-menu').click(function () {
		$('.gnb-area').animate({ left: '0' }, 300);
		$('.mu-close').css("opacity", "1").show(100);
		$('body').addClass("ovf");
	});

	$('.mu-close').click(function () {
		$('.gnb-area').animate({ left: '-100%' }, 300);
		$('.mu-close').css("opacity", "0").hide(100);
		$('body').removeClass("ovf");
	});


	//모바일 gnb : 추가 2020.10.30
	var windowWidth = $(window).width();
	if (windowWidth < 1081) {
		$('.gnb-area .depth01 li>button').on('click', function () {
			$(this).parent().toggleClass('selected');
			$(this).next().slideToggle(200);
			$(this).parent().siblings().removeClass('selected');
		});
	}

});

// 보도자료 상세목록 
$(function () {
	var _width = $(window).width();
	if (_width > 960) {
		$(".press-view-left").css("left", "");
	}

	$(window).on("resize", function () {
		_width = $(window).width();
		if (_width > 960) {
			$(".press-view-left").css("left", "");
		}
	});

	$(".btn-list").click(function () {
		$(".press-view-left").animate({ left: "0" }, 300);
		$("header").css("z-index", "1");
		$("footer").css("z-index", "1");
		$(".container").css("z-index", "2");
		$("body").css("overflow", "hidden");
	});

	$(".list-close").click(function () {
		$(".press-view-left").animate({ left: "-100%" }, 300);
		$("header").css("z-index", "2");
		$("footer").css("z-index", "2");
		$(".container").css("z-index", "1");
		$("body").css("overflow", "visible");
	});
});

// 스크롤바
(function ($) {
	$(".press-view-list").mCustomScrollbar({
		theme: "inset-dark",
		scrollbarPosition: "inside",
		autoExpandScrollbar: "false",
	});
	$(".mCSB_outside+.mCSB_scrollTools").css({ right: -5 });
})(jQuery);


if ($('.contents-list').length) {
	var $grid = $('.contents-list').imagesLoaded(function () {
		// init Masonry after all images have loaded
		$grid.masonry({
			itemSelector: '.item',
		});
	});
}


//하단 탑 버튼 : 스크롤 탑  
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$(".btn-top").addClass("on");
		} else {
			$(".btn-top").removeClass("on");
		}
	});
	$(".btn-top").click(function () {
		$('html, body').animate({ scrollTop: 0 }, 300);
		return false;
	});

});

// 엘지 바로가기 (모바일) 
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.mob-type').addClass("on");
		} else {
			$('.mob-type').removeClass("on");
		}
	});
	$('.btn-lg').click(function () {
		$(".mob-type > a").css("display", "block");
	});
	$(".main-btn-close").click(function () {
		$(".mob-type > a").css("display", "none");
	});

});

/******* 보도자료 Swiper [s] *******/
var pressUpdate = function ($this, num){
    option = {
        loop: true,
        pagination: {
            el: $('.js-press-item').eq(num).closest('.img-wrap').find('.swiper-pagination'),
            type: 'fraction',
        },
        navigation: {
            nextEl: $('.js-press-item').eq(num).find('.swiper-button-next'),
            prevEl: $('.js-press-item').eq(num).find('.swiper-button-prev')
        },
    }
    pressViewArr[num] = new Swiper($this, option);   
}

$(function() {
    pressViewUpdate();
});

$(window).on('resize', function(){
    layerAction.resize($('.layer:visible'), winW);
});
var winW = $(window).outerWidth();
var $jsPressView = $('.js-press-view-img');
var pressViewArr = [];
var pressViewUpdate = function(){
    if (!$jsPressView.length) {
        return;
    }
    $jsPressView.each(function(i){
        console.log($(this), i);
        pressUpdate($(this), i);
    });
}
/******* 보도자료 Swiper [s] *******/

/******* Layer [s] *******/
var $layerWrap = $('.layer-wrap');
var $layer = $layerWrap.find('.layer:visible');
var layerH;
layerAction = {
    open : function(layerName){        
        var count = $layerWrap.find('.layer[data-layer-name=' + layerName + ']').length;
        if(count){  //layer exist
            $layerWrap.show();
            $body.addClass('is-hidden');    
            $layerWrap.find('.layer').each(function(){                
                if(layerName == $(this).attr('data-layer-name')){
                    $(this).show();
                    layerAction.resize($(this), winW);
                    $layerWrap.stop().animate({'scrollTop':0},0);
                }else{
                    $(this).hide();                        
                }            
            });
        }else{  //layer does not exist
            $layerWrap.hide();
            $body.removeClass('is-hidden');
            //console.log('There is no layer named "' + layerName + '"');
        }        
    },
    close : function(obj){            
        $layer = $layerWrap.find('.layer:visible');

        $layerWrap.hide().removeAttr('style');
        $layer.removeAttr('style').hide();
        $body.removeClass('is-hidden');
        
    },
    resize : function($obj){
        layerH = $obj.outerHeight();
        console.log('1');
        $obj.css({'top': '50%', 'margin-top' : '-' + (layerH / 2) + 'px'});
    },
    bind: function($obj){
        $obj.on('click', function(e){
            e.stopPropagation();
            var layerName = $(this).attr('data-layer-name');
            layerAction.open(layerName);
        });        
    },
    unbind: function($obj){
        $obj.off('click');
    }
};

layerAction.bind($('.js-layer-open'));

//Close Layer
$('.layer').on('click','.btn-layer-close, .js-layer-close', function(e){
    e.stopPropagation();        
    layerAction.close();
});
/******* Layer [e] *******/