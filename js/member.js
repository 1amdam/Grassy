$(function(){
    var $array=[];
    $(".array").each(function(index){
        $array[index]=$(this).attr("placeholder");
        $(this).focus(function(){
            $(this).attr("placeholder","");
        })
        $(this).blur(function(){
            $(this).attr("placeholder",$array[index])
        })
    })

 
})