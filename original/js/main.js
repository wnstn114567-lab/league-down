//슬라이드
let i = 0;
function slide() {
    if (i < 2) {
        i++;
    } else {
        i = 0;
    }
    $(".slide ul").animate({ marginLeft: -1200 * i }, 800);
    $(".pager li").removeClass("on").eq(i).addClass("on");   // 아래 막대도 같이 이동
}
setInterval(slide, 4000);

//탭메뉴
let t;
$(".tabmenu > li > h2 > a").click(function (e) {
    e.preventDefault();                          // a 태그 # 이동 막기
    t = $(this).closest("li").index();           // 클릭한 탭 번호 (0: 패치노트, 1: 스킨)

    $(".tabmenu > li").removeClass("on");
    $(".tabmenu > li").eq(t).addClass("on");

    $(".tabcon").hide();
    $(".tabcon").eq(t).show();
});

//팝업 - 클릭한 항목의 data-* 내용으로 팝업을 채워서 보여줌
$(".pop").click(function (e) {
    e.preventDefault();
    $(".popcon .img img").attr("src", $(this).data("img"));
    $(".popcon .img img").attr("alt", $(this).data("title"));
    $(".popcon .label").text($(this).data("label"));
    $(".popcon h2").text($(this).data("title"));
    $(".popcon .desc").html($(this).data("text"));   // <br>이 들어있어서 html()로 넣음
    $("#popup").fadeIn(200);
});

//팝업 닫기 (X 버튼, 바깥 어두운 영역)
$(".close button").click(function () {
    $("#popup").fadeOut(200);
});
$("#popup").click(function (e) {
    if (e.target === this) {
        $("#popup").fadeOut(200);
    }
});
