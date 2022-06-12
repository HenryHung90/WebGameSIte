import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["姜昱呈", "張皓鈞", "吳松懋", "張劭禕", "侯君翰", "江秉成"];
  const Content = [
    "程式前半段，企劃書主體",
    "構思發想，問題提案想法，吉祥物",
    "程式問題 Debug，角色素材設計",
    "程式後半段主體，測試除錯，遊戲數值設計",
    "美術主體，角色素材設計",
    "企劃，腳本，主題構思",
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
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[4]}
          Content={Content[4]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[5]}
          Content={Content[5]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
