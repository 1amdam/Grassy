$(function(){
    var $iniScroll=null;
    $iniScroll=$(window).scrollTop();
    $(window).scroll(function(){
        console.log("scrolling")
        var $scrollTop=$(window).scrollTop();
        if($iniScroll<$scrollTop){
            console.log("scroll down ing")
            $(".footer-menu").addClass("active")
            $(".question").removeClass("active")
        }else{
            console.log("scroll up ing")
            $(".footer-menu").removeClass("active")
            $("header").removeClass("active")
            $(".question").addClass("active")
        }
        $iniScroll=$scrollTop;
    })
})