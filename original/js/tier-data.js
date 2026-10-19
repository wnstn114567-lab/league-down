// 티어표 데이터 - ※ 승률·픽률·밴률은 화면 구성을 위한 "예시 수치"입니다.
// 실제 값은 op.gg, lol.ps 같은 통계 사이트에서 확인해 바꿔 넣으세요.
// id는 data.js의 챔피언 키와 같아야 함

const tierData = {
    top: {
        S: [
            { id: "Darius", win: 52.7, pick: 13.5, ban: 0.5 },
            { id: "Sett", win: 52.1, pick: 13.7, ban: 9.8 },
            { id: "Aatrox", win: 52.1, pick: 9.6, ban: 1.4 },
        ],
        A: [
            { id: "Garen", win: 51.2, pick: 9.4, ban: 10.3 },
            { id: "Mordekaiser", win: 51.1, pick: 7.7, ban: 12.0 },
            { id: "Camille", win: 51.4, pick: 8.7, ban: 2.7 },
            { id: "Fiora", win: 51.9, pick: 9.3, ban: 10.9 },
        ],
        B: [
            { id: "Jax", win: 50.7, pick: 4.8, ban: 1.6 },
            { id: "Ornn", win: 50.7, pick: 3.4, ban: 7.3 },
            { id: "Malphite", win: 50.5, pick: 6.5, ban: 6.4 },
            { id: "Renekton", win: 50.3, pick: 3.1, ban: 5.6 },
        ],
        C: [
            { id: "Teemo", win: 48.8, pick: 2.0, ban: 9.7 },
            { id: "Yorick", win: 49.2, pick: 3.1, ban: 1.8 },
            { id: "Gnar", win: 49.8, pick: 1.1, ban: 7.5 },
            { id: "Riven", win: 49.9, pick: 3.1, ban: 1.9 },
        ],
    },
    jungle: {
        S: [
            { id: "LeeSin", win: 52.5, pick: 13.8, ban: 1.6 },
            { id: "Viego", win: 52.6, pick: 11.7, ban: 12.8 },
            { id: "Graves", win: 52.3, pick: 14.1, ban: 7.7 },
        ],
        A: [
            { id: "Khazix", win: 51.7, pick: 7.4, ban: 3.8 },
            { id: "JarvanIV", win: 51.1, pick: 5.4, ban: 9.4 },
            { id: "Vi", win: 51.0, pick: 9.3, ban: 17.7 },
            { id: "Hecarim", win: 51.1, pick: 7.4, ban: 5.0 },
        ],
        B: [
            { id: "Amumu", win: 51.0, pick: 3.6, ban: 14.8 },
            { id: "Elise", win: 50.0, pick: 5.3, ban: 4.5 },
            { id: "Nidalee", win: 50.7, pick: 3.5, ban: 1.5 },
            { id: "Kayn", win: 50.0, pick: 6.8, ban: 13.7 },
        ],
        C: [
            { id: "MasterYi", win: 49.7, pick: 3.7, ban: 9.2 },
            { id: "Warwick", win: 49.9, pick: 2.8, ban: 10.9 },
            { id: "Rammus", win: 48.8, pick: 3.0, ban: 11.1 },
            { id: "Shaco", win: 49.7, pick: 2.6, ban: 4.9 },
        ],
    },
    mid: {
        S: [
            { id: "Ahri", win: 53.4, pick: 11.1, ban: 17.6 },
            { id: "Sylas", win: 52.5, pick: 8.7, ban: 14.4 },
            { id: "Orianna", win: 52.9, pick: 13.6, ban: 12.4 },
        ],
        A: [
            { id: "Syndra", win: 51.8, pick: 9.1, ban: 6.2 },
            { id: "Zed", win: 51.7, pick: 9.5, ban: 16.2 },
            { id: "Yasuo", win: 51.7, pick: 9.3, ban: 7.5 },
            { id: "Viktor", win: 51.0, pick: 9.3, ban: 12.4 },
        ],
        B: [
            { id: "Akali", win: 50.9, pick: 3.7, ban: 4.6 },
            { id: "Yone", win: 50.5, pick: 6.0, ban: 2.5 },
            { id: "Leblanc", win: 50.4, pick: 6.0, ban: 3.9 },
            { id: "Katarina", win: 50.1, pick: 5.4, ban: 3.5 },
        ],
        C: [
            { id: "Annie", win: 48.7, pick: 1.4, ban: 11.1 },
            { id: "Veigar", win: 49.1, pick: 2.5, ban: 1.1 },
            { id: "Galio", win: 49.4, pick: 2.1, ban: 4.2 },
            { id: "Lux", win: 49.6, pick: 2.1, ban: 10.3 },
        ],
    },
    adc: {
        S: [
            { id: "Jinx", win: 52.4, pick: 11.6, ban: 12.7 },
            { id: "Kaisa", win: 53.6, pick: 10.4, ban: 3.4 },
            { id: "Ezreal", win: 52.5, pick: 14.9, ban: 15.2 },
        ],
        A: [
            { id: "Jhin", win: 51.9, pick: 9.1, ban: 2.7 },
            { id: "Caitlyn", win: 51.7, pick: 9.9, ban: 11.8 },
            { id: "Ashe", win: 51.2, pick: 7.1, ban: 14.8 },
            { id: "Varus", win: 51.1, pick: 8.0, ban: 11.1 },
        ],
        B: [
            { id: "MissFortune", win: 50.3, pick: 4.4, ban: 2.7 },
            { id: "Vayne", win: 50.8, pick: 4.1, ban: 13.3 },
            { id: "Smolder", win: 50.1, pick: 3.5, ban: 8.4 },
            { id: "Xayah", win: 50.7, pick: 3.6, ban: 9.9 },
        ],
        C: [
            { id: "Draven", win: 49.2, pick: 2.5, ban: 9.3 },
            { id: "Lucian", win: 49.6, pick: 1.8, ban: 1.8 },
            { id: "Samira", win: 49.7, pick: 2.0, ban: 14.7 },
            { id: "Twitch", win: 49.2, pick: 2.5, ban: 10.6 },
        ],
    },
    sup: {
        S: [
            { id: "Thresh", win: 52.2, pick: 10.2, ban: 11.7 },
            { id: "Nautilus", win: 52.5, pick: 11.2, ban: 15.5 },
            { id: "Lulu", win: 53.4, pick: 11.4, ban: 10.3 },
        ],
        A: [
            { id: "Leona", win: 51.9, pick: 9.0, ban: 10.6 },
            { id: "Rakan", win: 51.1, pick: 7.7, ban: 8.7 },
            { id: "Karma", win: 51.1, pick: 9.2, ban: 7.0 },
            { id: "Bard", win: 51.2, pick: 9.8, ban: 16.9 },
        ],
        B: [
            { id: "Lux", win: 50.6, pick: 5.4, ban: 6.3 },
            { id: "Nami", win: 50.3, pick: 4.5, ban: 2.0 },
            { id: "Pyke", win: 50.5, pick: 6.4, ban: 2.7 },
            { id: "Milio", win: 51.0, pick: 6.8, ban: 11.1 },
        ],
        C: [
            { id: "Blitzcrank", win: 49.5, pick: 3.7, ban: 4.2 },
            { id: "Soraka", win: 49.5, pick: 1.9, ban: 15.6 },
            { id: "Morgana", win: 49.5, pick: 3.1, ban: 13.7 },
            { id: "Zyra", win: 49.9, pick: 1.3, ban: 3.3 },
        ],
    },
};
