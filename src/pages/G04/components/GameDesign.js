import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [["./Project/G04/imgs/DScene_1.png"]];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      [
        "單槓",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:188*188",
      ],
      [
        "球1",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:98*98",
      ],
      [
        "球2",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:147*147",
      ],
      [
        "屁孩",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:381*120",
      ],
      [
        "盆栽",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:61*80",
      ],
      [
        "蹺蹺板",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:367*96",
      ],
      [
        "盪鞦韆",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:243*140",
      ],
      [
        "樹",
        "障礙物，玩家須跳過才可 前進，或當做第二起跳點，讓角色跳得更高。",
        "大小:120*195、149*400",
      ],
      ["鑰匙", "通關需蒐集之道具，集滿三個才可過關。", "大小:42*87"],
      ["甜甜圈", "通關需蒐集之道具，集滿三個才可過關。", "大小:101*67"],
      ["狗骨頭", "通關需蒐集之道具，集滿三個才可過關。", "大小:82*51"],
      ["大便", "碰到將使角色縮小。", "大小:48*43"],
      ["水滴", "碰到將使角色還原。", "大小:41*68"],
    ],
    [
      ["角色移動", "每次 160", "在空中也可以左右 移動"],
      ["角色跳躍", "最大向上 -330", ""],
      ["縮小大便", "變成 0.1 倍", "縮小變黃"],
      ["復原水滴", "恢復成 0.3 倍", "大小顏色復原"],
      ["骨頭", "1單位", "碰撞屁孩才會出現"],
      ["鑰匙", "1單位", ""],
      ["甜甜圈", "1單位", "碰撞屁孩才會出現"],
    ],
    [
      [
        "跳躍",
        "",
        "",
        "音效的資料夾:https://drive.google.com/drive/folders/1q0_fD555i7hA5lzfkrrIOrSoZueHhWLP?usp=sharing",
      ],
      ["掉落", "", "", ""],
      ["踩到大便", "", "", ""],
      ["踩到小孩", "", "", ""],
      ["吃到水滴", "", "", ""],
      ["吃到要收集的寶物", "", "", ""],
      ["點選", "", "", ""],
      ["背景音", "", "", ""],
      ["失敗/過關", "", "", ""],
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
