// 티어표 데이터 - ※ 승률·픽률·밴률은 화면 구성을 위한 "예시 수치"입니다.
// 실제 값은 op.gg, lol.ps 같은 통계 사이트에서 확인해 바꿔 넣으세요.
// id는 data.js의 챔피언 키와 같아야 함
// 라인마다 챔피언이 4명이라 S·A·B·C에 한 명씩 넣음

const tierData = {
    top: {
        S: [
            { id: "Darius", win: 52.7, pick: 13.5, ban: 0.5 },
        ],
        A: [
            { id: "Garen", win: 51.2, pick: 9.4, ban: 10.3 },
        ],
        B: [
            { id: "Malphite", win: 50.5, pick: 6.5, ban: 6.4 },
        ],
        C: [
            { id: "Nasus", win: 50.1, pick: 4.2, ban: 5.3 },
        ],
    },
    jungle: {
        S: [
            { id: "LeeSin", win: 52.5, pick: 13.8, ban: 1.6 },
        ],
        A: [
            { id: "Amumu", win: 51.0, pick: 3.6, ban: 14.8 },
        ],
        B: [
            { id: "Warwick", win: 49.9, pick: 2.8, ban: 10.9 },
        ],
        C: [
            { id: "MasterYi", win: 49.7, pick: 3.7, ban: 9.2 },
        ],
    },
    mid: {
        S: [
            { id: "Ahri", win: 53.4, pick: 11.1, ban: 17.6 },
        ],
        A: [
            { id: "Zed", win: 51.7, pick: 9.5, ban: 16.2 },
        ],
        B: [
            { id: "Lux", win: 49.6, pick: 2.1, ban: 10.3 },
        ],
        C: [
            { id: "Annie", win: 48.7, pick: 1.4, ban: 11.1 },
        ],
    },
    adc: {
        S: [
            { id: "Jinx", win: 52.4, pick: 11.6, ban: 12.7 },
        ],
        A: [
            { id: "Ezreal", win: 52.5, pick: 14.9, ban: 15.2 },
        ],
        B: [
            { id: "Caitlyn", win: 51.7, pick: 9.9, ban: 11.8 },
        ],
        C: [
            { id: "Ashe", win: 51.2, pick: 7.1, ban: 14.8 },
        ],
    },
    sup: {
        S: [
            { id: "Thresh", win: 52.2, pick: 10.2, ban: 11.7 },
        ],
        A: [
            { id: "Leona", win: 51.9, pick: 9.0, ban: 10.6 },
        ],
        B: [
            { id: "Sona", win: 50.3, pick: 2.6, ban: 1.4 },
        ],
        C: [
            { id: "Blitzcrank", win: 49.5, pick: 3.7, ban: 4.2 },
        ],
    },
};
