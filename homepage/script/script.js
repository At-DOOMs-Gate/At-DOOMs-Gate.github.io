jQuery(document).ready(function(){

$(".main>li").mouseover(function(){

    $(".sub").stop().slideDown()
    $(".box").stop().slideDown()

}).mouseout(function(){

    $(".sub").stop().slideUp()
    $(".box").stop().slideUp()

})


})