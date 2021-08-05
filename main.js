$(function(){
    ////////////////////////////////

$("#park_portfolio").fullpage({
    anchors:['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'info'],
    afterLoad: function(origin, destination, direction){
        //console.log("여기는"+destination.index)
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        //nav ul li
        $("nav ul li").eq(destination.index).addClass("on").siblings().removeClass("on");
    },
});


$(".xi-pause.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("pause")
});
$(".xi-play.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("play")
});

$(".visual_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$(".slider_arrows i.right").on("click", function(){
    $(".visual_slider").slick("slickNext");
});
$(".slider_arrows i.left").on("click", function(){
    $(".visual_slider").slick("slickPrev");
});

$("header .mopen").on("click", function(){
    $(this).toggleClass("on");
    $(".cover").toggleClass("on");
});

$(".cover li a").on("click", function(){
    $(".cover").removeClass("on");
    $("header .mopen").removeClass("on");
})

    ///////////////////////////////
});