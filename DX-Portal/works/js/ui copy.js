//Grid
//doc : https://masonry.desandro.com/methods.html
//image loaded : https://imagesloaded.desandro.com/

var appendNumber = 600;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    virtual: {
        slides: (function () {
            var slides = [];
            for (var i = 0; i < 5; i += 1) {
                slides.push('Slide ' + (i + 1));
            }
            return slides;
        }()),
    },
});
document.querySelector('.slide-1').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
});
document.querySelector('.slide-250').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(249, 0);
});
document.querySelector('.slide-500').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(499, 0);
});
document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.prependSlide([
        'Slide ' + (--prependNumber),
        'Slide ' + (--prependNumber)
    ]);
});
document.querySelector('.append-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.appendSlide('Slide ' + (++appendNumber));
});

if ($('.contents-list').length) {
    var $grid = $('.contents-list').imagesLoaded(function () {
        // init Masonry after all images have loaded
        $grid.masonry({
            itemSelector: '.item',
            columnWidth: 270,
            gutter: 40
        });
    });
}

var layerAction;

$(function () {
    var $body = $('body');
    var winW = $(window).outerWidth();
    var winH = $(window).outerHeight();
    var st = $(window).scrollTop();

    //COMMON HEADER
    $('.language')
        .on('click', 'button', function () {
            $(this).toggleClass('is-active');
        });

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


    var options = {
        // Optional parameters        
        spaceBetween: 10,
        slidesPerView: 10,
        slidesPerGroup: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.my-folder-next',
            prevEl: '.my-folder-prev',
        }
    };

    var fixedMenu = function (st) {
        if ($('.app-footer-wrap').length) {
            var footerPosition = $('.app-footer-wrap').offset().top;
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
    var myFolder = new Swiper('.my-folder-slider', options);

    $('.my-folder-slider').on('click', '.btn-remove', function () {
        var idx = $(this).parent('li').index();
        myFolder.removeSlide(idx);
    });

    $fixedMenu.on('click', '.btn-fixed-menu', function () {
        $fixedMenu.toggleClass('is-closed');
    });



    /******* Layer [s] *******/
    var $layerWrap = $('.layer-wrap');
    var $layer = $layerWrap.find('.layer:visible');
    var layerH;
    layerAction = {
        open: function (layerName) {
            var count = $layerWrap.find('.layer[data-layer-name=' + layerName + ']').length;
            if (count) {  //layer exist
                $layerWrap.show();
                $body.addClass('is-hidden');
                $layerWrap.find('.layer').each(function () {
                    if (layerName == $(this).attr('data-layer-name')) {
                        $(this).show();
                        layerAction.resize($(this), winW);
                        $layerWrap.stop().animate({ 'scrollTop': 0 }, 0);
                    } else {
                        $(this).hide();
                    }
                });
            } else {  //layer does not exist
                $layerWrap.hide();
                $body.removeClass('is-hidden');
                //console.log('There is no layer named "' + layerName + '"');
            }
        },
        close: function (obj) {
            $layer = $layerWrap.find('.layer:visible');

            $layerWrap.hide().removeAttr('style');
            $layer.removeAttr('style').hide();
            $body.removeClass('is-hidden');

        },
        resize: function ($obj, winW) {
            layerW = $obj.outerWidth();
            layerH = $obj.outerHeight();
            if (layerH + 60 >= winH) {
                $layerWrap.css({ 'overflow-y': 'auto' });
                //$obj.css({'left': '50%', 'top': 0, 'transform' : 'translate(-50%, 50px)'});
                $obj.css({ 'left': '50%', 'top': 0, 'margin-left': '-' + (layerW / 2) + 'px', 'margin-top': '60px' });
            } else {
                //$obj.css({'left': '50%', 'top': '50%', 'transform' : 'translate(-50%, -50%)'});
                $obj.css({ 'left': '50%', 'top': '50%', 'margin-left': '-' + (layerW / 2) + 'px', 'margin-top': '-' + (layerH / 2) + 'px' });
            }
        },
        bind: function ($obj) {
            $obj.on('click', function (e) {
                e.stopPropagation();
                var layerName = $(this).attr('data-layer-name');
                layerAction.open(layerName);
            });
        },
        unbind: function ($obj) {
            $obj.off('click');
        }
    };

    layerAction.bind($('.js-layer-open'));

    //Close Layer
    $('.layer').on('click', '.btn-layer-close, .js-layer-close', function (e) {
        e.stopPropagation();
        layerAction.close();
    });
    /******* Layer [e] *******/

    //File Uploader
    $('.file-uploader')
        .on('click', '.btn-file-search', function () {
            $(this).prev('input[type="file"]').click();
        })
        .on('change', 'input[type="file"]', function () {
            $(this).prev('input[type="text"]').val($(this).val());
        });

    //콘텐츠 리스트
    $('.sort-grid').on('click', 'button', function () {
        $(this).parent('li').addClass('is-active').siblings('li').removeClass('is-active');
    });

    //콘텐츠 상세
    //유의사항 안내
    $('.caution').on('click', '.btn-toggle', function () {
        $(this).toggleClass('is-active');
        if (!$(this).hasClass('is-active')) {
            $(this).next('ul').slideDown(100);
        } else {
            $(this).next('ul').slideUp(100);
        }
    });

    //연관 콘텐츠
    if ($('.related-contents-swiper').length) {
        var relatedContentsSwiper = new Swiper('.related-contents-swiper', {
            // Optional parameters        
            spaceBetween: 12,
            slidesPerView: 6,
            slidesPerGroup: 6,
            // Navigation arrows
            navigation: {
                nextEl: '.btn-related-content-next',
                prevEl: '.btn-related-content-prev',
            }
        });
    }

    //LG스마트체 다운로드
    var $layerSmartFont = $('.modal[data-layer-name="layerSmartFont"]');
    $layerSmartFont.on('change', 'input[name="user"]', function () {
        if ($(this).attr('id') != 'user01') {
            $layerSmartFont.find('.partner').show();
            $layerSmartFont.find('.info-incharge').show();
            $layerSmartFont.find('.btn-area').removeClass('border-none');
        } else {
            $layerSmartFont.find('.partner').hide();
            $layerSmartFont.find('.info-incharge').hide();
            $layerSmartFont.find('.btn-area').addClass('border-none');
        }
    });

    //문의하기
    var $layerInquiry = $('.modal[data-layer-name="layerInquiry"]');
    var inquirySelect = function (idx) {
        if (idx == '0' || idx == '1') {
            $layerInquiry.find('.btn-wrap').show();
        } else {
            $layerInquiry.find('.btn-wrap').hide();
        }
    };


    $('.modal').on('change', '#inquirySelect', function () {
        inquirySelect($(this).val());
    });

    //문의하기
    if ($('.inquiry-type').length) {
        $('.inquiry-type').on('click', 'a', function () {
            layerAction.open('layerInquiry');
            var idx = $(this).parent('li').index();
            $layerInquiry.find('#inquirySelect option[value="' + idx + '"]').prop('selected', true);
            inquirySelect(idx);
        });
    }

    //자주하는 질문
    $('.faq-accordian')
        .on('click', '.btn-toggle02', function () {
            if (!$(this).hasClass('is-active')) {
                $(this).addClass('is-active');
                $(this).parents('.accordian').siblings('.accordian').find('.btn-toggle02').removeClass('is-active');
                $(this).parents('.accordian').find('dd').slideDown(100);
                $(this).parents('.accordian').siblings('.accordian').find('dd').slideUp(100);
            } else {

                $(this).removeClass('is-active');
                $(this).parents('.accordian').find('dd').slideUp(100);
            }
        })
        .on('click', 'dt > a', function () {
            $(this).parents('.accordian').find('.btn-toggle02').trigger('click');
        });

    //나의 문의 이력
    $('.history-accordian')
        .on('click', '.question-tit a', function () {
            var $accordian = $(this).parents('.accordian');
            if (!$accordian.hasClass('is-active')) {
                $accordian.addClass('is-active');
                if ($accordian.attr('data-complete') == 'yes') $accordian.find('dd').slideDown(100);
                $accordian.siblings('.accordian').removeClass('is-active').find('dd').slideUp(100);
            } else {
                $accordian.removeClass('is-active').find('dd').slideUp(100);
            }
        });

    //Main FAQ
    $(".faq-list").on('click', '.btn-view-answer', function () {
        var $layerFAQAnswer = $('.layer[data-layer-name="layerFAQAnswer"]');
        var q = $(this).parents('li').find('.question').html();
        var a = $(this).parents('li').find('.answer').html();
        $layerFAQAnswer.find('dt').children('p').html(q);
        $layerFAQAnswer.find('dd').children('div').html(a);
        layerAction.open('layerFAQAnswer');
        layerAction.resize($layerFAQAnswer, winW);
    });

    $('.js-main-brand-inquiry').on('click', function () {
        layerAction.open('layerInquiry');
        $layerInquiry.find('#inquirySelect option[value="0"]').prop('selected', true);
        inquirySelect(0);
    });

    $('.js-main-brand-inquiry').on('click', function () {
        $('#inquirySelect option[value="0"]').prop('selected', true);
        inquirySelect(0);
    });

    $('.js-main-ci-inquiry').on('click', function () {
        layerAction.open('layerInquiry');
        $layerInquiry.find('#inquirySelect option[value="1"]').prop('selected', true);
        inquirySelect(1);
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
$(function ($) { 
    $(window).resize(function () {
        var width = $(window).width();
        if (width >= 1100) {
            $('.sns-wrap').hide();
            $('.btn-share').click(function () {
                $('.sns-wrap').show();
            });
            $(".btn-snsclose").click(function () {
                $('.sns-wrap').hide();
            });
            
        } else if (width < 1100) {
            $('.sns-wrap').show(); 
        }
    });

    $(window).trigger("resize");  
}); (jQuery);


// 검색 
$(function ($) {
    $('.search-area').hide();
    $('.btn-search').click(function () {
        $('.search-area').show();
    });
    $(".search-close").click(function () {
        $('.search-area').hide();
    });
}); (jQuery);


// 모바일메뉴
$(function ($) {
    $('.mu-close').hide();
    $('.mob-menu').click(function () {
        $('.gnb-area').animate({ left: '0' }, 300);
        $('.mu-close').css("opacity", "1").show(100);
    });

    $('.mu-close').click(function () {
        $('.gnb-area').animate({ left: '-100%' }, 300);
        $('.mu-close').css("opacity", "0").hide(100);
    });
}); (jQuery);

// 보도자료 상세
$(function ($) { 
    $('.btn-list').click(function () {
        $('.press-view-left').animate({ left: '0' }, 300);
        $('header').css("z-index", "1");
        $('footer').css("z-index", "1");
        $('.container').css("z-index", "2");
        $('body').css("overflow", "hidden");
    });

    $('.list-close').click(function () {
        $('.press-view-left').animate({ left: '-100%' }, 300);
        $('header').css("z-index", "1");
        $('footer').css("z-index", "1");
        $('.container').css("z-index", "2");
        $('body').css("overflow", "hidden");
    });
}); (jQuery);

// 스크롤바
(function ($) {
    $(".press-view-list").mCustomScrollbar({
                theme: "inset-dark",
                scrollbarPosition: "inside",
                autoExpandScrollbar: "false", 
                

				callbacks: {
					onImageLoad: function() {
						console.log(" 이미지 로드 ");
					},
					onUpdate: function() {
						console.log(" 스크롤 업데이트 ");
						//
					},
					onScroll: function() {
						console.log("스크롤 끝!!")
					},
					whileScrolling: function() {
						console.log("스크롤 중~")
					}
				}

			});
			
			$(".mCSB_outside+.mCSB_scrollTools").css({right:-5});					 
			
})(jQuery);