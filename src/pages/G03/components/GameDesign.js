import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G03/img/Design_1.png",
      "./Project/G03/img/Design_2.png",
      "./Project/G03/img/Design_3.png",
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
        "書本",
        "所有關卡，內有阿 JJ 的逃「疫」過程。",
        "書頁圖片取自https://www.crazy-tutorial.com/18353.html",
      ],
      [
        "提示物件",
        "提示玩家該物件，可能是對物件樣子的形容，也可能是物件位置的提示。",
        "",
      ],
      ["前往下一關按鈕", "點擊按鈕將前往下一關", ""],
      ["提示小圖", "放置被找尋物件的縮小圖", ""],
      ["跑馬燈", "出現在第三關，播報防疫政策", ""],
      ["神秘包裹", "第一關，為被尋找物件", ""],
      ["鑰匙", "第一關，為被尋找物件", ""],
      ["內褲", "第一關，為被尋找物件", ""],
      ["浴缸", "第一關，為被尋找物件", ""],
      ["豬腳飯", "第一關，為被尋找物件", ""],
      ["酒精噴", "第二關，為被尋找物件", ""],
      ["公車站牌", "第二關，為被尋找物件", ""],
      ["店員", "第二關，為被尋找物件", ""],
      ["消毒酒精", "第二關，為被尋找物件", ""],
      ["水壺", "第二關，為被尋找物件", ""],
      ["衛生紙盒", "第二關，為被尋找物件", ""],
      ["馬桶", "第二關，為被尋找物件", ""],
      ["狗狗", "第二關，為被尋找物件", ""],
      ["拿鐵", "第二關，為被尋找物件", ""],
      ["老奶奶", "第二關，為被尋找物件", ""],
      ["RedBull", "第三關，為被尋找物件", ""],
      ["樹枝", "第三關，為被尋找物件", ""],
      ["警車", "第三關，為被尋找物件", ""],
      ["漢堡", "第三關，為被尋找物件", ""],
      ["寄居蟹", "第三關，為被尋找物件", ""],
      ["草莓牛奶", "第三關，為被尋找物件", ""],
      ["衛生紙", "第三關，為被尋找物件", ""],
      ["三輪車", "第三關，為被尋找物件", ""],
      ["飲料", "第三關，為被尋找物件", ""],
      ["消波塊", "第三關，為被尋找物件", ""],
      ["部長", "第三關，為被尋找物件", ""],
      ["大洋遊俠海超人", "第三關，為被尋找物件", ""],
    ],
    [
      ["螢幕視角", "每次 10", "按住鍵盤上下左右來控制視角移動"],
      ["滾輪", "", "滑鼠中間滾輪放大縮小"],
    ],
    [
      ["背景音樂 1", "", ".mp3", "https://www.youtube.com/watch?v=gep8nW8DhWY"],
      [
        "背景音樂 2",
        "",
        ".mp3",
        "https://kenkenbgm.blogspot.com/2020/03/bgmbgm8bit.html",
      ],
      [
        "背景音樂 3",
        "",
        ".mp3",
        "https://gamesounds.xyz/Audionautix/Top40/ClapAlong.mp3",
      ],
      ["翻書聲", "", ".mp3", "https://sc.chinaz.com/yinxiao/220310201861.htm"],
      [
        "點擊聲",
        "",
        ".mp3",
        "https://freesound.org/people/jbeetle/sounds/274510/",
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
