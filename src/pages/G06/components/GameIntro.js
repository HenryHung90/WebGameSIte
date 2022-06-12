import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "2D 橫向卷軸、似 Endless Runner、動作遊戲、具指令功能。",
    "團隊共識想塑造“特色化“遊戲;以創意獨特、美術創新、玩法稀有、技術層面 具突破性的遊戲，但成員人數少，因此目標要呈現小而精美的原創性遊戲、並以獨特性、以及自由度作為亮眼的指標，希望能帶給玩家輕鬆愉快的遊玩體驗。",
    "遊戲概念參考自此草莓成長動畫片:https://www.youtube.com/watch?v=MzIz3kRpvVU，動畫片呈現草莓在成長過程中是肉食性植物、會食用昆蟲等生命並消化作為補充的營養，關於確切生物學科學角度而言解釋此動畫是否符合真實，並不是屬於遊戲專題設計的範疇。團隊將以動畫呈現的“肉食性草莓”作為主要發想對象，以此作為主角進行 IP 化以及產品化，且希望未來能夠出一系列不同的植物類型主角嘗試不同的遊玩方式。",
  ];

  return (
    <div className="GroupHome_GameIntro" id="GameIntro">
      <h1 className="GroupHome_Container_Text">遊戲介紹</h1>
      <div className="GroupHome_GameIntro_Text" id="GameTheme">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMotivation">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameIntro">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
    </div>
  );
};

export default GameIntro;
