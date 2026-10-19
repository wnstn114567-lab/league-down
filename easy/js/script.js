//메뉴
$("nav>ul>li").mouseover(function(){
    $(".sub, .menuBg").stop().slideDown();
})
$("nav>ul>li").mouseout(function(){
    $(".sub, .menuBg").stop().slideUp();
})

//슬라이드
let i = 0;
function slide(){
    if (i < 2) {
        i++;
    } else {
        i = 0;
    }
    $(".slide ul").animate({ marginLeft: -1200 * i }, 1000);
}
setInterval(slide, 3000);

//탭메뉴
let t;
$(".tabmenu > li > h2 > a").click(function (e) {
    e.preventDefault();                          // a 태그 # 이동 막기
    t = $(this).closest("li").index();           // 클릭한 탭 번호 (0: 패치노트, 1: 스킨)

    $(".tabmenu > li").removeClass("on");        // 탭 색 초기화
    $(".tabmenu > li").eq(t).addClass("on");     // 클릭한 탭만 활성화

    $(".tabcon").hide();                         // 내용 전부 숨기고
    $(".tabcon").eq(t).show();                   // 클릭한 탭 내용만 보이기
});

//팝업 - 클릭한 a 태그의 data-○○ 값을 꺼내서 팝업에 넣기
$(".pop").click(function (e) {
    e.preventDefault();
    $(".popcon .img img").attr("src", $(this).data("img"));    // data-img
    $(".popcon .label").text($(this).data("label"));           // data-label
    $(".popcon h2").text($(this).data("title"));               // data-title
    $(".popcon .desc").html($(this).data("text"));             // data-text (<br>이 있어서 html)
    $("#popup").fadeIn(200);
});

//팝업 닫기
$(".close button").click(function () {
    $("#popup").fadeOut(200);
});

//라인 버튼 (챔피언 페이지)
$(".lane button").click(function () {
    let lane = $(this).data("lane");             // 누른 버튼의 data-lane (all, top, jungle ...)

    $(".lane button").removeClass("on");         // 버튼 색 초기화
    $(this).addClass("on");                      // 누른 버튼만 활성화

    if (lane === "all") {
        $(".champ li").show();                   // 전체면 다 보이기
    } else {
        $(".champ li").hide();                   // 일단 다 숨기고
        $(".champ li." + lane).show();           // 그 라인 class를 가진 것만 보이기
    }
});

//메뉴에서 champion.html#mid 처럼 들어오면 그 라인 버튼을 대신 눌러주기
function laneFromHash() {
    if (location.hash) {
        $(".lane button[data-lane='" + location.hash.slice(1) + "']").click();
    }
}
laneFromHash();
$(window).on("hashchange", laneFromHash);        // 이미 챔피언 페이지일 때 # 만 바뀌는 경우
