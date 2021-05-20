// 공지사항
$(function () {
    $('.notice_tab li').hover(function () {
        var activeTab = $(this).attr('data-tab');
        $('.notice_tab li').removeClass('current');
        $('.notice').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    })
});

//lnb
$(function () { 
    $('#lnb>li>a').click(function () { 
        var check = $(this).hasClass('selected');
        if (check) {
            $(this).removeClass('selected');
            $(this).siblings('ul').stop(true, true).slideUp();
        } else {
            $('#lnb>li>a').removeClass('selected');
            $('#lnb>li>ul').stop().slideUp();
            $(this).addClass('selected');
            $(this).siblings('ul').stop(true, true).slideDown();
        }
    }); 
});


// 캘린더
$(function () {
    $(".cal-btn button").click(function () {
        $('.calendar-wrap').toggleClass("fullbox");
        $(this).toggleClass("clicked");
    });
});

// 퀵메뉴
$(function () {
    $(".quickmenu-btn").click(function () {
        $('.quickmenu-list').toggleClass("disblock");
    });

    $('.quidepth01>li>a').click(function () {
        var check = $(this).hasClass('selected');
        if (check) {
            $(this).removeClass('selected');
            $(this).siblings('ul').stop(true, true).slideUp();
        } else {
            $('.quidepth01>li>a').removeClass('selected');
            $('.quidepth01>li>ul').stop().slideUp();
            $(this).addClass('selected');
            $(this).siblings('ul').stop(true, true).slideDown();
        }
    });
});

 

// 대민포털 GNB
$(function () {
    $(".depth01 li").mouseover(function () {
        $(this).children(".depth-warp").show();
        $(this).addClass("on");
    });
    $(".depth01 li").mouseout(function () {
        $(this).children(".depth-warp").hide();
        $(this).removeClass("on");
    });
}); 


// 관련사이트
$(function () { 
    $(".link-menu .btn-site").click(function () {
    // $(this).toggleClass("clicked");
        $(".link-list").slideToggle(100);
    }); 
}); 

// 시설별 GNB
$(function () {
    if (!$('#gnbNavi')) { return; }
    var _depthBG = $('#gnbNavi').find('.after:not(:animated)');
    var _depth1Box = $('#gnbNavi').find('.depth01');
    var _depth2Box = $('#gnbNavi').find('.depth02');
    var _depth1Anchor = _depth1Box.find('li>a');
    var biggestHeight = 0;

    _depth1Box.addClass('off');
    _depth2Box.each(function () {
        if ($(this).height() > biggestHeight) {
            biggestHeight = $(this).height();
        }
    }).height(biggestHeight);

    //1depth 클릭 시 서브메뉴 열림
    _depth1Anchor.each(function () {
        if (_depthBG.is(':hidden')) {
            $(this).on('mouseenter', function () {
                $(this).parent().addClass('on');
                $(this).parent().siblings().removeClass('on');
            });
            _depth1Box.on('mouseleave', function () {
                $(this).find('>li').removeClass('on')
            });
        }

        $(this).on('mouseenter', function () {
            if (_depthBG.is(':hidden')) {
                _depthBG
                    .show()
                    .stop()
                    .animate(
                        { height: biggestHeight + 35 },
                        {
                            duration: 200,
                            complete: function () {
                                _depth2Box.show();
                            }//complete
                        }//animate
                    )
            }
        });

    });

    _depth2Box.off().on('mouseenter', function () {
        $(this).parents('.depth01 > li').addClass('on').siblings().removeClass('on');
    }).on('mouseleave', function () {
        $(this).parents('.depth01 > li').removeClass('on');
    });

    //메뉴 닫기 
    var _GNB = $('#gnbNavi');
    $(_GNB).on('mouseleave', function () {
        _depth2Box.hide().css('height', biggestHeight + 15);
        _depthBG.hide().css('height', biggestHeight + 45);
    });
});

 
 