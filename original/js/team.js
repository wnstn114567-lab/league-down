//기본 값
const slotPos = ["top", "jungle", "mid", "adc", "sup"];   // 슬롯 순서
let team = [null, null, null, null, null];                 // 슬롯마다 고른 챔피언 id
let active = 0;          // 지금 고르는 슬롯 번호
let pickPos = "top";     // 선택창에 보여줄 포지션
let keyword = "";        // 검색어
const counter = { n: 0 };   // 점수 숫자 애니메이션용

//선택창 그리기 - 포지션·검색어에 맞는 챔피언만, 이미 고른 챔피언은 회색 처리
function drawPicker() {
    let html = "";
    for (const id in champData) {
        const c = champData[id];
        if (pickPos !== "all" && c.pos.indexOf(pickPos) === -1) continue;
        if (c.name.indexOf(keyword) === -1) continue;

        let cls = "";
        if (team.indexOf(id) !== -1) cls = "picked";

        html += '<li class="' + cls + '"><a href="#" data-id="' + id + '">'
            + '<img src="' + CD + c.icon + '" alt="' + c.name + '" loading="lazy">'
            + '<span>' + c.name + '</span>'
            + '</a></li>';
    }
    if (html === "") {
        html = '<li class="none">조건에 맞는 챔피언이 없어요</li>';
    }
    $(".picker-list").html(html);
}

//슬롯 5칸 그리기
function drawSlots() {
    $(".slots > li").each(function (k) {
        const id = team[k];
        if (id) {
            $(this).addClass("filled");
            $(this).find(".face").html('<img src="' + CD + champData[id].icon + '" alt="' + champData[id].name + '">');
            $(this).find("strong").text(champData[id].name);
        } else {
            $(this).removeClass("filled");
            $(this).find(".face").html("");
            $(this).find("strong").text("선택하세요");
        }
    });
    $(".slots > li").removeClass("on");
    $(".slots > li").eq(active).addClass("on");
}

//슬롯 선택 - 그 슬롯 포지션으로 선택창을 바꿈
function selectSlot(k) {
    active = k;
    pickPos = slotPos[k];
    $(".picker .pos-btn button").removeClass("on");
    $('.picker .pos-btn button[data-pos="' + pickPos + '"]').addClass("on");
    drawSlots();
    drawPicker();
}

//점수 기준표 - 합계가 a 이상이면 25점, b 이상 18점, c 이상 10점, 그 아래는 0점
function grade(value, a, b, c) {
    if (value >= a) return 25;
    if (value >= b) return 18;
    if (value >= c) return 10;
    return 0;
}

//막대 길이 바꾸기 (값 / 최대값)
function setBar(li, value, max) {
    li.find("i").stop().animate({ width: (value / max * 100) + "%" }, 400);
    li.find("em").text(value);
}

