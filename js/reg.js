$(document).ready(function(){
    $(document).ready(function(){
        $('#expand').click(function(){
        if($('#header').height() == 120){
                $('#header').stop().animate({height:"65px"})
                $('#mainUl').stop().fadeIn().css({"display":"none"})
            }else{
                $('#header').stop().animate({height:"120px"})
                $('#mainUl').stop().fadeIn().css({"display":"flex", "margin-bottom":"20px"}).children().css({"border-left":"none", "padding-left":"0px"})
            }
        });
    });
})