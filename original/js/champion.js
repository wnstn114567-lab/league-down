//포지션 코드 → 한글
const posName = { top: "탑", jungle: "정글", mid: "미드", adc: "원딜", sup: "서폿" };
const diffText = ["", "쉬움", "보통", "어려움"];

//카드 만들기 - 173명을 HTML에 일일이 쓰지 않고 data.js를 반복문으로 돌려서 만듦
let cards = "";
for (const id in champData) {
    const c = champData[id];
    cards += '<li class="' + c.pos.join(" ") + '" data-diff="' + c.diff + '" data-name="' + c.name + '">'
        + '<a href="#" data-id="' + id + '">'
        + '<img src="' + CD + c.img + '" alt="' + c.name + '" loading="lazy">'
        + '<span class="pos ' + c.pos[0] + '"></span>'
        + '<div class="info">'
        + '<strong>' + c.name + '</strong>'
        + '<em>' + c.title + '</em>'
        + '<span class="diff d' + c.diff + '"><i></i><i></i><i></i></span>'
        + '</div>'
        + '</a></li>';
}
$(".champ-list").html(cards);
$(".count strong").text($(".champ-list > li").length);

//필터 - 포지션, 난이도, 검색어 세 가지를 동시에 적용
let pos = "all";
let diff = "all";
let keyword = "";

function filter() {
    let count = 0;

    $(".champ-list > li").each(function () {
        const okPos = pos === "all" || $(this).hasClass(pos);     // li의 class에 포지션이 들어있음
        const okDiff = diff === "all" || $(this).data("diff") === diff;
        const okName = $(this).data("name").indexOf(keyword) !== -1;

        if (okPos && okDiff && okName) {
            $(this).show();
            count++;
        } else {
            $(this).hide();
        }
    });

    $(".count strong").text(count);
    if (count === 0) {
        $(".empty").show();
    } else {
        $(".empty").hide();
    }
}

//포지션 버튼
$(".pos-btn button").click(function () {
    $(".pos-btn button").removeClass("on");
    $(this).addClass("on");
    pos = $(this).data("pos");
    filter();
});

//난이도 버튼
$(".diff-btn button").click(function () {
    $(".diff-btn button").removeClass("on");
    $(this).addClass("on");
    diff = $(this).data("diff");
    filter();
});

//검색 - 한글은 keyup보다 input 이벤트가 글자 조합 중에도 정확하게 반응함
$("#search").on("input", function () {
    keyword = $(this).val().trim();
    filter();
});

//상세 팝업
let current;    // 지금 팝업에 띄운 챔피언 데이터

function showSkill(n) {
    const s = current.skills[n];
    $(".skills li").removeClass("on");
    $(".skills li").eq(n).addClass("on");
    $(".skill-desc strong").html("<em>" + s.key + "</em>" + s.name);
    $(".skill-desc p").text(s.desc);
}

$(".champ-list a").click(function (e) {
    e.preventDefault();
    current = champData[$(this).data("id")];     // data.js에서 챔피언 정보 꺼내기

    // 포지션이 여러 개면 "탑 · 미드"처럼 이어 붙이기
    const posText = current.pos.map(function (p) { return posName[p]; }).join(" · ");

    $(".champ-pop .portrait img").attr("src", CD + current.img);
    $(".champ-pop .portrait img").attr("alt", current.name);
    $(".champ-pop .meta").html("<span>" + posText + "</span><span>난이도 " + diffText[current.diff] + "</span><span>" + current.dmg + "</span>");
    $(".champ-pop h2").text(current.name);
    $(".champ-pop .title").text(current.title);

    // 스킬 아이콘 5개(P Q W E R) 만들기
    let html = "";
    for (let k = 0; k < current.skills.length; k++) {
        html += '<li><img src="' + CD + current.skills[k].icon + '" alt="' + current.skills[k].name + '"><span>' + current.skills[k].key + '</span></li>';
    }
    $(".skills").html(html);
    showSkill(0);

    $("#popup").fadeIn(200);
});

//스킬 아이콘에 마우스를 올리면 설명이 바뀜 (li는 나중에 만들어지므로 on으로 연결)
$(".skills").on("mouseenter click", "li", function () {
    showSkill($(this).index());
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

//다른 페이지에서 champion.html#Ahri 처럼 들어오면 그 챔피언 팝업을 바로 열기
function openFromHash() {
    if (location.hash) {
        $('.champ-list a[data-id="' + location.hash.slice(1) + '"]').click();
    }
}
openFromHash();
$(window).on("hashchange", openFromHash);   // 같은 페이지에서 주소의 #만 바뀐 경우
