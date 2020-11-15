$(function(){ 
    gnb();//gnb 
    link_menu();//link_menub  
    footer_banner();//footer_banner 
});
 
/* ----- GNB ----- */ 
function gnb(){
	$(".depth01 > li > a").hover(function () {
        $(this).parent().addClass("on");
        $(this).parent().find(".depth-warp").slideDown(100); 
        $(this).parent().hover(function() {
        }, function(){
            $(this).find(".depth-warp").slideUp(100); 
            $(this).removeClass("on");
        });
    });

    $(".depth01 > li > a").focusin(function(){
    $(".depth01 .depth-warp").removeClass("focusActive");
        $(this).parent().find(".depth-warp").addClass("focusActive"); 
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
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.footerbanner .swiper-button-next',
            prevEl: '.footerbanner .swiper-button-prev',
        },
    });
}

