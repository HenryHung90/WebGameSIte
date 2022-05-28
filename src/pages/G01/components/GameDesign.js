import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G02/img/DScene_1.png",
      "./Project/G02/img/DScene_2.png",
      "./Project/G02/img/DScene_3.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["屍塊", "玩家需要獲得此項屍塊才能通往下一關", "大小:50*50"],
      ["梯子", "玩家利用梯子往上、下爬", "大小:100*h (高度不固定)"],
      ["防毒面具", "獲得防毒面具時,玩家可以抵禦毒氣的攻擊", "大小:40*40"],
      ["捕獸夾", "當玩家碰到捕獸夾時則玩家死亡", "大小:60*30"],
      [
        "牢籠",
        "玩家走到牢籠底部時,牢籠會掉落,當玩家因未能閃開",
        "大小:120*120",
      ],
      [
        "毒氣",
        "玩家處在毒氣範圍時需要佩 戴防毒面具經過這個區域, 否則人物死亡",
        "大小:隨機",
      ],
      [
        "陷阱",
        "玩家需要跳躍經過,否則玩 家將會落入陷阱被尖刺刺死",
        "大小:60*h (高度依照場景決定)",
      ],
    ],
    [
      ["角色移動", "每次 200", ""],
      ["角色跳躍", "向上最大-200", "↑ 鍵按住即可達到最大值中途放開即停止向上"],
      ["角色血量", "血量:1 單位", ""],
      ["捕獸夾", "血量:-1 單位", ""],
      ["牢籠", "血量:0 單位", "一樣造成遊戲失敗"],
      ["弓箭", "血量:-1 單位", ""],
      ["毒氣", "血量:每秒 -0.5 單位", "具有防毒面具可免疫傷害"],
      ["尖刺陷阱", "血量:-1 單位", ""],
    ],
    [
      [
        "背景音樂",
        "0:00-3:18",
        ".mp3",
        "https://www.youtube.com/watch?v=QToskB5gZZA",
      ],
      [
        "人物走路",
        "",
        ".wav",
        "https://freesound.org/people/fthgurdy/sounds/528953/",
      ],
      [
        "人物跳躍",
        "",
        ".wav",
        "https://freesound.org/people/kfatehi/sounds/363921/",
      ],
      [
        "角色死亡",
        "",
        ".wav",
        "https://freesound.org/people/ludist/sounds/204450/",
      ],
      [
        "角色通關",
        "",
        ".wav",
        "https://freesound.org/people/jbeetle/sounds/274510/",
      ],
      [
        "捕獸夾",
        "",
        ".wav",
        "https://freesound.org/people/Jackjan/sounds/159339/",
      ],
      [
        "弓箭射出",
        "0:00-0:01",
        ".wav",
        " https://freesound.org/people/plantmonkey/sounds/410751/",
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
