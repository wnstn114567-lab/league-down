//아코디언 - 하나를 열면 나머지는 닫힘
$(".acc-head").click(function () {
    const li = $(this).parent();

    if (li.hasClass("on")) {
        // 이미 열려 있으면 닫기
        li.removeClass("on");
        li.find(".acc-body").stop().slideUp(300);
    } else {
        // 열려 있던 것 닫고 이것만 열기
        $(".acc > li.on").removeClass("on").find(".acc-body").stop().slideUp(300);
        li.addClass("on");
        li.find(".acc-body").stop().slideDown(300);
    }
});

//스킬 찍는 순서 (많이 쓰이는 빌드 기준 예시)
// start: 1~3레벨에 찍는 순서 / max: 먼저 5포인트를 채우는(마스터) 순서
const skillOrder = {
    Garen:    { start: "QEW", max: "EQW" },
    Darius:   { start: "QEW", max: "QEW" },
    JarvanIV: { start: "QEW", max: "QEW" },
    LeeSin:   { start: "QWE", max: "QWE" },
    Ahri:     { start: "QWE", max: "QWE" },
    Zed:      { start: "QEW", max: "QEW" },
    Syndra:   { start: "QWE", max: "QWE" },
    Yasuo:    { start: "QEW", max: "QEW" },
    Jinx:     { start: "QWE", max: "QWE" },
    Caitlyn:  { start: "QWE", max: "QWE" },
    Ezreal:   { start: "QEW", max: "QEW" },
    Lux:      { start: "EQW", max: "EQW" },
    Leona:    { start: "QWE", max: "WEQ" }
};

// 1~18레벨에 찍을 스킬 만들기
// 규칙 1. 6·11·16레벨은 궁극기(R)
// 규칙 2. 1~3레벨은 start 순서대로
// 규칙 3. 나머지는 max 순서대로 5포인트까지 (스킬 n단계는 2n-1레벨부터 찍을 수 있음)
function buildOrder(o) {
    const pts = { Q: 0, W: 0, E: 0, R: 0 };
    const levels = [];

    for (let lv = 1; lv <= 18; lv++) {
        let key = "";
        if (lv === 6 || lv === 11 || lv === 16) {
            key = "R";
        } else if (lv <= 3) {
            key = o.start[lv - 1];
        } else {
            for (let k = 0; k < 3; k++) {
                const s = o.max[k];
                if (pts[s] < 5 && pts[s] * 2 + 1 <= lv) {    // 다음 단계를 지금 레벨에 찍을 수 있는지
                    key = s;
                    break;
                }
            }
        }
        pts[key]++;
        levels.push(key);
    }
    return levels;
}

// 표 그리기
function showOrder(id) {
    const c = champData[id];
    const o = skillOrder[id];
    const levels = buildOrder(o);
    const keys = ["Q", "W", "E", "R"];

    let html = "";
    for (let r = 0; r < 4; r++) {
        const s = c.skills[r + 1];          // skills[0]은 패시브라서 +1
        html += '<tr class="' + keys[r].toLowerCase() + '">';
        html += '<th><img src="' + CD + s.icon + '" alt=""><b>' + keys[r] + '</b><span>' + s.name + '</span></th>';
        for (let lv = 0; lv < 18; lv++) {
            if (levels[lv] === keys[r]) {
                html += '<td class="on">' + (lv + 1) + '</td>';
            } else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }
    $(".so-table tbody").html(html);
    $(".so-max").html('마스터 순서 <b>' + o.max[0] + '</b> › <b>' + o.max[1] + '</b> › <b>' + o.max[2] + '</b>');
}

// 챔피언 선택 목록 만들기
let opts = "";
for (const id in skillOrder) {
    opts += '<option value="' + id + '">' + champData[id].name + '</option>';
}
$("#champ-select").html(opts);
showOrder("Garen");

$("#champ-select").on("change", function () {
    showOrder($(this).val());
});
