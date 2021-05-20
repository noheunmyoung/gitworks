$(function(){ 
    gnb();//gnb 
    link_menu();//관련사이트   
    all_menu();//전체메뉴 
    card_tab();//카드뉴스   
}); 
  
(function($){

  /* ----- 파일선택----- */ 
  var $fileBox = null;
  
  $(function() {
    init();
  })
  
  function init() {
    $fileBox = $('.file');
    fileLoad();
  }
  
  function fileLoad() {
    $.each($fileBox, function(idx){
      var $this = $fileBox.eq(idx),
          $btnUpload = $this.find('[type="file"]'),
          $label = $this.find('.file-label');
      
      $btnUpload.on('change', function() {
        var $target = $(this),
            fileName = $target.val(),
            $fileText = $target.siblings('.file-name');
        $fileText.val(fileName);
      })
      
      $btnUpload.on('focusin focusout', function(e) {
        e.type == 'focusin' ?
          $label.addClass('file-focus') : $label.removeClass('file-focus');
      })
      
    })
  } 

  /* ----- 모바일 검색----- */
  $(".btn-search").click(function () {
      $('.search-mwrap').addClass("focusActive");
      $('.logo').addClass("all");
  });
  $(".all-close").click(function () {
      $('.search-mwrap').removeClass("focusActive");
      $('.logo').removeClass("all");
  });  

/* ----- 아코디언 ----- */
  $(".questions").click(function() { 
			$(this).toggleClass("clicked").next().slideToggle(200);
			$(".questions").not(this).removeClass("clicked").next().slideUp(200);
   }); 
})(jQuery);  

 
/* ----- GNB ----- */ 
function gnb(){
	$(".depth01 > li > a").hover(function () {
        $(this).parent().addClass("on");
        $(this).parent().find(".depth-warp").addClass("focusActive"); 
        $(this).parent().hover(function() {
        }, function(){
            $(this).find(".depth-warp").removeClass("focusActive"); 
            $(this).removeClass("on");
        });
    });

    $(".depth01 > li > a").focusin(function(){
    $(".depth01 .depth-warp").removeClass("focusActive");
        $(this).parent().find(".depth-warp").addClass("focusActive"); 
    }); 

    $(".btn-allmenu").focusin(function(){
		$(".depth01 .depth-warp").removeClass("focusActive");
	});
    
} 
 
 

/* ----- 전체메뉴----- */   
function link_menu(){
	$(window).resize(function () {
		 var windowWidth = $(window).width();
    if (windowWidth >= 960) { 
      $(".btn-allmenu").click(function () {
          $('.allmenu-wrap').addClass("focusActive");
          $('.logo').addClass("all");  
      });

      $(".all-close").click(function () {
          $('.allmenu-wrap').removeClass("focusActive");
          $('.logo').removeClass("all");
      });   
    }  
    
    else if(windowWidth < 960) {
      $('.btn-allmenu').click(function () {
        $('.allmenu-wrap').animate({ left: '0' }, 300); 
        $('.btm-menu-wrap').animate({ left: '0' }, 300); 
        $('body').addClass("ovf"); 
      });  
      
      $('.all-depth01 > li > a').on('click', function () {
        $(this).parent().toggleClass('selected'); 
        $(this).parent().siblings().removeClass('selected');
      });
      
      $('.all-close').click(function () {
          $('.allmenu-wrap').animate({ left: '-100%' }, 300); 
          $('.btm-menu-wrap').animate({ left: '-100%' }, 300); 
          $('body').removeClass("ovf");
      });
			 
	  } 
	});

	$(window).trigger("resize");
} 

/* ----- 전체메뉴----- */  
$(function () {
    $(window).resize(function () {
		var width = $(window).width();
		if (width >= 960) {
		 $(".btn-allmenu").click(function () {
          $('.allmenu-wrap').addClass("focusActive");
          $('.logo').addClass("all");  
      });

      $(".all-close").click(function () {
          $('.allmenu-wrap').removeClass("focusActive");
          $('.logo').removeClass("all");
      });   

		} else if (width < 960) {
			 $('.btn-allmenu').click(function () {
        $('.allmenu-wrap').animate({ left: '0' }, 300); 
        $('.btm-menu-wrap').animate({ left: '0' }, 300); 
        $('body').addClass("ovf"); 
      });  
      
      $('.all-depth01 > li > a').on('click', function () {
        $(this).parent().toggleClass('selected'); 
        $(this).parent().siblings().removeClass('selected');
      });
      
      $('.all-close').click(function () {
          $('.allmenu-wrap').animate({ left: '-100%' }, 300); 
          $('.btm-menu-wrap').animate({ left: '-100%' }, 300); 
          $('body').removeClass("ovf");
      });
		}
	});

	$(window).trigger("resize");
});


/* ----- 센터사업----- */  
 $(function () { 
    $(window).resize(function () {
      var windowWidth = $(window).width();
      if (windowWidth >= 960) { 
          $('.tablist button').hover(function () {
            var activeTab = $(this).attr('data-tab');
            $('.tablist button').removeClass('current');
            $('.tabpanel').removeClass('current');
            $(this).addClass('current');
            $('#' + activeTab).addClass('current');
          })
      }  
      
      else if(windowWidth < 960) {
        $('.tablist button').click(function () {
            var activeTab = $(this).attr('data-tab');
            $('.tablist button').removeClass('current');
            $('.tabpanel').removeClass('current');
            $(this).addClass('current');
            $('#' + activeTab).addClass('current');
        }) 
      } 
    });

    $(window).trigger("resize");
    
  });
 

 