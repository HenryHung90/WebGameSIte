import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["謝昀軒", "吳宜樺", "林劭謙", "洪立恒"];
  const Content = [
    "介面、背景、動畫、人物、物件設計",
    "第一關地圖設計、第一關程式、音樂",
    "第三關地圖設計、第三關程式、物件互動程式設計",
    "第二關地圖設計、第二關程式、粒子效果程式設計",
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
