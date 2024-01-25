$(function(){
    //메뉴
$(".main > li").hover(function(){
    // $(this).find(".sub").stop().slideDown();
    $(this).children(".sub").stop().slideDown();
},function(){
    // $(this).find(".sub").stop().slideUp();
    $(this).children(".sub").stop().slideUp();
})//hover

//슬라이드 이미지 방법1
// $(".fade li").eq(0).show();
// $(".fade li").eq(1).hide();
// $(".fade li").eq(2).hide();

// $(".fade li").hide();
// $(".fade li").eq(0).show();

// $(".fade li:gt(0)").hide();

// $(".fade li").eq(0).siblings().hide();

// var n = 0;
// setInterval(function(){
//     $(".fade li").eq(n).fadeOut();
//     if(n == 2){
//         n = 0;
//     }else{
//         n++;
//     }
//     $(".fade li").eq(n).fadeIn();
// },3000) //setInterval

//슬라이드 이미지 방법 2
$(".fade li").eq(0).siblings().hide();
var n=0;
setInterval(function(){
    n = (n + 1) % 3;
    $(".fade li").eq(n).siblings().fadeOut();
    $(".fade li").eq(n).fadeIn();
},3000)

//탭메뉴
$(".cont1 h2").click(function(){
    $(".cont1 h2").removeClass("on")
    $(this).addClass("on")
    $(".cont1 ul").hide();
    $(this).next().css({display:"flex"})
})

//팝업
$(".p_click").click(function(){
    $(".pop_layer, .pop").fadeIn()
})//
$(".close").click(function(){
    $(".pop_layer, .pop").fadeOut()
})//





})//jquery