//조합 분석
function analyze() {
    const picked = team.filter(function (id) { return id !== null; });   // 고른 챔피언만

    // ps = [피해량, 내구력, CC, 기동성, 유틸] (data.js 참고)
    let ad = 0, dmg = 0, front = 0, cc = 0, mob = 0;
    picked.forEach(function (id) {
        const c = champData[id];
        if (c.dmg === "AD") ad += 1;
        if (c.dmg === "혼합") ad += 0.5;
        dmg += c.ps[0];
        front += c.ps[1];
        cc += c.ps[2];
        mob += c.ps[3];
    });
    const ap = picked.length - ad;

    // AD/AP 막대
    const total = picked.length || 1;    // 0으로 나누기 방지
    $(".dmg-bar .ad").stop().animate({ width: (ad / total * 100) + "%" }, 400);
    $(".dmg-bar .ap").stop().animate({ width: (ap / total * 100) + "%" }, 400);
    $(".ad-txt").text("AD " + ad);
    $(".ap-txt").text("AP " + ap);

    // 능력치 막대 (5명 × 최대 3 = 15)
    setBar($(".meters li").eq(0), front, 15);
    setBar($(".meters li").eq(1), cc, 15);
    setBar($(".meters li").eq(2), dmg, 15);
    setBar($(".meters li").eq(3), mob, 15);

    // 5명이 다 안 찼으면 점수 대신 안내
    $(counter).stop();                   // 이전 점수 애니메이션이 남아있으면 멈춤
    if (picked.length < 5) {
        $(".score strong").text("--");
        $(".verdict").text((5 - picked.length) + "명 더 고르면 점수가 나와요");
        $(".feedback").html("");
        return;
    }

    // 점수 계산 (각 25점 × 4 = 100점)
    const minType = Math.min(ad, ap);
    let typeScore = 0;
    if (minType >= 2) typeScore = 25;
    else if (minType >= 1) typeScore = 12;

    const score = typeScore + grade(front, 11, 9, 7) + grade(cc, 12, 10, 8) + grade(dmg, 14, 12, 10);

    // 점수 숫자가 0부터 올라가는 효과
    counter.n = 0;
    $(counter).animate({ n: score }, {
        duration: 600,
        step: function (now) {
            $(".score strong").text(Math.round(now));
        }
    });

    // 한 줄 평가
    let verdict;
    if (score >= 90) verdict = "대회에서 봐도 될 조합";
    else if (score >= 75) verdict = "한타 각 나오는 탄탄한 조합";
    else if (score >= 55) verdict = "할 만은 한데 구멍이 있어요";
    else verdict = "밴픽부터 다시 생각해봐요";
    $(".verdict").text(verdict);

    // 항목별 피드백 (good: 잘한 점, warn: 아쉬운 점)
    let fb = "";
    if (ap === 0) fb += '<li class="warn">딜이 전부 물리라 상대가 방어력 아이템만 올려도 막혀요</li>';
    else if (ad === 0) fb += '<li class="warn">전부 마법 피해라 마법 저항력 하나에 딜이 막혀요</li>';
    else if (minType < 2) fb += '<li class="warn">피해 유형이 한쪽으로 쏠려 있어요</li>';
    else fb += '<li class="good">AD·AP 밸런스가 좋아요</li>';

    if (front >= 11) fb += '<li class="good">앞라인이 든든해서 한타를 오래 버텨요</li>';
    else if (front >= 9) fb += '<li class="good">앞라인은 무난한 편이에요</li>';
    else fb += '<li class="warn">앞에서 맞아줄 챔피언이 부족해요. 딜러가 먼저 녹아요</li>';

    if (cc >= 10) fb += '<li class="good">CC가 많아서 한 번 물면 놓치지 않아요</li>';
    else fb += '<li class="warn">묶을 수단이 부족해서 이니시가 어려워요</li>';

    if (dmg >= 12) fb += '<li class="good">딜은 충분해요</li>';
    else fb += '<li class="warn">딜이 부족해서 한타가 길어져요</li>';

    $(".feedback").html(fb);
}

//처음 화면
drawSlots();
drawPicker();
analyze();

//슬롯 클릭
$(".slots > li").click(function () {
    selectSlot($(this).index());
});

//슬롯의 X 버튼 - 그 칸 비우기
$(".slots .del").click(function (e) {
    e.stopPropagation();                  // 슬롯 클릭 이벤트까지 같이 실행되지 않게
    const k = $(this).parent().index();
    team[k] = null;
    selectSlot(k);
    analyze();
});

//선택창에서 챔피언 고르기 (목록은 다시 그려지므로 on으로 연결)
$(".picker-list").on("click", "a", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    if (team.indexOf(id) !== -1) return;     // 이미 고른 챔피언은 무시 (중복 방지)

    team[active] = id;

    // 다음 빈 슬롯으로 자동 이동, 다 찼으면 그대로
    const next = team.indexOf(null);
    if (next !== -1) {
        selectSlot(next);
    } else {
        drawSlots();
        drawPicker();
    }
    analyze();
});

//선택창 포지션 탭
$(".picker .pos-btn button").click(function () {
    $(".picker .pos-btn button").removeClass("on");
    $(this).addClass("on");
    pickPos = $(this).data("pos");
    drawPicker();
});

//검색
$("#search").on("input", function () {
    keyword = $(this).val().trim();
    drawPicker();
});

//예시 조합 불러오기 - data-team="탑,정글,미드,원딜,서폿"
$(".preset button").click(function () {
    team = $(this).data("team").split(",");
    selectSlot(0);
    analyze();
});

//초기화
$(".reset").click(function () {
    team = [null, null, null, null, null];
    selectSlot(0);
    analyze();
});
