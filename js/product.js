$(function(){
    var searchArray=[]
    var searchText=null;
    var count=0;

    for(i=0; i<$(".shop-thum").length; i++){
        searchArray[i]=$(".shop-thum").eq(i).find("span").text();
        console.log("searchArray["+i+"] : "+ searchArray[i])
    }
    //enter
    $("input[name=product-search").keydown(function(e){
        if(e.code=="Enter"){
            $(".search-bt").click();
        }
    })
    //click
    $(".search-bt").click(function(){
        searchText=$("input[name=product-search]").val();
        console.log("입력된 값:"+searchText);
        for(i=0; i<$(".shop-thum").length; i++){
            if(searchText===searchArray[i]){
                count++;
                $(".shop-thum").hide();
                $(".no-item").hide();
                $(".shop-thum:contains("+searchText+")").show();
                break;
                
            }
        }
        if(count==0){
            console.log("찾는 상품이 없습니다")
            $(".shop-thum").hide();
            $(".no-item").show();
        }count=0;
    })

})