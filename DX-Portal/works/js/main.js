$('.main-layout')
.on('click','.btn-accordian', function(e){
    e.stopPropagation();
    var idx = $(this).parent('div').index();
    $('.app[data-page="main"]').attr('data-main-active', idx + 1);
    $('.main-layout').children('div').eq(idx).addClass('is-active').siblings('div').removeClass('is-active');
})
.on('mouseenter','.btn-accordian', function(e){
    e.stopPropagation();
    $(this).addClass('is-hover');
})
.on('mouseleave','.btn-accordian', function(e){
    e.stopPropagation();
    $(this).removeClass('is-hover');
});

$('.integration-search-form').on('focusout','input[type=text]',function(){
    if($(this).val() != ''){
        $(this).next('label').hide();
    }else{
        $(this).next('label').show();
    }
});

$('.main-contents-tab').on('click','button',function(){
    var $list = $(this).parent('li');
    $list.addClass('is-active').siblings('li').removeClass('is-active');
    if($list.index() == 2){//
        $('.grid').hide();
        $('.press-release').show();
    }else{
        $('.grid').show();
        $('.press-release').hide();
    }
});

$('.select-inquiry-type').on('click','button',function(){
    $(this).addClass('is-active').siblings('button').removeClass('is-active');
});

$(window).on("load",function(){
    $(".faq-list").mCustomScrollbar({
        axis:"x",        
        theme:"dark-3",
        // autoHideScrollbar : false,
        // alwaysShowScrollbar : 1,
        advanced:{
            autoExpandHorizontalScroll:true //optional (remove or set to false for non-dynamic/static elements)
        }
    });

    $(".main-accordian-inner").mCustomScrollbar({
        axis:"y",        
        theme:"minimal-dark",
        autoHideScrollbar : true,
        alwaysShowScrollbar : 0,
        advanced:{
            autoExpandHorizontalScroll:true //optional (remove or set to false for non-dynamic/static elements)
        }
    });

    $('.app[data-page="main"]').addClass('ready').removeClass('not-ready');


});