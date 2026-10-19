// 근본 챔피언 20명 데이터 - 라인별 4명씩 (도감·티어표·조합·공략 페이지에서 같이 사용)
// 출처: Community Dragon(라이엇 게임 데이터 미러) 한국어 데이터 + Meraki(포지션)
// pos: 포지션 (top 탑 / jungle 정글 / mid 미드 / adc 원딜 / sup 서폿) - 라인별로 고르게 나누려고 한 라인만 넣음
// diff: 난이도 1~3 / dmg: 주 피해 유형
// ps: 플레이 스타일 [피해량, 내구력, CC, 기동성, 유틸] 각 0~3 (라이엇 공식 수치, 조합 점수 계산에 사용)

// 이미지 주소의 공통 앞부분
const CD = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/";

const champData = {
    Garen: {
        name: "가렌", title: "데마시아의 힘", pos: ["top"], diff: 1, dmg: "AD", ps: [2, 3, 1, 1, 1],
        icon: "v1/champion-icons/86.png",
        img: "assets/characters/garen/skins/base/garenloadscreen.jpg",
        skills: [
            { key: "P", name: "인내심", icon: "assets/characters/garen/hud/icons2d/garen_passive.png",
              desc: "가렌이 잠시 적의 기본 공격 및 스킬 공격에 맞지 않으면 1초마다 총 체력의 일정 비율씩 회복됩니다." },
            { key: "Q", name: "결정타", icon: "assets/characters/garen/hud/icons2d/garen_q.png",
              desc: "가렌의 이동 속도가 큰 폭으로 증가하고 현재 걸려 있는 모든 둔화 효과가 제거됩니다. 가렌의 다음 공격은 적의 급소를 가격하여 추가 피해를 입히고 침묵시킵니다." },
            { key: "W", name: "용기", icon: "assets/characters/garen/hud/icons2d/garen_w.png",
              desc: "가렌은 적을 처치하면 기본 지속 효과로 방어력과 마법 저항력이 증가합니다. 또한 효과가 활성화되면 잠시 동안 보호막과 강인함이 부여되며 이후에는 좀 더 긴 시간 동안 받는 피해량 감소 효과가 약하게 적용됩니다." },
            { key: "E", name: "심판", icon: "assets/characters/garen/hud/icons2d/garen_e1.png",
              desc: "가렌이 검을 들고 빠르게 회전하여 주변 적에게 물리 피해를 입힙니다." },
            { key: "R", name: "데마시아의 정의", icon: "assets/characters/garen/hud/icons2d/garen_r.png",
              desc: "가렌이 적 챔피언을 처단할 데마시아의 힘을 소환합니다." },
        ]
    },
    Darius: {
        name: "다리우스", title: "녹서스의 실력자", pos: ["top"], diff: 2, dmg: "AD", ps: [3, 2, 2, 1, 1],
        icon: "v1/champion-icons/122.png",
        img: "assets/characters/darius/skins/base/dariusloadscreen.jpg",
        skills: [
            { key: "P", name: "과다출혈", icon: "assets/characters/darius/hud/icons2d/darius_icon_hemorrhage.png",
              desc: "다리우스의 기본 공격과 스킬 공격은 적에게 출혈을 일으켜 5초 동안 물리 피해를 입힙니다. 최대 5회까지 중첩됩니다. 최대 중첩 시 다리우스가 분노하며 공격력이 크게 증가합니다." },
            { key: "Q", name: "학살", icon: "assets/characters/darius/hud/icons2d/darius_icon_decimate.png",
              desc: "다리우스가 도끼를 큰 원의 형태로 휘두릅니다. 도끼날에 맞은 적들은 도끼자루에 맞은 적들보다 더 큰 피해를 입습니다. 다리우스는 도끼날에 맞은 적 챔피언과 대형 몬스터의 수에 비례하여 체력이 회복됩니다." },
            { key: "W", name: "마비의 일격", icon: "assets/characters/darius/hud/icons2d/darius_icon_hamstring.png",
              desc: "다리우스의 다음 공격은 적의 대동맥을 가격합니다. 적들이 출혈을 일으키면서 이동 속도가 감소합니다." },
            { key: "E", name: "포획", icon: "assets/characters/darius/hud/icons2d/darius_icon_axe_grab.png",
              desc: "다리우스가 도끼날을 날카롭게 세워, 물리 피해를 가할 때 대상의 방어력 중 일정 비율을 무시합니다. 스킬을 사용하면 다리우스가 도끼의 갈고리 부분으로 적들을 휘감아 자기 쪽으로 끌어당깁니다." },
            { key: "R", name: "녹서스의 단두대", icon: "assets/characters/darius/hud/icons2d/darius_icon_sudden_death.png",
              desc: "다리우스가 적 챔피언에게 뛰어올라 치명적 타격을 가해 고정 피해를 입힙니다. 대상에 중첩된 과다출혈에 비례하여 피해량이 증가합니다. 녹서스의 단두대로 적을 처치하는 경우, 잠시 동안 재사용 대기시간이 초기화됩니다." },
        ]
    },
    Malphite: {
        name: "말파이트", title: "거석의 파편", pos: ["top"], diff: 1, dmg: "AP", ps: [1, 3, 3, 1, 1],
        icon: "v1/champion-icons/54.png",
        img: "assets/characters/malphite/skins/base/malphiteloadscreen.jpg",
        skills: [
            { key: "P", name: "화강암 방패", icon: "assets/characters/malphite/hud/icons2d/malphite_passive.png",
              desc: "말파이트는 여러 겹의 돌로 감싸여 있어 자신의 최대 체력 10%만큼의 피해를 흡수할 수 있습니다. 말파이트가 몇 초 동안 공격 받지 않으면 보호막이 재생성됩니다." },
            { key: "Q", name: "지진의 파편", icon: "assets/characters/malphite/hud/icons2d/malphite_q.png",
              desc: "말파이트가 땅을 통해 대지의 조각을 날려 피해를 입히며 3초 동안 이동 속도를 훔칩니다." },
            { key: "W", name: "천둥소리", icon: "assets/characters/malphite/hud/icons2d/malphite_w.png",
              desc: "말파이트가 굉음을 내며 공격합니다. 이후 수 초 동안 말파이트의 공격이 전방에 여진을 일으킵니다." },
            { key: "E", name: "지면 강타", icon: "assets/characters/malphite/hud/icons2d/malphite_e.png",
              desc: "말파이트가 땅을 내리쳐 충격파를 만들어 냅니다. 충격파는 말파이트 방어력의 일부에 해당하는 마법 피해를 입히며, 이에 맞은 적은 잠시 동안 공격 속도가 감소합니다." },
            { key: "R", name: "멈출 수 없는 힘", icon: "assets/characters/malphite/hud/icons2d/malphite_r.png",
              desc: "말파이트가 목표 위치로 돌진하여 적에게 피해를 입히고 공중으로 띄워 올립니다." },
        ]
    },
    Nasus: {
        name: "나서스", title: "사막의 관리자", pos: ["top"], diff: 1, dmg: "AD", ps: [2, 3, 2, 1, 1],
        icon: "v1/champion-icons/75.png",
        img: "assets/characters/nasus/skins/base/nasusloadscreen.jpg",
        skills: [
            { key: "P", name: "영혼의 포식자", icon: "assets/characters/nasus/hud/icons2d/nasus_passive.png",
              desc: "나서스는 적의 영혼을 흡수하여 추가 생명력 흡수 효과를 얻습니다." },
            { key: "Q", name: "흡수의 일격", icon: "assets/characters/nasus/hud/icons2d/nasus_q.png",
              desc: "나서스가 적을 공격하여 피해를 입힙니다. 흡수의 일격으로 대상을 처치할 경우 흡수의 일격 스킬이 강화됩니다." },
            { key: "W", name: "쇠약", icon: "assets/characters/nasus/hud/icons2d/nasus_w.png",
              desc: "나서스가 적 챔피언의 노화를 촉진시켜 이동 속도와 공격 속도를 점진적으로 늦춥니다." },
            { key: "E", name: "영혼의 불길", icon: "assets/characters/nasus/hud/icons2d/nasus_e.png",
              desc: "나서스가 영혼의 불꽃을 일으켜 해당 지역에 서 있는 적에게 피해를 입히고 방어력을 낮춥니다." },
            { key: "R", name: "사막의 분노", icon: "assets/characters/nasus/hud/icons2d/nasus_r.png",
              desc: "나서스가 강력한 모래 폭풍을 소환하여 주변의 적을 강타합니다. 나서스는 폭풍이 부는 동안 체력과 공격 범위가 증가하며, 주변의 적에게 피해를 입히고, 흡수의 일격 재사용 대기시간이 감소하며, 추가 방어력과 마법 저항력을 얻습니다." },
        ]
    },
    LeeSin: {
        name: "리 신", title: "눈먼 수도승", pos: ["jungle"], diff: 3, dmg: "AD", ps: [3, 2, 2, 3, 1],
        icon: "v1/champion-icons/64.png",
        img: "assets/characters/leesin/skins/base/leesinloadscreen_0.jpg",
        skills: [
            { key: "P", name: "질풍격", icon: "assets/characters/leesin/hud/icons2d/leesinp.png",
              desc: "리 신이 스킬을 사용하면 다음 두 번의 기본 공격 속도가 증가하며 기력을 회복합니다." },
            { key: "Q", name: "음파 / 공명의 일격", icon: "assets/characters/leesin/hud/icons2d/leesinq1.png",
              desc: "음파: 리 신이 음파를 발사하여 적의 위치를 파악하며, 음파에 맞은 적에게 물리 피해를 입힙니다. 적이 음파에 명중하면 다음 3초 안에 공명의 일격을 시전할 수 있습니다. 공명의 일격: 리 신이 음파에 맞은 적에게 돌격해 적이 잃은 체력에 비례한 물리 피해를 입힙니다." },
            { key: "W", name: "방호 / 강철의 의지", icon: "assets/characters/leesin/hud/icons2d/leesinw1.png",
              desc: "방호: 리 신이 대상 아군에게 돌격하여 자신에게 피해를 흡수하는 보호막을 생성합니다. 해당 아군이 챔피언일 경우 아군에게도 보호막이 적용됩니다. 방호를 사용하고 난 뒤 강철의 의지를 시전할 수 있습니다. 강철의 의지: 고된 수행으로 리 신이 전투에서 보다 잘 살아남을 수 있게 됩니다. 모든 피해 흡혈 효과를 얻습니다." },
            { key: "E", name: "폭풍/무력화", icon: "assets/characters/leesin/hud/icons2d/leesine1.png",
              desc: "폭풍: 리 신이 바닥을 내리쳐 마법 피해를 입히고 은신한 유닛을 드러내는 충격파를 발생시킵니다. 폭풍이 적에게 명중하면 무력화를 사용할 수 있습니다. 무력화: 리 신이 폭풍에 피해를 입은 적을 약화시키며 이동 속도를 낮춥니다. 저하된 이동 속도는 시간이 지남에 따라 점차 회복됩니다." },
            { key: "R", name: "용의 분노", icon: "assets/characters/leesin/hud/icons2d/leesinr.png",
              desc: "리 신이 강력한 돌려차기로 적 챔피언을 뒤로 밀어내고 공격 대상과 대상과 부딪히는 모든 적에게 물리 피해를 입힙니다. 공격 대상과 부딪힌 적은 짧은 시간 공중에 떠오릅니다. 이 기술은 제시 페링이 전수한 기술이지만, 리 신은 적을 맵 밖으로 날려버리지는 않습니다." },
        ]
    },
    MasterYi: {
        name: "마스터 이", title: "우주 검사", pos: ["jungle"], diff: 1, dmg: "AD", ps: [3, 1, 1, 2, 1],
        icon: "v1/champion-icons/11.png",
        img: "assets/characters/masteryi/skins/base/masteryiloadscreen.jpg",
        skills: [
            { key: "P", name: "2연속 공격", icon: "assets/characters/masteryi/hud/icons2d/masteryi_passive1.png",
              desc: "마스터 이는 몇 차례 연속으로 기본 공격을 한 이후에 2번 연속 공격합니다." },
            { key: "Q", name: "일격 필살", icon: "assets/characters/masteryi/hud/icons2d/masteryi_q.png",
              desc: "마스터 이가 전장을 순식간에 가로질러 여러 명의 적 유닛에게 물리 피해를 입히며, 그동안 대상으로 지정할 수 없는 상태가 됩니다. 일격 필살은 치명타가 발동하며 몬스터에게 추가 물리 피해를 입힐 수 있습니다. 기본 공격을 하면 일격 필살의 재사용 대기시간이 감소합니다." },
            { key: "W", name: "명상", icon: "assets/characters/masteryi/hud/icons2d/masteryi_w.png",
              desc: "마스터 이가 정신을 집중하며 체력을 회복해, 짧은 시간 동안 받는 피해량이 감소합니다. 정신을 집중하는 동안 매초 2연속 공격 중첩을 얻고 최후의 전사와 우주류 검술의 남은 지속시간이 일시 정지됩니다." },
            { key: "E", name: "우주류 검술", icon: "assets/characters/masteryi/hud/icons2d/masteryi_e1.png",
              desc: "기본 공격에 추가 고정 피해가 적용됩니다." },
            { key: "R", name: "최후의 전사", icon: "assets/characters/masteryi/hud/icons2d/masteryi_r.png",
              desc: "마스터 이가 엄청난 속도로 이동하며 순간적으로 자신의 이동 속도와 공격 속도를 높이고 모든 둔화 효과에 대해 면역이 됩니다. 스킬이 활성화된 동안 적 챔피언을 처치하거나 어시스트를 올리면 최후의 전사 지속시간이 늘어납니다. 적 챔피언을 처치하거나 어시스트를 올리면 기본 지속 효과로 다른 스킬들의 재사용 대기시간이 감소합니다." },
        ]
    },
    Warwick: {
        name: "워윅", title: "자운의 고삐 풀린 분노", pos: ["jungle"], diff: 1, dmg: "혼합", ps: [2, 2, 2, 1, 1],
        icon: "v1/champion-icons/19.png",
        img: "assets/characters/warwick/skins/base/warwickloadscreen.jpg",
        skills: [
            { key: "P", name: "끝없는 허기", icon: "assets/characters/warwick/hud/icons2d/warwickp.png",
              desc: "워윅이 기본 공격 시 추가 마법 피해를 입힙니다. 워윅의 체력이 50% 아래로 내려가면 추가 피해량만큼 체력을 회복합니다. 체력이 25% 아래로 내려가면 체력 회복량이 세 배로 증가합니다." },
            { key: "Q", name: "야수의 송곳니", icon: "assets/characters/warwick/hud/icons2d/warwickq.png",
              desc: "워윅이 앞으로 도약해 대상을 물고 대상 최대 체력에 비례한 피해를 입힙니다. 이때 워윅은 입힌 피해량만큼 체력을 회복합니다." },
            { key: "W", name: "피의 사냥", icon: "assets/characters/warwick/hud/icons2d/warwickw.png",
              desc: "체력이 50% 미만인 적을 감지합니다. 이 대상에게 이동할 때는 워윅의 이동 속도가 증가하고 대상에 대한 공격 속도도 증가합니다. 적의 체력이 25% 아래로 내려가면 워윅이 광분하며 추가 효과가 세 배로 증가합니다." },
            { key: "E", name: "원시의 포효", icon: "assets/characters/warwick/hud/icons2d/warwicke.png",
              desc: "2.5초 동안 워윅이 입는 피해가 감소합니다. 지속시간이 종료되거나 스킬을 재사용하면 워윅이 포효하며 근처의 모든 적을 1초 동안 도망치게 합니다." },
            { key: "R", name: "무한의 구속", icon: "assets/characters/warwick/hud/icons2d/warwickr.png",
              desc: "워윅이 지정한 방향으로 도약해 (도약 거리는 추가 이동 속도에 비례) 첫 번째로 부딪힌 챔피언을 1.5초 동안 제압합니다." },
        ]
    },
    Amumu: {
        name: "아무무", title: "슬픈 미라", pos: ["jungle"], diff: 1, dmg: "AP", ps: [2, 3, 3, 1, 1],
        icon: "v1/champion-icons/32.png",
        img: "assets/characters/amumu/skins/base/amumuloadscreen.jpg",
        skills: [
            { key: "P", name: "저주의 손길", icon: "assets/characters/amumu/hud/icons2d/amumu_passive.png",
              desc: "아무무의 기본 공격을 받은 대상은 저주에 걸려 마법 피해를 입을 때마다 추가 고정 피해를 받습니다." },
            { key: "Q", name: "붕대 던지기", icon: "assets/characters/amumu/hud/icons2d/amumu_q.png",
              desc: "아무무가 끈적끈적한 붕대를 던져 적을 기절시키고 피해를 입히며 가까이 이동합니다." },
            { key: "W", name: "절망", icon: "assets/characters/amumu/hud/icons2d/amumu_w.png",
              desc: "적이 절망으로 인해 매 초마다 최대 체력에 비례한 피해를 입고 저주가 초기화됩니다." },
            { key: "E", name: "짜증내기", icon: "assets/characters/amumu/hud/icons2d/amumu_e.png",
              desc: "아무무가 받는 물리 피해를 영구적으로 감소시킵니다. 활성화 시 아무무가 주변 적에게 분노를 방출합니다. 아무무가 공격당할 때마다 짜증내기의 재사용 대기시간이 감소합니다." },
            { key: "R", name: "슬픈 미라의 저주", icon: "assets/characters/amumu/hud/icons2d/amumu_r.png",
              desc: "아무무가 붕대로 주변 유닛을 휘감아 저주를 내리고 피해를 입히며 기절시킵니다." },
        ]
    },
    Ahri: {
        name: "아리", title: "구미호", pos: ["mid"], diff: 2, dmg: "AP", ps: [3, 1, 2, 3, 1],
        icon: "v1/champion-icons/103.png",
        img: "assets/characters/ahri/skins/base/ahriloadscreen_0.jpg",
        skills: [
            { key: "P", name: "정기 흡수", icon: "assets/characters/ahri/hud/icons2d/icons_ahri_passive.png",
              desc: "아리가 미니언 또는 몬스터를 9마리 처치하면 체력을 회복합니다. 아리가 적 챔피언 처치에 관여하면 더 많은 체력을 회복합니다." },
            { key: "Q", name: "현혹의 구슬", icon: "assets/characters/ahri/hud/icons2d/icons_ahri_q.png",
              desc: "아리가 구슬을 던지고 다시 받습니다. 던질 때는 마법 피해를 주며 돌아올 때는 고정 피해를 줍니다." },
            { key: "W", name: "여우불", icon: "assets/characters/ahri/hud/icons2d/icons_ahri_w.png",
              desc: "아리의 이동 속도가 잠시 동안 크게 증가하며 아리가 여우불 세 개를 생성하면, 각각 자동으로 적을 찾아 공격합니다." },
            { key: "E", name: "매혹", icon: "assets/characters/ahri/hud/icons2d/icons_ahri_e.png",
              desc: "아리가 입맞춤을 날려 피해를 주며 맞은 적을 홀립니다. 홀린 적은 즉시 이동 스킬을 멈추고 아리 쪽으로 무작정 다가갑니다." },
            { key: "R", name: "혼령 질주", icon: "assets/characters/ahri/hud/icons2d/icons_ahri_r.png",
              desc: "아리가 전방으로 질주하며 근처 적 챔피언들에게 혼령의 정기를 쏘아냅니다. 재사용 대기시간이 적용되기 전에 최대 세 번까지 사용할 수 있으며, 적 챔피언 처치 관여 시 재사용 가능 횟수가 늘어납니다." },
        ]
    },
    Zed: {
        name: "제드", title: "그림자의 주인", pos: ["mid"], diff: 3, dmg: "AD", ps: [3, 1, 1, 3, 1],
        icon: "v1/champion-icons/238.png",
        img: "assets/characters/zed/skins/base/zedloadscreen.jpg",
        skills: [
            { key: "P", name: "약자 멸시", icon: "assets/characters/zed/hud/icons2d/zedp.png",
              desc: "제드가 체력이 낮은 적을 기본 공격하면 마법 피해를 추가로 입힙니다. 같은 적 챔피언에게는 몇 초가 지나야 이 효과가 다시 적용됩니다." },
            { key: "Q", name: "예리한 표창", icon: "assets/characters/zed/hud/icons2d/zedq.png",
              desc: "제드와 그림자가 표창을 던집니다. 각 표창은 적에게 명중하면 피해를 입힙니다." },
            { key: "W", name: "살아있는 그림자", icon: "assets/characters/zed/hud/icons2d/zedw.png",
              desc: "기본 지속 효과: 제드와 그림자가 같은 스킬로 동일한 대상을 공격하면 제드가 기력을 회복합니다. 기력 회복은 스킬 사용 시마다 한 번씩만 가능합니다. 사용 시: 제드의 그림자가 전방으로 질주하여, 몇 초간 그 자리에 유지됩니다. 이 스킬을 다시 사용하면 제드가 그림자와 위치를 바꿉니다." },
            { key: "E", name: "그림자 베기", icon: "assets/characters/zed/hud/icons2d/zede.png",
              desc: "제드와 그림자가 각각 주위 적을 베어 피해를 입힙니다. 그림자의 공격에 맞은 적은 둔화됩니다." },
            { key: "R", name: "죽음의 표식", icon: "assets/characters/zed/hud/icons2d/zedr.png",
              desc: "제드가 잠시 대상으로 지정할 수 없는 상태가 되어 적 챔피언에게 돌진하며 표식을 남깁니다. 3초가 지나면 표식이 발동되며 표식이 적용된 동안 제드가 대상에게 가한 피해의 일부를 입힙니다." },
        ]
    },
    Lux: {
        name: "럭스", title: "광명의 소녀", pos: ["mid"], diff: 1, dmg: "AP", ps: [3, 1, 2, 1, 2],
        icon: "v1/champion-icons/99.png",
        img: "assets/characters/lux/skins/base/luxloadscreen.jpg",
        skills: [
            { key: "P", name: "광채", icon: "assets/characters/lux/hud/icons2d/luxilluminatingfraulein.png",
              desc: "럭스의 공격 스킬은 몇 초 동안 적을 빛의 에너지로 가득 채웁니다. 럭스의 기본 공격으로 이 에너지를 불태우면 적은 럭스의 레벨에 비례하는 추가 마법 피해를 받습니다." },
            { key: "Q", name: "빛의 속박", icon: "assets/characters/lux/hud/icons2d/luxcrashingblitz2.png",
              desc: "럭스가 빛의 구를 발사하여 최대 2명의 적 유닛을 속박하며 피해를 입힙니다." },
            { key: "W", name: "프리즘 보호막", icon: "assets/characters/lux/hud/icons2d/luxprismawrap.png",
              desc: "럭스가 마법봉을 던져 아군 주변의 빛을 구부리며 적의 공격으로부터 보호해줍니다." },
            { key: "E", name: "광휘의 특이점", icon: "assets/characters/lux/hud/icons2d/luxlightstrikekugel.png",
              desc: "지정한 지역에 뒤틀린 빛의 구체를 띄워 주변 적의 속도를 늦춥니다. 럭스는 이 빛을 폭발시켜 피해를 입힐 수 있습니다." },
            { key: "R", name: "최후의 섬광", icon: "assets/characters/lux/hud/icons2d/luxfinalefunkeln.png",
              desc: "럭스가 에너지를 모아 빛 기둥을 발사하며 목표 지역에 있는 모든 대상에게 피해를 입힙니다. 또한 이는 럭스의 기본 지속 효과 스킬을 발동시키고 광채 효과의 지속시간을 갱신합니다." },
        ]
    },
    Annie: {
        name: "애니", title: "어둠의 아이", pos: ["mid"], diff: 1, dmg: "AP", ps: [3, 1, 3, 1, 2],
        icon: "v1/champion-icons/1.png",
        img: "assets/characters/annie/skins/base/annieloadscreen.jpg",
        skills: [
            { key: "P", name: "방화광", icon: "assets/characters/annie/hud/icons2d/annie_passive.png",
              desc: "애니가 스킬을 4번 사용한 후 다음 공격 스킬에 맞은 적은 기절합니다. 애니가 게임을 시작하고 방화광을 사용할 수 있는 상태로 재생성됩니다." },
            { key: "Q", name: "붕괴", icon: "assets/characters/annie/hud/icons2d/annie_q.png",
              desc: "애니가 마나로 가득 찬 화염구를 던져 피해를 입히고 결정타를 냈을 때 사용한 마나를 되돌려 받습니다." },
            { key: "W", name: "소각", icon: "assets/characters/annie/hud/icons2d/annie_w.png",
              desc: "애니가 원뿔 형태의 화염을 내뿜어 해당 지역에 있는 모든 적에게 피해를 입힙니다." },
            { key: "E", name: "용암 방패", icon: "assets/characters/annie/hud/icons2d/annie_e.png",
              desc: "애니나 아군에게 보호막을 부여하고 이동 속도가 증가하며, 기본 공격이나 스킬로 공격하는 적에게 피해를 입힙니다." },
            { key: "R", name: "소환: 티버", icon: "assets/characters/annie/hud/icons2d/annie_r1.png",
              desc: "애니가 자신의 곰 티버를 되살려 지정 구역에 있는 유닛에게 피해를 입힙니다. 티버는 주변의 적을 공격하거나 불태울 수도 있습니다." },
        ]
    },
    Ashe: {
        name: "애쉬", title: "서리 궁수", pos: ["adc"], diff: 1, dmg: "AD", ps: [2, 1, 3, 1, 2],
        icon: "v1/champion-icons/22.png",
        img: "assets/characters/ashe/skins/base/asheloadscreen.jpg",
        skills: [
            { key: "P", name: "서리 화살", icon: "assets/characters/ashe/hud/icons2d/ashe_p.png",
              desc: "애쉬의 공격을 받은 대상이 느려지며, 이 대상에 대한 애쉬의 공격력이 상승합니다. 애쉬의 치명타는 추가 피해를 가하지 않는 대신, 대상에게 더 강력한 둔화를 적용합니다." },
            { key: "Q", name: "궁사의 집중", icon: "assets/characters/ashe/hud/icons2d/ashe_q.png",
              desc: "애쉬는 공격을 계속하면 집중이 오릅니다. 집중 중첩이 최대치에 이르면 이를 모두 소모해 애쉬가 궁사의 집중을 사용할 수 있으며, 이 때 애쉬의 공격 속도가 잠시 동안 증가하고 그 동안 기본 공격이 강력한 다발 공격으로 변합니다." },
            { key: "W", name: "일제 사격", icon: "assets/characters/ashe/hud/icons2d/ashe_w.png",
              desc: "애쉬가 화살을 원뿔 모양으로 발사하여 더 큰 피해를 입힙니다. 이때 서리 화살의 효과도 적용됩니다." },
            { key: "E", name: "매 날리기", icon: "assets/characters/ashe/hud/icons2d/ashe_e.png",
              desc: "애쉬가 매의 혼을 맵 어느 위치든 날려보내 정찰을 시킵니다." },
            { key: "R", name: "마법의 수정화살", icon: "assets/characters/ashe/hud/icons2d/ashe_r.png",
              desc: "애쉬가 얼음으로 된 화살을 발사합니다. 화살이 적 챔피언에 맞을 경우 피해를 입히고 화살 발사 거리에 따라 더 오랜 시간 기절시킵니다. 또한 주변 적 유닛 역시 피해를 받고 속도가 느려집니다." },
        ]
    },
    Ezreal: {
        name: "이즈리얼", title: "무모한 탐험가", pos: ["adc"], diff: 3, dmg: "AD", ps: [1, 1, 1, 1, 1],
        icon: "v1/champion-icons/81.png",
        img: "assets/characters/ezreal/skins/base/ezrealloadscreen.jpg",
        skills: [
            { key: "P", name: "끓어오르는 주문의 힘", icon: "assets/characters/ezreal/hud/icons2d/ezreal_passive.png",
              desc: "이즈리얼이 스킬을 적중시킬 때마다 공격 속도가 증가합니다. (최대 5회 중첩)" },
            { key: "Q", name: "신비한 화살", icon: "assets/characters/ezreal/hud/icons2d/ezreal_q.png",
              desc: "이즈리얼이 에너지로 이루어진 화살을 발사합니다. 적 유닛에게 명중하면 모든 스킬의 재사용 대기시간이 약간 감소합니다." },
            { key: "W", name: "정수의 흐름", icon: "assets/characters/ezreal/hud/icons2d/ezreal_w.png",
              desc: "이즈리얼이 구체를 발사해 처음으로 적중한 챔피언이나 목표물에 남아있게 합니다. 구체에 적중된 적을 공격하면 구체가 폭발하며 피해를 입힙니다." },
            { key: "E", name: "비전 이동", icon: "assets/characters/ezreal/hud/icons2d/ezreal_e.png",
              desc: "이즈리얼이 목표 위치로 순간이동하여 가장 가까운 적을 향해 유도 화살을 발사합니다. 정수의 흐름에 맞은 대상을 우선적으로 공격합니다." },
            { key: "R", name: "정조준 일격", icon: "assets/characters/ezreal/hud/icons2d/ezreal_r.png",
              desc: "이즈리얼이 힘을 모은 후 강력한 에너지를 발사해 관통하는 적 모두에게 큰 피해를 입힙니다. (에픽 몬스터를 제외한 몬스터와 미니언 대상으로는 피해량이 감소합니다.)" },
        ]
    },
    Jinx: {
        name: "징크스", title: "난폭한 말괄량이", pos: ["adc"], diff: 2, dmg: "AD", ps: [3, 1, 2, 1, 1],
        icon: "v1/champion-icons/222.png",
        img: "assets/characters/jinx/skins/base/jinxloadscreen.jpg",
        skills: [
            { key: "P", name: "신난다!", icon: "assets/characters/jinx/hud/icons2d/jinx_passive.png",
              desc: "징크스는 적 챔피언이나 에픽 정글 몬스터 처치에 관여하거나 구조물 파괴를 도우면 이동 속도와 공격 속도가 대폭 상승합니다." },
            { key: "Q", name: "휘릭휘릭!", icon: "assets/characters/jinx/hud/icons2d/jinx_q1.png",
              desc: "징크스는 '빵야빵야' 미니건과 '생선대가리' 로켓 런처 중에서 원하는 것을 선택하여 기본 공격을 변경할 수 있습니다. 미니건으로 공격하면 공격 속도가 상승하고, 로켓 런처로 공격하면 광역 피해를 입히고 사거리가 증가하지만 마나가 소모되고 공격 속도가 느려집니다." },
            { key: "W", name: "빠직!", icon: "assets/characters/jinx/hud/icons2d/jinx_w.png",
              desc: "징크스가 빠직!으로 전기 충격파를 발사해 처음 적중한 적을 둔화시키고 위치를 드러내며 피해를 입힙니다." },
            { key: "E", name: "와작와작 뻥!", icon: "assets/characters/jinx/hud/icons2d/jinx_e.png",
              desc: "징크스가 와작와작 지뢰를 일렬로 던지면 5초 후에 폭발하며 주변 적들을 불태웁니다. 와작와작 지뢰는 적 챔피언이 밟으면 물어뜯어 제자리에 묶습니다." },
            { key: "R", name: "초강력 초토화 로켓!", icon: "assets/characters/jinx/hud/icons2d/jinx_r.png",
              desc: "징크스가 맵을 가로지르는 강력한 로켓을 발사합니다. 발사 후 비행 거리에 비례해 로켓의 피해량이 증가합니다. 로켓은 적 챔피언과 충돌하면 폭발하며, 해당 챔피언과 주위의 적에게 잃은 체력에 비례하여 피해를 입힙니다." },
        ]
    },
    Caitlyn: {
        name: "케이틀린", title: "필트오버의 보안관", pos: ["adc"], diff: 1, dmg: "AD", ps: [3, 1, 2, 2, 1],
        icon: "v1/champion-icons/51.png",
        img: "assets/characters/caitlyn/skins/base/caitlynloadscreen_0.jpg",
        skills: [
            { key: "P", name: "헤드샷", icon: "assets/characters/caitlyn/hud/icons2d/caitlynp.png",
              desc: "케이틀린은 덫 또는 투망에 걸린 대상을 공격할 때나 일정 횟수 이상의 기본 공격을 했을 때 헤드샷을 발사하여 치명타 확률에 비례한 추가 피해를 입힙니다. 덫에 걸리거나 투망에 맞은 대상에게는 케이틀린의 헤드샷 공격 사거리가 두 배가 됩니다." },
            { key: "Q", name: "필트오버 피스메이커", icon: "assets/characters/caitlyn/hud/icons2d/caitlynq.png",
              desc: "케이틀린이 소총을 1초 동안 조준한 후 관통하는 탄환을 발사하여 물리 피해를 입힙니다. (다음 명중하는 대상에게는 더 낮은 피해가 들어갑니다.)" },
            { key: "W", name: "요들잡이 덫", icon: "assets/characters/caitlyn/hud/icons2d/caitlynw.png",
              desc: "케이틀린이 함정을 설치합니다. 함정이 발동하면 함정에 걸린 적 챔피언은 1.5초간 모습이 드러나며 이동할 수 없게 되고, 케이틀린의 헤드샷이 강화됩니다." },
            { key: "E", name: "90구경 투망", icon: "assets/characters/caitlyn/hud/icons2d/caitlyne.png",
              desc: "케이틀린이 무거운 그물을 발사하여 적을 느리게 합니다. 그 반동으로 케이틀린은 뒤로 밀려납니다." },
            { key: "R", name: "비장의 한 발", icon: "assets/characters/caitlyn/hud/icons2d/caitlynr.png",
              desc: "케이틀린이 공을 들인 완벽한 사격을 하여 먼 거리에서 하나의 대상에게 큰 피해를 입힙니다. 적 챔피언이 자신의 아군을 위해 총알을 막아낼 수 있습니다." },
        ]
    },
    Thresh: {
        name: "쓰레쉬", title: "지옥의 간수", pos: ["sup"], diff: 3, dmg: "AP", ps: [1, 2, 3, 1, 3],
        icon: "v1/champion-icons/412.png",
        img: "assets/characters/thresh/skins/base/threshloadscreen.jpg",
        skills: [
            { key: "P", name: "지옥살이", icon: "assets/characters/thresh/hud/icons2d/thresh_passive.png",
              desc: "쓰레쉬는 근처에서 처치된 적의 영혼을 포획해 방어력과 주문력을 영구적으로 올릴 수 있습니다." },
            { key: "Q", name: "사형 선고", icon: "assets/characters/thresh/hud/icons2d/thresh_q.png",
              desc: "쓰레쉬가 쇠사슬로 적을 묶어 자신 쪽으로 당겨옵니다. 스킬을 다시 사용하면 쓰레쉬가 적 쪽으로 당겨집니다." },
            { key: "W", name: "어둠의 통로", icon: "assets/characters/thresh/hud/icons2d/thresh_w.png",
              desc: "쓰레쉬가 랜턴을 던져 근처의 아군 챔피언들을 피해로부터 보호합니다. 아군이 랜턴을 클릭하면 쓰레쉬에게 질주할 수 있습니다." },
            { key: "E", name: "사슬 채찍", icon: "assets/characters/thresh/hud/icons2d/thresh_e.png",
              desc: "쓰레쉬가 공격하기 위한 힘을 모아, 다음 공격까지 대기시간이 길수록 더 큰 피해를 가합니다. 활성화하면 쇠사슬을 휘둘러 맞은 적들을 휘두른 방향으로 밀어냅니다." },
            { key: "R", name: "영혼 감옥", icon: "assets/characters/thresh/hud/icons2d/thresh_r.png",
              desc: "벽으로 된 감옥이 부서지면 둔화를 일으키며 피해를 입힙니다." },
        ]
    },
    Blitzcrank: {
        name: "블리츠크랭크", title: "거대 증기 골렘", pos: ["sup"], diff: 1, dmg: "AP", ps: [1, 2, 3, 1, 1],
        icon: "v1/champion-icons/53.png",
        img: "assets/characters/blitzcrank/skins/base/blitzcrankloadscreen.jpg",
        skills: [
            { key: "P", name: "마나 보호막", icon: "assets/characters/blitzcrank/hud/icons2d/blitzcrankp.png",
              desc: "체력이 낮아지면 블리츠크랭크가 마나에 비례하여 보호막을 얻습니다." },
            { key: "Q", name: "로켓 손", icon: "assets/characters/blitzcrank/hud/icons2d/blitzcrankq.png",
              desc: "블리츠크랭크가 오른손을 발사하여 앞에 있는 적을 붙잡아 당기면서 피해를 입힙니다." },
            { key: "W", name: "폭주", icon: "assets/characters/blitzcrank/hud/icons2d/blitzcrankw.png",
              desc: "블리츠크랭크가 힘을 충전하여 이동 및 공격 속도를 크게 향상시킵니다. 이 효과가 끝나면 일시적으로 이동 속도가 느려집니다." },
            { key: "E", name: "강철 주먹", icon: "assets/characters/blitzcrank/hud/icons2d/blitzcranke.png",
              desc: "블리츠크랭크가 주먹에 힘을 모아 다음 공격 시 적에게 두 배의 피해를 입히고 적을 공중으로 띄웁니다." },
            { key: "R", name: "정전기장", icon: "assets/characters/blitzcrank/hud/icons2d/blitzcrankr.png",
              desc: "블리츠크랭크의 공격을 받은 적에게 표식을 남기고 1초 후 번개 피해를 입힙니다. 스킬 사용 시 주변 적의 보호막을 제거하고 피해를 입히며 잠시 침묵에 걸리게 합니다." },
        ]
    },
    Sona: {
        name: "소나", title: "현의 명인", pos: ["sup"], diff: 1, dmg: "AP", ps: [2, 1, 2, 1, 2],
        icon: "v1/champion-icons/37.png",
        img: "assets/characters/sona/skins/base/sonaloadscreen.jpg",
        skills: [
            { key: "P", name: "파워 코드", icon: "assets/characters/sona/hud/icons2d/sona_passive_charged.png",
              desc: "아첼레란도: 소나가 기본 스킬을 잘 사용하면 최대치가 될 때까지 영구적으로 궁극기를 제외한 스킬 가속 효과를 얻습니다. 최대치에 도달한 후 스킬을 성공적으로 사용하면 중첩이 쌓이는 대신 남은 궁극기 재사용 대기시간이 감소합니다. 파워 코드소나가 스킬을 특정 횟수 사용하고 나면 다음 기본 공격이 추가 마법 피해를 입히고, 소나가 마지막으로 사용한 기본 스킬에 따라 그 효과가 더 증폭될 수 있습니다." },
            { key: "Q", name: "용맹의 찬가", icon: "assets/characters/sona/hud/icons2d/sona_q.png",
              desc: "소나가 용맹의 찬가를 연주하여 강렬한 선율을 발사하여 주변에 있는 두 명의 적에게 마법 피해를 입힙니다. 이때 챔피언과 몬스터를 우선 공격합니다. 또한 이 스킬을 사용하면 잠시 동안 오라가 생겨서 효과 범위 안에 있는 아군이 다음번 적 공격 시 추가 피해를 입힙니다." },
            { key: "W", name: "인내의 아리아", icon: "assets/characters/sona/hud/icons2d/sona_w.png",
              desc: "소나가 인내의 아리아를 연주하여 보호의 음률을 내보내 근처 부상 당한 아군 1명과 자신의 체력을 회복합니다. 또한 이 스킬을 사용하면 잠시 동안 오라가 생겨서 효과 범위 안의 모든 아군에게 일시적으로 보호막을 씌워줍니다." },
            { key: "E", name: "기민함의 노래", icon: "assets/characters/sona/hud/icons2d/sona_e.png",
              desc: "소나가 기민함의 노래를 연주하여 주변 아군의 이동 속도를 증가시키고 잠시 동안 오라를 생성합니다. 오라에 닿은 아군 챔피언은 추가 이동 속도를 얻습니다." },
            { key: "R", name: "크레센도", icon: "assets/characters/sona/hud/icons2d/sona_r.png",
              desc: "소나가 궁극의 선율을 연주하여 적 챔피언들을 기절시키며 춤을 추게 만들고, 마법 피해를 입힙니다." },
        ]
    },
    Leona: {
        name: "레오나", title: "여명의 빛", pos: ["sup"], diff: 1, dmg: "AP", ps: [1, 3, 3, 1, 1],
        icon: "v1/champion-icons/89.png",
        img: "assets/characters/leona/skins/base/leonaloadscreen.jpg",
        skills: [
            { key: "P", name: "햇빛", icon: "assets/characters/leona/hud/icons2d/leonap.png",
              desc: "공격 스킬은 대상에게 1.5초 동안 햇빛 효과를 부여합니다. 아군 챔피언이 햇빛에 걸린 적을 공격하면 햇빛 효과가 사라지며 추가 마법 피해를 줍니다." },
            { key: "Q", name: "여명의 방패", icon: "assets/characters/leona/hud/icons2d/leonaq.png",
              desc: "레오나가 다음 기본 공격에서 방패를 사용하여 대상에게 추가 마법 피해를 입히고 기절시킵니다." },
            { key: "W", name: "일식", icon: "assets/characters/leona/hud/icons2d/leonaw.png",
              desc: "레오나가 방패를 들어 피해량 감소 효과를 얻고 방어력과 마법 저항력을 높입니다. 지속시간이 끝날 때 근처에 적이 있으면 마법 피해를 주며 스킬의 지속시간이 늘어납니다." },
            { key: "E", name: "천공의 검", icon: "assets/characters/leona/hud/icons2d/leonae.png",
              desc: "레오나가 검으로 태양의 형상을 쏘아 일직선에 있는 적에게 마법 피해를 줍니다. 이 형상이 사라지면 마지막으로 공격 당한 챔피언이 일시적으로 이동 불능 상태가 되며 레오나가 그쪽으로 돌격하게 됩니다." },
            { key: "R", name: "흑점 폭발", icon: "assets/characters/leona/hud/icons2d/leonar.png",
              desc: "레오나가 태양 에너지를 소환하여 일정 범위 내 적에게 피해를 줍니다. 이 범위 한가운데 있는 적은 기절하며 외곽에 있는 적은 이동 속도가 느려집니다." },
        ]
    },
};
