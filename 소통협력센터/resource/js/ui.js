$(function(){ 
    gnb();//gnb 
    link_menu();//관련사이트  
    footer_banner();//하단 슬라이드 배너 
    all_menu();//전체메뉴 
    card_tab();//전체메뉴
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

// /* ----- 카드뉴스 ----- */
// function card_tab(){
// 	 $('.card-tab li').click(function () { 
//         $(this).addClass("active")
//         .attr({
//             "tabindex": "0",
//             "aria-selected":"true" 
//         }) 
//         .focus()
//         .siblings()
//         .removeClass("active")
//         .attr({
//             "tabindex": "-1",
//             "aria-selected":"false" 
//         }); 
//         $('#' + $(this).attr('aria-controls')) 
//         .addClass("focusActive")
//         .siblings(".tab-conts") 
//         .removeClass("focusActive")
//     });
// }
 

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
 