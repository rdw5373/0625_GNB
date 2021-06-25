/* eslint-disable */

$(function(){
    // html문서가 브라우저에 출력되면
    // 익명함수에 있는 추가기능을 실행하세요
    // jQuery 템플릿 코드

    /* 서브메뉴 펼치기 */
    $("li.mainLi").mouseover(function(){   // 1차 기능

        $(this).children("ul.subMenu").stop().slideDown(800);

        // 가로전체형 코드
        // $("ul.subMenu").stop().slideDown(800);   //추가기능
    });

    /* 서브메뉴 올리기 */
    $("li.mainLi").mouseout(function(){

        $(this).children("ul.subMenu").stop().slideUp(300);
        // 가로전제형 코드
        // $("ul.subMenu").stop().slideUp(300);
    });
    //  .stop() 메서드는 메모리 유지기능을 소멸시켜서
    // 사용자의 이벤트가 종료되면 기능 또한 즉시 멈추는 기능



});
