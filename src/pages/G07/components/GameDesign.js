import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G07/img/Design_1.png",
      "./Project/G07/img/Design_2.png",
      "./Project/G07/img/Design_3.png",
      "./Project/G07/img/Design_4.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["傳送門", "傳送主角從A到B點", ""],
      ["噴射火焰", "火焰能扣玩家生命值", ""],
      ["過關星星", "收集滿三顆才能過關", ""],
      ["烤箱燈條", "熱度會扣玩家生命值", ""],
      ["上下地板", "上下移動的地板", ""],
      ["左右地板", "左右移動的地板", ""],
      ["崩塌地板", "踩上去會下掉的地板", ""],
    ],
    [
      ["腳色移動", "每次180", ""],
      ["腳色跳躍", "每次向上375", ""],
      ["腳色血量", "初始100為單位", ""],
      ["腳色傷害", "碰撞到會扣血的以一偵為單位扣除0.4(第一關為0.12)", ""],
      ["餅乾", "當腳色碰撞到馬上縮小及掉落", ""],
    ],
    [
      [
        "冰塊行走聲",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1_o9NnDZmECu16o-5lnPv13apzZ0_p3pm/view?usp=sharing",
      ],
      [
        "冰塊跳躍聲",
        "",
        ".mp3",
        "https://drive.google.com/file/d/14fPZ4bj9xcJHDXDJ0n2YiajW_G7WIyT-/view?usp=sharing",
      ],
      [
        "冰塊碎裂聲",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1dF0UcPZQsf47ZekFN4gfZkDntL54T1fF/view?usp=sharing",
      ],
      [
        "餅乾碎裂聲",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1Q6iwcAxYxWo69isQx_WNKpQzOMpbeILv/view?usp=sharing",
      ],
      [
        "烤箱火焰聲",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1TK10zQXWHiJY9sKH-9XPurXpFH2yXh9V/view?usp=sharing",
      ],
      [
        "遊戲背景音樂",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1f-00TM4-arOSrYjLi77ubaHqsgrP0efG/view?usp=sharing",
      ],
      [
        "吃掉雪花聲音",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1GH5wryFrunFjGhG3xGrfxmHeXM-wTAvS/view?usp=sharing",
      ],
      [
        "過關音效",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1-fUc1Wt0-mbCJB6p3hW2IgExl2aKr21R/view?usp=sharing",
      ],
      [
        "死亡音效",
        "",
        ".mp3",
        "https://drive.google.com/file/d/1iHFzu1R11gSvxsMZ9H66PVKLX9I5VrWK/view?usp=sharing",
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
