import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G01/img/DScene_2.png",
      "./Project/G01/img/DScene_3.png",
      "./Project/G01/img/DScene_4.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["怪物", "怪物會攻擊中心塔，讓塔被破壞", "大小 20*20"],
      ["塔", "塔是唯一的堡壘，要防止被怪物侵襲", "大小 36*60"],
    ],
    [
      ["角色移動", "前後左右各 100", ""],
      [
        "怪物移動",
        "速度在 100~ -100 之間",
        "攻擊第一關為 1，第二關為 2，第三關為 3",
      ],
      ["塔", "", "血量 50，第二關 40，第三關 30"],
    ],
    [
      [
        "背景音樂",
        "我們上網找了相關的遊戲音效素材以及可能合適的 BGM，大部分也是在 RPG maker 的素材包裡面尋找的。",
        "",
        "https://www.rpgmakerweb.com/run-time-package",
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
