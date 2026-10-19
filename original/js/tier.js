//티어표 그리기 - 포지션을 받아서 S~C 줄을 만듦
const tiers = ["S", "A", "B", "C"];

function showTier(p) {
    let html = "";

    for (let k = 0; k < tiers.length; k++) {
        const t = tiers[k];
        html += '<li class="tier-row t' + t + '">';
        html += '<h3>' + t + '<span>접기</span></h3>';
        html += '<div class="champs"><ul>';

        tierData[p][t].forEach(function (item) {
            const c = champData[item.id];       // 이름·아이콘은 data.js에서 가져옴
            html += '<li><a href="champion.html#' + item.id + '" data-pick="' + item.pick.toFixed(1) + '" data-ban="' + item.ban.toFixed(1) + '">'
                + '<img src="' + CD + c.icon + '" alt="' + c.name + '">'
                + '<div><strong>' + c.name + '</strong><span>승률 ' + item.win.toFixed(1) + '%</span></div>'
                + '</a></li>';
        });

        html += '</ul></div></li>';
    }
    $(".tier-list").html(html);
}
showTier("top");

//포지션 탭
$(".pos-btn button").click(function () {
    $(".pos-btn button").removeClass("on");
    $(this).addClass("on");
    showTier($(this).data("pos"));
});

//티어 라벨 클릭 → 그 줄 접기/펼치기 (줄은 탭을 누를 때마다 새로 만들어지므로 on으로 연결)
$(".tier-list").on("click", "h3", function () {
    const row = $(this).parent();
    row.find(".champs").stop().slideToggle(250);
    row.toggleClass("fold");

    if (row.hasClass("fold")) {
        $(this).find("span").text("펼치기");
    } else {
        $(this).find("span").text("접기");
    }
});

//챔피언에 마우스를 올리면 픽률·밴률 말풍선
$(".tier-list").on("mouseenter", "a", function () {
    const off = $(this).offset();               // 문서 기준 위치
    $(".tip").html("픽률 <b>" + $(this).data("pick") + "%</b> · 밴률 <b>" + $(this).data("ban") + "%</b>");
    $(".tip").css({ left: off.left + $(this).outerWidth() / 2, top: off.top - 10 });
    $(".tip").show();
});
$(".tier-list").on("mouseleave", "a", function () {
    $(".tip").hide();
});
