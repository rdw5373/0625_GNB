/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(300);
    });

    $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(800);
    });

});
