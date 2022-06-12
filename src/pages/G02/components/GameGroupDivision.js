import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["李佳欣", "阮氏玉紅", "簡紫晴", "陳子晴"];
  const Content = [
    "遊戲故事發想、遊戲流程及關卡設計、遊戲場景設計、企劃書撰寫、企劃書撰寫、第一關程式碼、影片錄製",
    "遊戲故事發想、遊戲流程及關卡設計、遊戲元素設計、企劃書撰寫、開頭程式碼、第一關程式碼",
    "遊戲故事發想、遊戲流程及關卡設計、遊戲場景設計、企劃書撰寫、遊戲音效",
    "遊戲故事發想、遊戲流程及關卡設計、遊戲元素設計、企劃書撰寫、遊戲音效",
  ];

  return (
    <div className="GroupHome_GroupDivision" id="GroupDivision">
      <h1 className="GroupHome_Container_Text">小組分工</h1>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
