$(document).ready(function(){
    $(".m-open").click(function(){
       $(".mobile-content").addClass("active");
       $("html,body").css({
        "overflow":"hidden"
       })
    })
    $(".m-close").click(function(){
        $(".mobile-content").removeClass("active");
        $("html,body").css({
            "overflow":"auto"
        })
    })
    var winWidth=0;
    function drop(){
        winWidth=$(window).width();
        if(winWidth>=1024){
            $(".m-drop-down").show()
        }
        $(".m-menu-gr>a").on("click",function(){

            if($(this).parent().find(".m-drop-down").is(":hidden")){
                $(".m-drop-down").stop().slideUp();
                $(this).parent().find(".m-drop-down").stop().slideDown();
            }
            else{
                $(".m-drop-down").slideUp();

            }
        })
    }
    drop()

    $(".d-menu>a").mouseenter(function(){
        $(".drop-down").stop().slideUp();
        $(".d-menu>a").removeClass("active");
        $(this).addClass("active")
        $(this).parent().find(".drop-down").stop().slideDown();
    })
    $(".drop-down").mouseleave(function(){
        $(this).stop().slideUp();
        $(".d-menu>a").removeClass("active")
    })
    $("#desk-nav").mouseleave(function(){
        $(".d-menu>a").removeClass("active");
        $(".drop-down").stop().slideUp();
    })
    $(".d-menu>a").mouseenter(function(){
        $(".drop-down").stop().slideDown();
        $(".full-back").stop().slideDown();
        $(".d-menu>a").removeClass("active");
        $(this).addClass("active")
    })
    $("#header-container").mouseleave(function(){
        $(".drop-down").stop().slideUp();
        $(".full-back").stop().slideUp();
        $(".d-menu>a").removeClass("active");
    })
    $("d-menu").each(function(index){
        $(this).children("a").mouseenter(function(){
            $(".drop-down").stop().slideDown();
            $(".full-back").stop().slideDown();
            $(".d-menu>a").removeClass("active")
            $(this).addClass("active")
            $(".drop-down").removeClass("active");
            $(".drop-down").eq(index).addClass("active");
        })
        $("#header-container").mouseleave(function(){
            $(".d-menu>a").removeClass("active")
            $(".drop-down").stop().slideUp();
            $(".full-back").stop().slideUp();
        })
        $(this).find(".drop-down").mouseenter(function(){
            $(".d-menu>a").removeClass("active")
            $(this).parent().children("a").addClass("active")
            $(".drop-down").removeClass("active");
            $(this).addClass("active");
        })
    })

    var $scroll=null;
    $(window).on("scroll",function(){
        console.log("스크롤")
        $scroll=$(window).scrollTop();
        if($scroll>20){
            $("header").addClass("active")
        }
        else{
            $("header").removeClass("active")
        }
    });

    $(".best-item").eq(0).css({"display":"block"})
    $(".m-tab a").eq(0).addClass("active");
    $(".m-tab a").click(function(){
        $(".m-tab a").removeClass("active");
        $(this).addClass("active")
        $(".best-item").hide();
        $(this.hash).show().css({"display":"block"});
        return false;
    })
    $(".d-best-item").eq(0).css({
        "display":"block"
    })
    $(".d-tab a").eq(0).addClass("active");
    $(".d-tab a").click(function(){
        $(".d-tab a").removeClass("active");
        $(this).addClass("active")
        $(".d-best-item").hide();
        $(this.hash).show().css({"display":"block"});
        return false;
    })
})


// 드롭다운이 유지가 안 되고 바로 없어지는 ... 문제 발생
