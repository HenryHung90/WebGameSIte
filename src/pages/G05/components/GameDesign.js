import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G05/img/DScene_3.png",
      "./Project/G05/img/DScene_4.png",
      "./Project/G05/img/DScene_5.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["小黴菌", "", "大小 : 80*60"],
      ["小小黴菌", "會增加子彈數量", "大小 : 25*20"],
      ["泡泡", "主角碰到時生命值會扣 1 單位", "大小 : 65*65"],
      ["去黴大師", "主角碰到時生 命值會扣 2 單位", "大小 : 95*140"],
    ],
    [
      ["小黴菌移動", "每次 160", ""],
      ["小黴菌跳躍", "最大向上 -330", ""],
      ["小小黴菌", "不會移動", ""],
      ["泡泡", "1單位", "每吃完 5 顆小小黴菌，會再增加一顆泡泡"],
      ["去黴大師", "移動每次60、2單位", "會跟著主角移動"],
      ["子彈", "移動每次300、1單位", "攻擊去霉大師"],
    ],
    [
      [
        "主頁背景音樂",
        "",
        ".mp3",
        "https://www.youtube.com/watch?v=2-ptHN6sxP0",
      ],
      ["攻擊聲", "", ".mp3", "https://taira-komori.jpn.org/game01tw.html"],
      [
        "吃到小小黴菌的聲音",
        "",
        ".mp3",
        "https://taira-komori.jpn.org/game01tw.html",
      ],
      [
        "碰到泡泡跟去霉大師的音效",
        "",
        ".mp3",
        "https://www.youtube.com/watch?v=B4_PW6Kx_6M",
      ],
      [
        "破關失敗的音效",
        "",
        ".mp3",
        "https://www.youtube.com/watch?v=T-B4ArMieLs",
      ],
      [
        "第一關卡背景音樂",
        "",
        ".mp3",
        "https://www.youtube.com/watch?v=a109-D8cuCI&t=1s",
      ],
      [
        "第二關卡背 景音樂",
        "",
        ".mp3",
        "https://www.youtube.com/watch?v=yz6RGdWUgfs",
      ],
      [
        "獲勝音樂",
        "",
        ".wav",
        "https://sc.chinaz.com/yinxiao/210413011583.htm",
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
