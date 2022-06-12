import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G11/img/Design_1.png",
      "./Project/G11/img/Design_2.png",
      "./Project/G11/img/Design_3.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      [
        "欄杆",
        "障礙物，阻擋主角去路，但主角攻擊時可穿越。",
        "35*47、65*47、 125*47、 35*77、65*77、 125*77",
      ],
      [
        "捕獸夾",
        "陷阱，主角碰到後，會夾在主角身上一段時間，使主角速度變慢。",
        "40*25",
      ],
      ["大門", "傳送主角到第二關。", "93*121"],
      ["仙人掌", "障礙物，阻擋主角去路。", "64*64"],
      ["蛇", "怪物，會傷害主角，玩家必須攻擊或閃避。", "99*45"],
      ["蠍子", "怪物，會傷害主角，玩家必須攻擊或閃避。", "80*73"],
      [
        "流沙",
        "陷阱，主角碰到時，會直直陷入，需要一直跳躍才能掙脫，否則死亡。",
        "64*31",
      ],
      ["城堡", "傳送主角到第三關。", "128*128"],
      ["地刺", "陷阱，當主角碰到時會傷害主角。", "392*192、335*193"],
      [
        "農場主人(Boss)",
        "是原本的農場主人，想要把馬找回去。會攻擊主角，當主角碰到農夫時會受傷害。低於一定血量後會黑化，此時主角碰到則會受到加倍傷害。",
        "122*150",
      ],
      ["寶石", "主角要收集此物最後才能變身成為彩虹小馬。", "40*40"],
      ["肉塊", "主角如果吃到此物最後就會變身成為血腥小馬。", "66*52"],
    ],
    [
      ["角色移動", "右:160 左:-160", ""],
      ["角色跳躍", "-330", "跳躍後還能左右移動"],
      ["角色血量", "血量:5顆愛心", ""],
      ["角色攻擊", "攻擊力:1顆心", ""],
      ["捕獸夾", "", ""],
      ["蛇", "扣1顆心", ""],
      ["仙人掌", "無法移動", ""],
      ["蠍子", "扣1顆心", ""],
      [
        "流沙",
        "無法移動，高度淹過主角的頭的瞬間，扣 5 顆心",
        "主角需要一直跳躍才能掙脫。否則會被淹死",
      ],
      ["地刺", "無法移動", ""],
      [
        "農場主人(Boss)",
        "正常狀態 左:110右:110 黑化後 左:130 右:130  攻擊力:扣主角 2 顆心。",
        "如果沒變身成彩虹小馬或血腥小馬則絕對無法打贏。",
      ],
    ],
    [
      [
        "開始畫面的背景音樂",
        "",
        ".mp3",
        "https://freesound.org/people/TheoTer/sounds/510804/",
      ],
      [
        "背景音樂(第一關)",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1NqeXFSBQiu_NqKcbcNb77O9J85ItJ1ko/view?usp=sharing",
      ],
      [
        "背景音樂(第二關)",
        "0:00-0:08",
        ".mp3",
        "https://drive.google.com/file/d/1gruieEbgqfbw-BslNFCemDei2bEnhN0F/view?usp=sharing",
      ],
      [
        "背景音樂(第三關)",
        "",
        ".mp3",
        "https://freesound.org/people/Sirkoto51/sounds/416632/",
      ],
      [
        "通關音樂",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1Nqa99edjiu3Hp2gdJBA0PbLZlXgeVmut/view?usp=sharing",
      ],
      [
        "主角扣血",
        "0:00-0:01",
        ".mp3",
        "https://freesound.org/people/arnaud%20coutancier/sounds/271266/",
      ],
      [
        "捕獸夾夾起",
        "0:50-0:53",
        ".mp3",
        "https://freesound.org/people/daveincamas/sounds/44076/",
      ],
      [
        "抵達大門或城堡時的開門聲",
        "0:20-0:23",
        ".mp3",
        "https://www.youtube.com/watch?v=Nfg1LS5b5x8",
      ],
      [
        "農場主人死亡時",
        "0:50-0:53",
        ".mp3",
        "https://freesound.org/people/jorickhoofd/sounds/160045/",
      ],
      [
        "收集到寶石時",
        "0:10-0:11",
        ".mp3",
        "https://www.youtube.com/watch?v=wdMC0mggMT4",
      ],
      [
        "吃到肉塊時",
        "0:00-0:01",
        ".mp3",
        "https://freesound.org/people/ursenfuns/sounds/535012/",
      ],
      [
        "變身成彩虹小馬時",
        "",
        ".mp3",
        "https://freesound.org/people/Robinhood76/sounds/342432/",
      ],
      [
        "變身成血腥小馬 時",
        "",
        ".mp3",
        "https://freesound.org/people/Slave2theLight/sounds/157049/",
      ],
    ],
  ];
  return (
    <div className="GroupHome_GameDesign" id="GameDesign">
      <h1 className="GroupHome_Container_Text">遊戲美術設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameDesign">
        <GameImageElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameElement">
        <GameTableElement
          Box={Box[1]}
          Header={Header[1]}
          TableHeader={TableHeader[0]}
          TableContainer={TableContainer[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameParameter">
        <GameTableElement
          Box={Box[2]}
          Header={Header[2]}
          TableHeader={TableHeader[1]}
          TableContainer={TableContainer[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameVocal">
        <GameTableElement
          Box={Box[3]}
          Header={Header[3]}
          TableHeader={TableHeader[2]}
          TableContainer={TableContainer[2]}
        />
      </div>
    </div>
  );
};

export default GameDesign;
