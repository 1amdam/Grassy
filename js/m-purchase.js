$(function(){
    var $iniScroll=null;
    $iniScroll=$(window).scrollTop();
    $(window).scroll(function(){
        console.log("scrolling")
        var $scrollTop=$(window).scrollTop();
        if($iniScroll<$scrollTop){
            console.log("scroll down ing")
            $(".m-purchase").addClass("active")
            $(".question").removeClass("active")
        }else{
            console.log("scroll up ing")
            $(".m-purchase").removeClass("active")
            $("header").removeClass("active")
            $(".question").addClass("active")
        }
        $iniScroll=$scrollTop;
    })
})