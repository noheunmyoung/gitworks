$(function(){
	//GNB
    gnb_megamenu(); 
    
    //tab 
    tab();

    //multiple 
    multiple();
    
    //select 
    select(); 
});

/* ----- GNB ----- */
function gnb_megamenu(){
	if(!$('#gnbNavi')){return;}

	var _depthBG = $('#gnbNavi').find('.after:not(:animated)');
	var _depth1Box = $('#gnbNavi').find('.depth01');
	var _depth2Box = $('#gnbNavi').find('.depth02');
	var _depth3Box = $('#gnbNavi').find('.depth03');
	var _depth1Anchor = _depth1Box.find('li>a');
	var _depth2Anchor = _depth2Box.find('li>a');
	var  biggestHeight = 0;

	_depth1Box.addClass('off');
	_depth2Box.each(function(){
		if($(this).height() > biggestHeight){
			biggestHeight = $(this).height();
		}
	}).height(biggestHeight);

	//1depth 클릭 시 서브메뉴 열림
	_depth1Anchor.each(function(){
		if( _depthBG.is(':hidden')){
			$(this).on('mouseenter',function(){
				$(this).parent().addClass('on');
				$(this).parent().siblings().removeClass('on');
			});
			_depth1Box.on('mouseleave',function(){
				$(this).find('>li').removeClass('on')
			});
		}

		$(this).on('mouseenter',function(){
			if( _depthBG.is(':hidden')){
				_depth1Box.removeClass('off');
				_depthBG
					.show()
					.stop()
					.animate(
						{height:biggestHeight+55},
						{duration:200,
							 complete:function(){
								_depth2Box.show();

							 }//complete
						}//animate
					)
			}
		});
	});

	//2depth 클릭 시
	_depth2Anchor.each(function(){
		var $depth3 = $(this).parent().find('.depth03');
		var height_depth3;
		var height_new1;
		var height_new2;

		var setTimeout_showDepth3 = function(){
			setTimeout(function(){
				$depth3.stop().slideDown();
			},200);
		}
		var setTimeout_hideDepth3 = function(){
			setTimeout(function(){
				_depth2Box.stop().animate({height: height_new2+10},200);
				_depthBG.stop().animate({height: height_new2+35},200);
			},300);
		}

		clearTimeout(setTimeout_showDepth3);
		clearTimeout(setTimeout_hideDepth3);

		$(this).on('mouseenter',function(){
			if( $depth3.length && $depth3.is(':hidden')){

				height_depth3 = $depth3.outerHeight(true);
				height_new1 = biggestHeight + height_depth3;

				_depth3Box.hide();
				$(this).parents('.depth02').height( height_new1 );

				if( height_new1 > biggestHeight){
					_depth2Box.animate({height: height_new1+10});
					_depthBG.animate({height: height_new1+35});
				}

				//서브메뉴 보이기
				setTimeout_showDepth3();
			}
			else if( $depth3.length && $depth3.is(':visible')){
				height_depth3 = $depth3.outerHeight(true);
				height_new2 = height_new1 - height_depth3

				$(this).parents('.depth02').height( height_new2 );

				//3depth 숨기기
				$depth3.slideUp('fast');

				//2depth,메뉴 BG 숨기기
				setTimeout_hideDepth3();
			}
		});
	});

	//depth2 마우스 오버시 해당 depth1 활성화
	_depth2Box.off().on('mouseenter',function(){
		$(this).parents('.depth01 > li').addClass('on').siblings().removeClass('on');
	}).on('mouseleave',function(){
		$(this).parents('.depth01 > li').removeClass('on');
	});

	//메뉴 닫기
	var _GNB = $('#gnbNavi');
	$( _GNB, _depthBG).on('mouseleave',function(){
		_depth3Box.hide();
		_depth2Box.hide().css('height',biggestHeight+10);
		_depthBG.hide().css('height',biggestHeight+35);
		_depth1Box.addClass('off');
	});
}


/* ----- tab ----- */
function tab(){
	 $('.tab-wrap li').mouseenter(function () {
        var activeTab = $(this).attr('data-tab');
        $('.tab-wrap li').removeClass('current');
        $('.result').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    });
}


/* ----- selectmenu ----- */
function select() {
	$( ".select" ).selectmenu(); 
}  

  
/* ----- multiple selectmenu ----- */
function multiple() {
	$('.select2').SumoSelect({selectAll: false});
}  
 
