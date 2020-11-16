$(function(){ 
    gnb();//gnb 
    link_menu();//link_menu  
    footer_banner();//footer_banner 
    all_menu();//전체메뉴 
});
 
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

function all_menu(){
	$(".btn-allmenu").click(function () {
        $('.allmenu-wrap').addClass("focusActive");
        $('.logo').addClass("all");
    });
    $(".all-close").click(function () {
        $('.allmenu-wrap').removeClass("focusActive");
        $('.logo').removeClass("all");
    });
 
    
}

/* ----- 관련사이트 ----- */
function link_menu(){
	$(".link-wrap .btn_sel").on("click",function(){
        var link = $(".link-wrap .select1 option:selected").val();
        window.open(link, '_blank');  
    })
    $(".link-wrap select").on("click",function(){ 
        $('.blind').css("opacity", "0");
    })
}

/* ----- 푸터배너 ----- */
function footer_banner(){
     var swiper = new Swiper('.footerbanner', {
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true,
        loop: false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

