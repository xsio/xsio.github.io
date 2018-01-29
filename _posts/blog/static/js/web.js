/**
 * Created by Administrator on 2017/7/28 0028.
 */
//header效果
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var top_div = document.getElementsByTagName("header")[0];
    var imgWhite = document.getElementById("logoImgWhite");
    var imgBlue = document.getElementById("logoImgBlue");
    if( t >= 100 ) {
        top_div.setAttribute("class", "white");
        imgWhite.style.display= "none";
        imgBlue.style.display="block";
    } else {
        top_div.setAttribute("class", "");
        imgWhite.style.display= "block";
        imgBlue.style.display="none";

    }
};

$(function(){
    //footer 二维码show&hide
  $(".wechat").bind("click",function(){
      $("#mask").css("display","block")
  });
    $("#mask").bind("click",function(){
        $(this).css("display","none")
    });
    //index video show&hide
    $(".video-icon").bind("click",function(){
        $("#indexVideo").css("display","block")
    });
    $("#indexVideo").bind("click",function(){
        $(this).css("display","none")
    });
    //index phone menu
    $(".nav").bind("click",function(){
        $("#nav").css({
            display: 'flex'

        })
    });
    $("#navClose").bind("click",function(){
        //var navWidth = $("#nav").width;
        $("#nav").animate({left:"500px"},500,function(){
            $(this).removeAttr("style")
        });
        //$("#nav").removeAttr("width","0px")
    });
    //library phone menu
    $('[name="phone-select"]').click(function(e){

        $('[name="phone-select"]').find('ul').hide();

        $(this).find('ul').show();

        e.stopPropagation();

    });

    $('[name="phone-select"] li').hover(function(e){

        $(this).toggleClass('on');

        e.stopPropagation();

    });

    $('[name="phone-select"] li').click(function(e){

        var val = $(this).text();

        $(this).parents('[name="phone-select"]').find('input').val(val);

        $('[name="phone-select"] ul').hide();

        e.stopPropagation();

    });

    $(document).click(function(){

        $('[name="phone-select"] ul').hide();

    });

    //
    var screenPhone = screen.width;
    if(screenPhone < 986 ){
        $(".breadcrumb").css("display","none");
        $("#libraryMenu").css("display","none");
    }
});